const express = require('express');
const taskController = require('./controllers/taskController')
const router = express.Router()
const connection = require('./models/connection');
const alojamentoController = require('./controllers/alojamentoController');



router.get('/funcionarios', taskController.getAll);
router.post('/funcionarios', taskController.postUser)


router.get('/teste-banco', async (req, res) => {
  try {
    const [rows] = await connection.query('SELECT 1');
    res.send('✅ Conexão com banco bem-sucedida!');
  } catch (error) {
    console.error('Erro ao conectar com o banco:', error);
    res.status(500).send('❌ Erro ao conectar com o banco: ' + error.message);
  }
});

router.get('/alojamentos', alojamentoController.getAll);

module.exports = router;