const tips = [
    "Despiértate y acuéstate a la misma hora todos los días.",
    "Realiza una caminata de 20-30 minutos al día.",
    "Evita consumir comida chatarra.",
    "Bebe un vaso de agua al levantarte.",
    "Incluye más ensaladas en tus comidas."
];

document.getElementById("btnConsejo").addEventListener("click", () => {
    const random = Math.floor(Math.random() * tips.length);
    document.getElementById("textoConsejo").textContent = "✅ " + tips[random];
});
