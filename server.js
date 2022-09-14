const { port } = require('pg/lib/defaults')
const app = require('./src/app')
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`server rodando http://localhost:${PORT}/api`);
})