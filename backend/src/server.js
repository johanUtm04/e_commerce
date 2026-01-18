const app = require('./app');
const env = require('./config/env');
const db = require('./config/db');

const PORT = env.PORT || 3000;

async function startServer() {
    try {
        // La máquina intenta tocar la puerta de Laragon
        await db.query('SELECT 1');
        console.log('Laragon Funcionando');

        // Si la DB responde, encendemos el servidor Express
        app.listen(PORT, () => {
            console.log(` Servidor listo en: http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1); 
    }
}

startServer();