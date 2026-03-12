import re

def filter_comps(comps_str, names_to_remove):
    lines = comps_str.split('\n')
    out = []
    skip = False
    for line in lines:
        if any(line.startswith(c) for c in names_to_remove):
            skip = True
        
        if skip and (line.strip() == '};' or line.strip() == ');'):
            skip = False
            continue
        
        if not skip:
            out.append(line)
    return '\n'.join(out).strip()

def merge_phase(old_file_path, new_file_path, out_file_path, comps_regex_start, comps_regex_end, names_to_remove, comps_regex_start_new, comps_regex_end_new):
    with open(old_file_path, 'r', encoding='utf-8') as f:
        old_txt = f.read()

    with open(new_file_path, 'r', encoding='utf-8') as f:
        new_txt = f.read()

    m_old_lessons = re.search(r'lessons:\s*\[(.*?)\]\n  \}', old_txt, re.DOTALL)
    if not m_old_lessons:
        print(f"Error finding lessons in {old_file_path}")
        return
    old_lessons_str = m_old_lessons.group(1).strip()

    m_new_lessons = re.search(r'lessons:\s*\[(.*?)\]\n  \}', new_txt, re.DOTALL)
    if not m_new_lessons:
        print(f"Error finding lessons in {new_file_path}")
        return
    new_lessons_str = m_new_lessons.group(1).strip()

    combined_lessons = old_lessons_str + ",\n      " + new_lessons_str

    m_old_quiz = re.search(r'const quizQuestions = \[(.*?)\];', old_txt, re.DOTALL)
    if not m_old_quiz:
        print(f"Error finding quizzes in {old_file_path}")
        return
    old_quiz_str = m_old_quiz.group(1).strip()

    m_new_quiz = re.search(r'const quizQuestions = \[(.*?)\];', new_txt, re.DOTALL)
    if not m_new_quiz:
        print(f"Error finding quizzes in {new_file_path}")
        return
    new_quiz_str = m_new_quiz.group(1).strip()

    old_quiz_lines = old_quiz_str.split('\n')
    old_count = sum(1 for l in old_quiz_lines if '{ id:' in l)
    new_quiz_lines = [l for l in new_quiz_str.split('\n') if l.strip()]

    new_quiz_fixed = []
    new_id = old_count + 1
    for l in new_quiz_lines:
        l = re.sub(r'id:\s*\d+', f'id: {new_id}', l)
        new_quiz_fixed.append(l)
        new_id += 1

    combined_quiz = old_quiz_str + ",\n  " + "\n  ".join(new_quiz_fixed)

    comps_ptn_old = comps_regex_start + r'(.*?)' + comps_regex_end
    m_old_comps = re.search(comps_ptn_old, old_txt, re.DOTALL)
    if not m_old_comps:
        print(f"Error finding comps in {old_file_path} using {comps_ptn_old}")
        return
    old_comps_str = m_old_comps.group(1).strip()

    comps_ptn_new = comps_regex_start_new + r'(.*?)' + comps_regex_end_new
    m_new_comps = re.search(comps_ptn_new, new_txt, re.DOTALL)
    if not m_new_comps:
        print(f"Error finding comps in {new_file_path} using {comps_ptn_new}")
        return
    new_comps_str = m_new_comps.group(1).strip()

    filtered_old_comps = filter_comps(old_comps_str, names_to_remove)
    combined_comps = filtered_old_comps + "\n\n" + new_comps_str

    new_txt = new_txt.replace(m_new_lessons.group(1), "\n      " + combined_lessons + "\n    ")
    new_txt = new_txt.replace(m_new_quiz.group(1), "\n  " + combined_quiz + "\n")
    new_txt = new_txt.replace(m_new_comps.group(1), "\n" + combined_comps + "\n\n")

    old_switches = re.findall(r'case \'.*?: return <.*?/>;', old_txt)
    new_switches = re.findall(r'case \'.*?: return <.*?/>;', new_txt)
    
    all_cases = []
    for c in old_switches:
        if c not in all_cases:
            all_cases.append(c)
    for c in new_switches:
        if c not in all_cases:
            all_cases.append(c)
            
    cases_str = "\n      ".join(all_cases)

    new_txt = re.sub(r'switch\(type\) \{\n.*default: return null;\n    \}',
        'switch(type) {\n      ' + cases_str + '\n      default: return null;\n    }', new_txt, flags=re.DOTALL)

    with open(out_file_path, 'w', encoding='utf-8') as f:
        f.write(new_txt)


if __name__ == '__main__':
    # Merge Phase 1
    removes_1 = ['const QuoteCard', 'const NewsSnippet', 'const ConceptsBar']
    merge_phase(
        '../old_phase1.tsx', 
        'pages/CoursePlayerPhase1.tsx', 
        'pages/CoursePlayerPhase1.tsx',
        r'// --- COMPONENTES VISUALES FA ACADEMY ---', 
        r'// --- COMPONENTE PRINCIPAL APP FA ACADEMY ---',
        removes_1,
        r'// --- COMPONENTES VISUALES MÓDULO 1 ---', 
        r'// --- COMPONENTE PRINCIPAL APP FA ACADEMY ---'
    )

    # Merge Phase 2
    removes_2 = ['const QuoteCard', 'const NewsSnippet', 'const ConceptsBar', 'const SummaryTable']
    merge_phase(
        '../old_phase2.tsx', 
        'pages/CoursePlayerPhase2.tsx', 
        'pages/CoursePlayerPhase2.tsx',
        r'// --- COMPONENTES VISUALES FA ACADEMY \(FASE 2 COLORES:.*?\)', 
        r'// --- COMPONENTE PRINCIPAL APP FA ACADEMY - MODULO 2 ---',
        removes_2,
        r'// --- COMPONENTES VISUALES FA ACADEMY \(FASE 2 COLORES:.*?\)', 
        r'// --- COMPONENTE PRINCIPAL APP FA ACADEMY - MODULO 2 ---'
    )

    print("Merge successful")
