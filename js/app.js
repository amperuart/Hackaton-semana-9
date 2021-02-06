// RETO 2
// 1. Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla
    function sumarNumeros() {
        console.log(2+2);
    }

    sumarNumeros();

// 2. Un estudiante realiza 4 exámenes, calcular el promedio de estos
    examen1 = 09;
    examen2 = 12;
    examen3 = 14;
    examen4 = 08;

    function promedioNotas() {
        console.log((examen1 + examen2 + examen3 + examen4) / 4);
    }

    if(promedioNotas() > 11) {
        console.log(`Estás aprobado`);
    }

    else {
        console.log(`Estás jalado`);
    }

// 3. Calcular el área de un rectángulo
    // A = b * a
    base = 12;
    altura = 6;

    function areaRectangulo() {
        console.log(`El área del rectángulo es ` + (base * altura));
    }

    areaRectangulo();

// 4. Calcular el área de un triángulo
    // (b * a) / 2
    base = 12;
    altura = 6;

    function areaTriangulo() {
        console.log(`El área del triángulo es ` + (base * altura) / 2);
    }

    areaTriangulo();

// 5. Calcular el área de una circunferencia
    // Pi * r2
    Pi = Math.PI;
    radio = 3;

    function areaCircunferencia() {
        console.log(`El área del circunferencia es ` + (radio * radio) * Math.PI);
    }

    areaCircunferencia();

// 6. Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora hombre
    sueldo = 30;
    horasSemanales = 35;

    function sueldoSemanal() {
        console.log(`El sueldo semanal del trabajador es de S/` + (sueldo * horasSemanales));
    }

    sueldoSemanal();

// 7. Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. Represéntelo mediante el diagrama de flujo y el pseudocódigo (1 pulgada = 0.0254 m).
    metros = 1;

    function pulgadasTela() {
        console.log(`Debe pedir ` + (metros * 39.37) + ` pulgadas de tela`);
    }

    pulgadasTela();

// 8. Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano
    soles = 3
    valorDolarHoy = 3.34;

    function dolar() {
        console.log(`Con S/${soles} puedes adquirir ` + (soles * valorDolarHoy) + ` de acuerdo al valor del dólar hoy`);
    }

    dolar();

// 9. Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron
    fechaNacimiento = 1993;
    fechaActual = 2021;

    function edadTrabajo() {
        console.log(`La edad de la persona es de `+ (fechaActual - fechaNacimiento) + ` años`);
    }

    edadTrabajo();

// 10. Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la edad de la persona de menor edad
    function edades() {
        const persona1 = "Hugo";
        const persona2 = "Paco";
        const persona3 = "Luis";
    
        const edad1 = 5;
        const edad2 = 6;
        const edad3 = 4;

        if(edad1 < edad2 && edad1 < edad3) {
            console.log(`${persona1} es la persona de menor edad con ${edad1} años` );
        }
    
        else if(edad2 < edad3) {
            console.log(`${persona2} es la persona de menor edad con ${edad2} años` );
        }
    
        else {
            console.log(`${persona3} es la persona de menor edad con ${edad3} años` );
        }
    }

    edades();

// 11. Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y represéntelo ,que permita determinar el bono que recibirá un trabajador
    function anosTrabajo() {
        const anosTrabajo = 6;

        if(anosTrabajo < 2) {
            console.log(`El trabajador recibe un bono de S/100` );
        }
    
        else if (anosTrabajo < 3) {
            console.log(`El trabajador recibe un bono de S/200` );
    
        }
    
        else if (anosTrabajo < 4) {
            console.log(`El trabajador recibe un bono de S/300` );
    
        }
    
        else if (anosTrabajo < 5) {
            console.log(`El trabajador recibe un bono de S/400` );
    
        }
    
        else if (anosTrabajo < 6) {
            console.log(`El trabajador recibe un bono de S/500` );
    
        }
    
        else if (anosTrabajo > 6) {
            console.log(`El trabajador recibe un bono de S/500` );
    
        }
    }

   anosTrabajo();

// 12. Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el algoritmo y representan la solución, utilizando el ciclo apropiado
    salarioInicial = 1500;

    function salario() {
        primerAno = 1500 + (1500 * 0.1);
        segundoAno = (primerAno + (primerAno * 0.1));
        tercerAno = (segundoAno + (segundoAno * 0.1));
        cuartoAno = (tercerAno + (tercerAno * 0.1));
        quintoAno = (cuartoAno + (cuartoAno * 0.1));
        sextoAno = (quintoAno + (quintoAno * 0.1));

        console.log(`El salario al cabo de 6 años es de S/ ${sextoAno}`);

        console.log(`El primer año recibió S/1500, el segundo año ${segundoAno}, el tercer año ${tercerAno}, el cuarto año ${cuartoAno}, el quinto año ${quintoAno} y el último año recibió ${sextoAno}`);
    }

    salario();

// 13. Realice un algoritmo para leer las calificaciones de N alumnos y determine el número de aprobados y reprobados
    function notaPromedio() {
        const promedio = 12;

        if(promedio >= 11) {
            return console.log(`Estás aprobado`);
        }
    
        else {
            return console.log(`Estás jalado`);
        }
    }

    notaPromedio();

// 14. Una compañía, fabrica focos de colores (verdes, blancos y rojos). Se desea contabilizar, de un lote de N focos, el número de focos de cada color que hay en existencia


// 15. Realice un algoritmo para determinar si una persona puede votar con base en su edad en las próximas elecciones
    function voto() {
        const edad = 18;

        if(voto >= 18) {
            return console.log(`Puedes votar`);
        }

        else {
            return console.log(`No puedes votar`);
        }
    }

    voto();