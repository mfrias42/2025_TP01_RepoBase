// Versión inicial
const readline = require('readline');

// Función de bienvenida
function mostrarBienvenida() {
    console.log('\n' + '='.repeat(60));
    console.log('    🚀 BIENVENIDO A MI APLICACIÓN JAVASCRIPT BÁSICA 🚀');
    console.log('='.repeat(60));
    console.log('\n📝 Este es un código básico en JavaScript que incluye:');
    console.log('   • Funciones interactivas con readline');
    console.log('   • Manejo de entrada del usuario');
    console.log('   • Cálculos de edad con fechas');
    console.log('   • Sistema de menú navegable');
    console.log('\n💡 Características técnicas:');
    console.log('   • Node.js con módulo readline nativo');
    console.log('   • Interfaz de consola amigable');
    console.log('   • Validación de datos de entrada');
    console.log('\n🎯 ¡Explora las diferentes opciones del menú!');
    console.log('='.repeat(60) + '\n');
}

function saludar() {
    console.log("Hola mundo");
}

mostrarBienvenida();
saludar();
