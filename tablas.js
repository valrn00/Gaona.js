// Imprime el encabezado de la tabla de verdad para el operador AND (&&)
console.log("Tabla de verdad del operador && (AND)");
console.log("| X | Y | X && Y |");

// Definimos las variables X e Y y evaluamos todas las combinaciones posibles
var X = true, Y = true; // Caso 1: X = true, Y = true
if (X && Y) 
    console.log(`| ${X} | ${Y} |   true   |`); // Si ambos son true, el resultado es true
else 
    console.log(`| ${X} | ${Y} |   false   |`);

X = true, Y = false; // Caso 2: X = true, Y = false
if (X && Y) 
    console.log(`| ${X} | ${Y} |   true   |`);
else 
    console.log(`| ${X} | ${Y} |   false   |`);

X = false, Y = true; // Caso 3: X = false, Y = true
if (X && Y) 
    console.log(`| ${X} | ${Y} |   true   |`);
else 
    console.log(`| ${X} | ${Y} |   false   |`);

X = false, Y = false; // Caso 4: X = false, Y = false
if (X && Y) 
    console.log(`| ${X} | ${Y} |   true   |`);
else 
    console.log(`| ${X} | ${Y} |   false   |`);

// Imprime el encabezado de la tabla de verdad para el operador OR (||)
console.log("\nTabla de verdad del operador || (OR)");
console.log("| X | Y | X || Y |");

// Evaluamos todas las combinaciones posibles para el operador OR
X = true, Y = true; // Caso 1: X = true, Y = true
if (X || Y) 
    console.log(`| ${X} | ${Y} |   true   |`); // Si al menos uno es true, el resultado es true
else 
    console.log(`| ${X} | ${Y} |   false   |`);

X = true, Y = false; // Caso 2: X = true, Y = false
if (X || Y) 
    console.log(`| ${X} | ${Y} |   true   |`);
else 
    console.log(`| ${X} | ${Y} |   false   |`);

X = false, Y = true; // Caso 3: X = false, Y = true
if (X || Y) 
    console.log(`| ${X} | ${Y} |   true   |`);
else 
    console.log(`| ${X} | ${Y} |   false   |`);

X = false, Y = false; // Caso 4: X = false, Y = false
if (X || Y) 
    console.log(`| ${X} | ${Y} |   true   |`);
else 
    console.log(`| ${X} | ${Y} |   false   |`);

// Imprime el encabezado de la tabla de verdad para la negación (!)
console.log("\nTabla de verdad de la Negación (!X)");
console.log("| X | !X |");

// Evaluamos la negación para los valores true y false
X = true; // Caso 1: X = true
if (!X) 
    console.log(`| ${X} |  true  |`); // Si X es true, !X es false
else 
    console.log(`| ${X} |  false  |`);

X = false; // Caso 2: X = false
if (!X) 
    console.log(`| ${X} |  true  |`); // Si X es false, !X es true
else 
    console.log(`| ${X} |  false  |`);

// Imprime el encabezado de la tabla de verdad para el operador condicional (->)
console.log("\nTabla de verdad del operador -> (Condicional)");
console.log("| X | Y | X -> Y |");

// Evaluamos todas las combinaciones posibles para el operador condicional
X = true, Y = true; // Caso 1: X = true, Y = true
if (!X || Y) 
    console.log(`| ${X} | ${Y} |   true   |`); // X -> Y es equivalente a !X || Y
else 
    console.log(`| ${X} | ${Y} |   false   |`);

X = true, Y = false; // Caso 2: X = true, Y = false
if (!X || Y) 
    console.log(`| ${X} | ${Y} |   true   |`);
else 
    console.log(`| ${X} | ${Y} |   false   |`);

X = false, Y = true; // Caso 3: X = false, Y = true
if (!X || Y) 
    console.log(`| ${X} | ${Y} |   true   |`);
else 
    console.log(`| ${X} | ${Y} |   false   |`);

X = false, Y = false; // Caso 4: X = false, Y = false
if (!X || Y) 
    console.log(`| ${X} | ${Y} |   true   |`);
else 
    console.log(`| ${X} | ${Y} |   false   |`);

// Imprime el encabezado de la tabla de verdad para el operador bicondicional (<->)
console.log("\nTabla de verdad del operador <-> (Bicondicional)");
console.log("| X | Y | X <-> Y |");

// Evaluamos todas las combinaciones posibles para el operador bicondicional
X = true, Y = true; // Caso 1: X = true, Y = true
if (X === Y) 
    console.log(`| ${X} | ${Y} |   true   |`); // X <-> Y es true si ambos tienen el mismo valor
else 
    console.log(`| ${X} | ${Y} |   false   |`);

X = true, Y = false; // Caso 2: X = true, Y = false
if (X === Y) 
    console.log(`| ${X} | ${Y} |   true   |`);
else 
    console.log(`| ${X} | ${Y} |   false   |`);

X = false, Y = true; // Caso 3: X = false, Y = true
if (X === Y) 
    console.log(`| ${X} | ${Y} |   true   |`);
else 
    console.log(`| ${X} | ${Y} |   false   |`);

X = false, Y = false; // Caso 4: X = false, Y = false
if (X === Y) 
    console.log(`| ${X} | ${Y} |   true   |`);
else 
    console.log(`| ${X} | ${Y} |   false   |`);