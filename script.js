function camellos() {
    let entrada = document.getElementById("totalCamellos").value;
    let cantidad = Number(entrada);
    let resultado = document.getElementById("r1");

    if (entrada === "" || !Number.isInteger(cantidad) || cantidad < 1) {
        resultado.textContent = "Introduce una cantidad entera válida.";
        return;
    }

    let total = cantidad + 1;

    let hermano1 = total / 2;
    let hermano2 = total / 3;
    let hermano3 = total / 9;

    let repartidos = hermano1 + hermano2 + hermano3;
    let sobrantes = total - repartidos;
    let originalesSinRepartir = cantidad - repartidos;

    resultado.textContent =
        "Primer hermano: " + hermano1 +
        " camellos. Segundo hermano: " + hermano2 +
        " camellos. Tercer hermano: " + hermano3 +
        " camellos. De los " + total + " camellos se reparten " +
        repartidos + " y sobran " + sobrantes +
        ". Después de devolver el camello prestado, quedan " +
        originalesSinRepartir + " camellos originales sin repartir.";
}


function melones() {
    let entrada1 = document.getElementById("melones1").value;
    let entrada2 = document.getElementById("melones2").value;
    let entrada3 = document.getElementById("precio1").value;
    let entrada4 = document.getElementById("precio2").value;
    let entrada5 = document.getElementById("melonesJuntos").value;
    let entrada6 = document.getElementById("monedasJuntas").value;

    let cantidad1 = Number(entrada1);
    let cantidad2 = Number(entrada2);
    let precio1 = Number(entrada3);
    let precio2 = Number(entrada4);
    let grupo = Number(entrada5);
    let monedas = Number(entrada6);

    let resultado = document.getElementById("r2");

    if (
        entrada1 === "" || entrada2 === "" ||
        entrada3 === "" || entrada4 === "" ||
        entrada5 === "" || entrada6 === "" ||
        !Number.isInteger(cantidad1) ||
        !Number.isInteger(cantidad2) ||
        !Number.isInteger(precio1) ||
        !Number.isInteger(precio2) ||
        !Number.isInteger(grupo) ||
        cantidad1 < 0 || cantidad2 < 0 ||
        precio1 <= 0 || precio2 <= 0 ||
        grupo <= 0 || monedas <= 0
    ) {
        resultado.textContent = "Introduce datos válidos en todos los campos.";
        return;
    }

    let totalMelones = cantidad1 + cantidad2;

    let ventaSeparada = cantidad1 / precio1 + cantidad2 / precio2;

    let ventaJunta = totalMelones / grupo * monedas;

    let diferencia = ventaSeparada - ventaJunta;

    resultado.textContent =
        "Total de melones: " + totalMelones +
        ". Venta por separado: " + ventaSeparada.toFixed(2) +
        " monedas. Venta conjunta: " + ventaJunta.toFixed(2) +
        " monedas. Diferencia: " + diferencia.toFixed(2) +
        " monedas.";
}


function ecuacion() {
    let entradaA = document.getElementById("a").value;
    let entradaB = document.getElementById("b").value;
    let entradaC = document.getElementById("c").value;

    let a = Number(entradaA);
    let b = Number(entradaB);
    let c = Number(entradaC);

    let resultado = document.getElementById("r3");

    if (entradaA === "" || entradaB === "" || entradaC === "") {
        resultado.textContent = "Introduce los tres valores.";
        return;
    }

    if (a === 0) {
        resultado.textContent = "El valor de a debe ser diferente de cero.";
        return;
    }

    let d = b * b - 4 * a * c;

    if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);

        resultado.textContent =
            "Dos soluciones reales: x1 = " + x1.toFixed(4) +
            " y x2 = " + x2.toFixed(4);
    } else if (d === 0) {
        let x = -b / (2 * a);

        resultado.textContent =
            "Una solución doble: x = " + x.toFixed(4);
    } else {
        resultado.textContent =
            "No existen soluciones reales porque el discriminante es negativo.";
    }
}


function pi() {
    let entrada = document.getElementById("n").value;
    let n = Number(entrada);
    let resultado = document.getElementById("r4");

    if (
        entrada === "" ||
        !Number.isInteger(n) ||
        n < 1 ||
        n > 1000000
    ) {
        resultado.textContent =
            "Introduce un número entero entre 1 y 1000000.";
        return;
    }

    let suma = 0;

    for (let i = 1; i <= n; i++) {
        suma = suma + 1 / (i * i);
    }

    let aproximacion = Math.sqrt(6 * suma);

    resultado.textContent =
        "Aproximación de pi: " + aproximacion.toFixed(10) +
        ". Valor de referencia: 3.1415926536.";
}