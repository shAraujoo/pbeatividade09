const estacionamentoModel = require('../dados/estacionamentoModel');

exports.criarEstacionamento = (req, res) => {
    const novoEstacionamento = {
        cliente_id: req.body.cliente_id,
        veiculo_placa: req.body.veiculo_placa,
        veiculo_marca: req.body.veiculo_marca,
        veiculo_modelo: req.body.veiculo_modelo,
        data_entrada: req.body.data_entrada,
        data_saida: req.body.data_saida || null
    };

    estacionamentoModel.createEstacionamento(novoEstacionamento, (err, estacionamento) => {
        if (err) {
            return res.status(500).json({ 
                message: 'Erro ao criar estacionamento.', 
            });
        }
        res.status(201).json(estacionamento);
    });
};

exports.listarEstacionamentos = (req, res) => {
    estacionamentoModel.getAllEstacionamentos((err, estacionamentos) => {
        if (err) {
            return res.status(500).json({ 
                message: 'Erro ao listar estacionamentos.' 
            });
        }
        res.status(200).json(estacionamentos);
    });
};

exports.obterEstacionamentoPorId = (req, res) => {
    const { id } = req.params;

    estacionamentoModel.getEstacionamentoById(id, (err, estacionamento) => {
        if (err) {
            return res.status(500).json({ 
                message: 'Erro ao obter estacionamento.' 
            });
        }
        if (!estacionamento) {
            return res.status(404).json({ 
                message: 'Estacionamento não encontrado.' 
            });
        }
        res.status(200).json(estacionamento);
    });
};

exports.atualizarEstacionamento = (req, res) => {
    const { id } = req.params;
    const dadosAtualizados = req.body;

    estacionamentoModel.updateEstacionamento(id, dadosAtualizados, (err, result) => {
        if (err) {
            return res.status(500).json({ 
                message: 'Erro ao atualizar estacionamento.' 
            });
        }
        res.status(200).json({ 
            message: 'Estacionamento atualizado com sucesso.' 
        });
    });
};

exports.deletarEstacionamento = (req, res) => {
    const { id } = req.params;

    estacionamentoModel.deleteEstacionamento(id, (err, result) => {
        if (err) {
            return res.status(500).json({ 
                message: 'Erro ao deletar estacionamento.' 
            });
        }
        res.status(200).json({ 
            message: 'Estacionamento deletado com sucesso.' 
        });
    });
};
