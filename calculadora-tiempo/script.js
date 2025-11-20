function calcular() {
  let t = parseFloat(document.getElementById("tiempo").value);
  let g = parseFloat(document.getElementById("tasa").value);
  let c = parseFloat(document.getElementById("costo").value);

  if (isNaN(t) || isNaN(g) || isNaN(c)) {
      document.getElementById("resultado").innerHTML = "Llena todos los campos.";
      return;
  }

  let horasGanadas = (t * g) / 60;
  let neto = horasGanadas - c;

  document.getElementById("resultado").innerHTML =
      "Horas ganadas: " + horasGanadas.toFixed(2) + "<br>Tiempo neto: " + neto.toFixed(2);
}
