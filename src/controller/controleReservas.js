const reservaModel = require('../dados/reservasModel');

exports.listarReservas = (req, res) => {
    reservaModel.getAllReservas((err, results) => {
        if (err) return res.status(500).send({ message: 'Erro ao listar reservas.' });
        res.status(200).send(results);
    });
};

exports.obterReservaPorId = (req, res) => {
    const { id } = req.params;
    reservaModel.getReservaById(id, (err, reserva) => {
        if (err) return res.status(500).send({ message: 'Erro ao obter reserva.' });
        if (!reserva) return res.status(404).send({ message: 'Reserva não encontrada.' });
        res.status(200).send(reserva);
    });
};

exports.criarReserva = (req, res) => {
    const novaReserva = {
        cliente_id: req.body.cliente_id,
        quarto_id: req.body.quarto_id,
        data_reserva: req.body.data_reserva,
        data_entrada: req.body.data_entrada,
        data_saida: req.body.data_saida,
        valor_total: req.body.valor_total,
        statusReserva: req.body.statusReserva
    };

    reservaModel.createReserva(novaReserva, (err, reserva) => {
        if (err) return res.status(500).send({ message: 'Erro ao criar reserva.' });
        res.status(201).send(reserva);
    });
};

exports.atualizarReserva = (req, res) => {
    const { id } = req.params;
    const reservaAtualizada = req.body;

    reservaModel.updateReserva(id, reservaAtualizada, (err) => {
        if (err) return res.status(500).send({ message: 'Erro ao atualizar reserva.' });
        res.status(200).send({ message: 'Reserva atualizada com sucesso' });
    });
};
exports.deletarReserva = (req, res) => {
    const { id } = req.params;

    reservaModel.deleteReserva(id, (err) => {
        if (err) return res.status(500).send({ message: 'Erro ao deletar reserva.' });
        res.status(200).send({ message: 'Reserva deletada com sucesso' });
    });
};
