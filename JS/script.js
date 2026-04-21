const texto = "PAYASO";
const elemento = document.getElementById("anim");

let i = 0;

function escribir () {
    if (i < texto.length) {
        elemento.textContent += texto.charAt(i);
        i++;
        setTimeout(escribir, 100);
}
}

escribir ();
