/**
 * FA ACADEMY - Backend Database on Google Sheets
 * 
 * INSTRUCCIONES DE INSTALACIÓN:
 * 1. Crea una nueva hoja de cálculo en Google Sheets.
 * 2. Ve a 'Extensiones' -> 'Apps Script'.
 * 3. Borra todo el código existente y pega este contenido.
 * 4. Cambia la variable SECRET_TOKEN por una clave secreta propia (debe coincidir con la de tu archivo .env).
 * 5. Haz clic en 'Implementar' -> 'Nueva implementación'.
 * 6. Selecciona tipo: 'Aplicación web'.
 * 7. Configura:
 *    - Ejecutar como: 'Tú' (tu cuenta de Google).
 *    - Quién tiene acceso: 'Cualquier persona' (para permitir peticiones sin login directo de Google).
 * 8. Copia la URL de la aplicación web y pégala en tu archivo .env en VITE_SHEETS_API_URL.
 */

// Define aquí tu token secreto de seguridad
var SECRET_TOKEN = "fa_academy_secret_token_2026";

// Función de inicialización automática para crear tablas y encabezados si no existen
function initSheets() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // 1. Tabla de Usuarios
  var userSheet = ss.getSheetByName("users");
  if (!userSheet) {
    userSheet = ss.insertSheet("users");
    userSheet.appendRow(["id", "username", "email", "password_hash", "role", "allowed_phases", "super_link_token", "token_expires", "created_at"]);
    // Crear un usuario admin por defecto si está vacío
    // Contraseña por defecto: fa-academy-2026 (Hash SHA-256 de fa-academy-2026)
    var defaultAdminHash = computeSHA256("fa-academy-2026");
    userSheet.appendRow(["USR_ADMIN", "admin", "admin@fa-academy.com", defaultAdminHash, "admin", "1,2,3,4,5", "", "", new Date().toISOString()]);
  }
  
  // 2. Tabla de Progreso
  var progressSheet = ss.getSheetByName("progress");
  if (!progressSheet) {
    progressSheet = ss.insertSheet("progress");
    progressSheet.appendRow(["id", "username", "email", "phase", "lesson_index", "total_lessons", "percentage", "updated_at"]);
  }
  
  // 3. Tabla de Resultados de Exámenes
  var testSheet = ss.getSheetByName("test_results");
  if (!testSheet) {
    testSheet = ss.insertSheet("test_results");
    testSheet.appendRow(["id", "username", "email", "phase", "score", "total", "percentage", "completed_at"]);
  }
}

// Helper para calcular SHA-256 en Apps Script
function computeSHA256(input) {
  var rawHash = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, input, Utilities.Charset.UTF_8);
  var output = "";
  for (var i = 0; i < rawHash.length; i++) {
    var v = rawHash[i] & 0xff;
    if (v < 16) {
      output += "0";
    }
    output += v.toString(16);
  }
  return output;
}

// Helper para enviar respuestas en formato JSON
function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// Manejador de peticiones GET
function doGet(e) {
  try {
    initSheets();
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var action = e.parameter.action;
    var secret = e.parameter.secret;
    
    // Validar token de seguridad
    if (secret !== SECRET_TOKEN) {
      return jsonResponse({ success: false, error: "No autorizado. Token de seguridad inválido." });
    }
    
    if (action === "loginWithToken") {
      var token = e.parameter.token;
      if (!token) return jsonResponse({ success: false, error: "Falta el token" });
      
      var sheet = ss.getSheetByName("users");
      var data = sheet.getDataRange().getValues();
      
      for (var i = 1; i < data.length; i++) {
        var userToken = data[i][6]; // columna G (super_link_token)
        var expiresStr = data[i][7]; // columna H (token_expires)
        
        if (userToken === token) {
          // Verificar expiración
          if (expiresStr) {
            var expires = new Date(expiresStr);
            if (new Date() > expires) {
              return jsonResponse({ success: false, error: "El Super Link ha expirado." });
            }
          }
          
          // Retornar perfil
          return jsonResponse({
            success: true,
            user: {
              id: data[i][0],
              username: data[i][1],
              email: data[i][2],
              role: data[i][4],
              allowed_phases: data[i][5] ? String(data[i][5]).split(",") : []
            }
          });
        }
      }
      return jsonResponse({ success: false, error: "Super Link no válido o ya utilizado." });
    }
    
    if (action === "getClients") {
      var sheet = ss.getSheetByName("users");
      var data = sheet.getDataRange().getValues();
      var clients = [];
      for (var i = 1; i < data.length; i++) {
        clients.push({
          id: data[i][0],
          username: data[i][1],
          email: data[i][2],
          role: data[i][4],
          allowed_phases: data[i][5] ? String(data[i][5]).split(",") : [],
          super_link_token: data[i][6] || "",
          created_at: data[i][8]
        });
      }
      return jsonResponse({ success: true, clients: clients });
    }
    
    if (action === "getProgress") {
      var sheet = ss.getSheetByName("progress");
      var data = sheet.getDataRange().getValues();
      var progress = [];
      for (var i = 1; i < data.length; i++) {
        progress.push({
          id: data[i][0],
          username: data[i][1],
          email: data[i][2],
          phase: data[i][3],
          lesson_index: data[i][4],
          total_lessons: data[i][5],
          percentage: data[i][6],
          updated_at: data[i][7]
        });
      }
      return jsonResponse({ success: true, progress: progress });
    }
    
    if (action === "getTestResults") {
      var sheet = ss.getSheetByName("test_results");
      var data = sheet.getDataRange().getValues();
      var results = [];
      for (var i = 1; i < data.length; i++) {
        results.push({
          id: data[i][0],
          username: data[i][1],
          email: data[i][2],
          phase: data[i][3],
          score: data[i][4],
          total: data[i][5],
          percentage: data[i][6],
          completed_at: data[i][7]
        });
      }
      return jsonResponse({ success: true, results: results });
    }
    
    return jsonResponse({ success: false, error: "Acción GET no reconocida" });
  } catch (error) {
    return jsonResponse({ success: false, error: error.toString() });
  }
}

// Manejador de peticiones POST
function doPost(e) {
  try {
    initSheets();
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    var postData;
    if (e.postData && e.postData.contents) {
      try {
        postData = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        postData = e.parameter;
      }
    } else {
      postData = e.parameter;
    }
    
    var action = postData.action;
    var secret = postData.secret;
    
    // Validar token de seguridad
    if (secret !== SECRET_TOKEN) {
      return jsonResponse({ success: false, error: "No autorizado. Token de seguridad inválido." });
    }
    
    if (action === "loginWithPassword") {
      var username = postData.username;
      var password = postData.password;
      
      var sheet = ss.getSheetByName("users");
      var data = sheet.getDataRange().getValues();
      var passHash = computeSHA256(password);
      
      for (var i = 1; i < data.length; i++) {
        var sheetUsername = String(data[i][1]).toLowerCase();
        var sheetEmail = String(data[i][2]).toLowerCase();
        
        if (sheetUsername === username.toLowerCase() || sheetEmail === username.toLowerCase()) {
          if (data[i][3] === passHash) {
            return jsonResponse({
              success: true,
              user: {
                id: data[i][0],
                username: data[i][1],
                email: data[i][2],
                role: data[i][4],
                allowed_phases: data[i][5] ? String(data[i][5]).split(",") : []
              }
            });
          }
        }
      }
      return jsonResponse({ success: false, error: "Usuario o contraseña incorrectos." });
    }
    
    if (action === "registerClient") {
      var username = postData.username;
      var email = postData.email;
      var password = postData.password;
      var allowedPhases = postData.allowedPhases || "1,2"; // ej: "1,2,3"
      
      var sheet = ss.getSheetByName("users");
      var data = sheet.getDataRange().getValues();
      
      // Validar duplicado
      for (var i = 1; i < data.length; i++) {
        if (String(data[i][1]).toLowerCase() === username.toLowerCase()) {
          return jsonResponse({ success: false, error: "El nombre de usuario ya está registrado." });
        }
        if (String(data[i][2]).toLowerCase() === email.toLowerCase()) {
          return jsonResponse({ success: false, error: "El correo electrónico ya está registrado." });
        }
      }
      
      var userId = "USR_" + Math.floor(Math.random() * 900000 + 100000);
      var passHash = computeSHA256(password);
      
      // Generar token Super Link inicial
      var superLinkToken = "SL_" + Utilities.getUuid().substring(0, 8).toUpperCase() + "_" + Math.floor(Math.random() * 9000 + 1000);
      var expires = new Date();
      expires.setDate(expires.getDate() + 7); // Expiración en 7 días
      
      sheet.appendRow([
        userId,
        username,
        email,
        passHash,
        "student",
        allowedPhases,
        superLinkToken,
        expires.toISOString(),
        new Date().toISOString()
      ]);
      
      return jsonResponse({
        success: true,
        client: {
          id: userId,
          username: username,
          email: email,
          allowed_phases: allowedPhases.split(","),
          super_link_token: superLinkToken
        }
      });
    }
    
    if (action === "generateSuperLink") {
      var username = postData.clientUsername;
      var sheet = ss.getSheetByName("users");
      var data = sheet.getDataRange().getValues();
      
      for (var i = 1; i < data.length; i++) {
        if (data[i][1] === username) {
          var superLinkToken = "SL_" + Utilities.getUuid().substring(0, 8).toUpperCase() + "_" + Math.floor(Math.random() * 9000 + 1000);
          var expires = new Date();
          expires.setDate(expires.getDate() + 7); // 7 días
          
          sheet.getRange(i + 1, 7).setValue(superLinkToken); // Columna 7 (G)
          sheet.getRange(i + 1, 8).setValue(expires.toISOString()); // Columna 8 (H)
          
          return jsonResponse({ success: true, super_link_token: superLinkToken });
        }
      }
      return jsonResponse({ success: false, error: "Usuario no encontrado" });
    }
    
    if (action === "updateProgress") {
      var username = postData.username;
      var email = postData.email;
      var phase = postData.phase;
      var lessonIndex = postData.lessonIndex;
      var totalLessons = postData.totalLessons;
      var percentage = Math.round((lessonIndex / (totalLessons - 1)) * 100) + "%";
      
      var sheet = ss.getSheetByName("progress");
      var data = sheet.getDataRange().getValues();
      
      // Buscar si ya existe un registro de progreso para este usuario y fase
      var foundRow = -1;
      for (var i = 1; i < data.length; i++) {
        if (data[i][1] === username && String(data[i][3]) === String(phase)) {
          foundRow = i + 1;
          break;
        }
      }
      
      var nowStr = new Date().toISOString();
      if (foundRow !== -1) {
        // Actualizar existente
        sheet.getRange(foundRow, 5).setValue(lessonIndex); // columna E
        sheet.getRange(foundRow, 6).setValue(totalLessons); // columna F
        sheet.getRange(foundRow, 7).setValue(percentage); // columna G
        sheet.getRange(foundRow, 8).setValue(nowStr); // columna H
      } else {
        // Crear nuevo
        var progressId = "PRG_" + Math.floor(Math.random() * 900000 + 100000);
        sheet.appendRow([
          progressId,
          username,
          email,
          phase,
          lessonIndex,
          totalLessons,
          percentage,
          nowStr
        ]);
      }
      
      return jsonResponse({ success: true });
    }
    
    if (action === "submitTestResult") {
      var username = postData.username;
      var email = postData.email;
      var phase = postData.phase;
      var score = postData.score;
      var total = postData.total;
      var percentage = Math.round((score / total) * 100) + "%";
      
      var sheet = ss.getSheetByName("test_results");
      var testId = "TST_" + Math.floor(Math.random() * 900000 + 100000);
      var nowStr = new Date().toISOString();
      
      sheet.appendRow([
        testId,
        username,
        email,
        phase,
        score,
        total,
        percentage,
        nowStr
      ]);
      
      return jsonResponse({ success: true });
    }
    
    return jsonResponse({ success: false, error: "Acción POST no reconocida" });
  } catch (error) {
    return jsonResponse({ success: false, error: error.toString() });
  }
}
