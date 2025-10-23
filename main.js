function normalizar(texto) {
  if (texto === null) return null;
  return texto.trim().toLowerCase();
}

const palabrasValidas = ["sape", "Sape", "sAPE", "SAPE"];

let respuestaFan;
let palabra;

do {
  respuestaFan = normalizar(
    prompt(
      "¿Eres fan de El Bananero? Escribe SI si lo eres y NO si no lo eres."
    )
  );

  if (respuestaFan === null) {
    alert("Operación cancelada. ¡Hasta la vista, baby!");
    break;
  }

  if (respuestaFan !== "si" && respuestaFan !== "no") {
    alert("Responde según las indicaciones, no seas alcahuete.");
  }
} while (
  respuestaFan !== "si" &&
  respuestaFan !== "no" &&
  respuestaFan !== null
);

if (respuestaFan === "no") {
  alert("Eres tremendo CDT.");
} else if (respuestaFan === "si") {
  palabra = normalizar(
    prompt(
      "Si eres fan del Bananero, escribe aquí la palabra de 4 letras que más utiliza:"
    )
  );

  let esCorrecta = false;
  for (let i = 0; i < palabrasValidas.length; i++) {
    if (palabra === palabrasValidas[i]) {
      esCorrecta = true;
    }
  }

  if (esCorrecta) {
    alert("¡Felicidades, eres un verdadero fan del Bananero, loquita!");
  } else {
    alert("Respuesta incorrecta, eres tremendo CDT.");
  }
}
