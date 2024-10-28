const quarto = require('../dados/quartosModel'); // Correção: nome adequado

exports.listarQuartos = (req, res) => {
    quarto.getAllQuartos((err, results) => {
        if (err) return res.status(500).send({ message: 'Erro ao listar quartos.' });
        res.status(200).send(results);
    });
};

exports.criarQuarto = (req, res) => {
    const novoQuarto = {
        numero: req.body.numero,
        andar: req.body.andar,
        tipo: req.body.tipo,
        valor_diaria: req.body.valor_diaria,
        statusQuarto: req.body.statusQuarto,
        cliente_id: req.body.cliente_id
    };

    quarto.createQuartos(novoQuarto, (err, quartoCriado) => {
        if (err) return res.status(500).send({ message: 'Erro ao salvar quarto.' });
        res.status(201).send(quartoCriado);
    });
};

exports.atualizarQuarto = (req, res) => {
    const { id } = req.params;
    const quartoAtualizado = req.body;

    quarto.updateQuarto(id, quartoAtualizado, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Quarto atualizado com sucesso' });
    });
};

exports.deletarQuarto = (req, res) => {
    const { id } = req.params;

    quarto.deleteQuarto(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Quarto deletado com sucesso' });
    });
};
