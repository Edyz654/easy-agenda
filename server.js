const express = require('express');
const app = express();
app.use(express.json());

app.get('/compromissos', (req, res) => {
 res.json([{ id_compromisso: 1, titulo: 'titulo' }]);
});

const PORT = 3000;
app.listen(PORT, () => {
 console.log(`Servidor rodando na porta ${PORT}`);
});
