import re

files = [
    r"c:\Users\GRACKO\OneDrive\REPO ANTIGRAVITY\FA ACADEMY FINAL\FA-ACADEMY\pages\CoursePlayerPhase1.tsx",
    r"c:\Users\GRACKO\OneDrive\REPO ANTIGRAVITY\FA ACADEMY FINAL\FA-ACADEMY\pages\CoursePlayerPhase2.tsx"
]

replacements = {
    "├í": "á",
    "├®": "é",
    "├¡": "í",
    "├│": "ó",
    "├║": "ú",
    "├▒": "ñ",
    "├Ü": "Ú",
    "├ë": "É",
    "├ü": "Á",
    "├ì": "Í",
    "├æ": "Ñ",
    "┬┐": "¿",
    "┬í": "¡",
    "ÔÇö": "—",
    "ÔÇ£": '"',
    "ÔÇØ": '"',
    "ÔÇÖ": "'",
    "Ô¡É´©Å": "⭐️",
    "­ƒÄô": "🎓",
    "­ƒôê": "📈",
    "­ƒÆí": "💡",
    "├ù": "×",
    "¤Ç": "π",
    "Ôü┐": "ⁿ",
}

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for bad, good in replacements.items():
        content = content.replace(bad, good)
        
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Fix applied")
