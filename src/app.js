// Versión inicial
const readline = require('readline');

function saludar() {
    console.log("Hola mundo");
}

function saludarInteractivo() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('¿Cuál es tu nombre? ', (nombre) => {
        console.log(`¡Hola ${nombre}! Bienvenido/a.`);
        rl.close();
    });
}

// Función para mostrar un menú de opciones
function mostrarMenu() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log('\n=== MENÚ INTERACTIVO ===');
    console.log('1. Saludo simple');
    console.log('2. Saludo personalizado');
    console.log('3. Salir');
    
    rl.question('Selecciona una opción (1-3): ', (opcion) => {
        switch(opcion) {
            case '1':
                saludar();
                rl.close();
                setTimeout(mostrarMenu, 1000);
                break;
            case '2':
                rl.close();
                saludarInteractivo();
                setTimeout(mostrarMenu, 2000);
                break;
            case '3':
                console.log('¡Hasta luego!');
                rl.close();
                break;
            default:
                console.log('Opción no válida. Intenta de nuevo.');
                rl.close();
                setTimeout(mostrarMenu, 1000);
                break;
        }
    });
}

// Iniciar la aplicación interactiva
mostrarMenu();
