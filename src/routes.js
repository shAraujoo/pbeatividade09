const express = require('express');
const router = express.Router();
const clienteController = require('./controller/controleClientes');
const telefoneController = require('./controller/controleTelefone');
const quartoController = require('./controller/controleQuartos');
const controleReservas = require('./controller/controleReservas');
const controleEstacionamento = require('./controller/controleEstacionamento');


//Routes Cliente
router.get('/clientes', clienteController.listarClientes);
router.post('/clientes', clienteController.criarCliente);
router.delete('/clientes/:id', clienteController.deletarCliente);
router.put('/clientes/:id', clienteController.atualizarCliente);


//Routes Telefone
router.post('/telefones', telefoneController.criarTelefone);
router.get('/cliente/:clienteId', telefoneController.listarTelefonesPorCliente);
router.get('/telefones', telefoneController.listarTelefones);
router.delete('/telefones/:id', telefoneController.deletarTelefone);

//Routes Quartos

router.get('/quartos', quartoController.listarQuartos);
router.post('/quartos', quartoController.criarQuarto);
router.put('/quartos/:id', quartoController.atualizarQuarto);
router.delete('/quartos/:id', quartoController.deletarQuarto);

// Rotas para reservas
router.get('/reservas', controleReservas.listarReservas);
router.get('/reservas/:id', controleReservas.obterReservaPorId);
router.post('/reservas', controleReservas.criarReserva);
router.put('/reservas/:id', controleReservas.atualizarReserva);
router.delete('/reservas/:id', controleReservas.deletarReserva);

// Rotas para estacionamento
router.post('/estacionamento', controleEstacionamento.criarEstacionamento)
router.get('/estacionamento', controleEstacionamento.listarEstacionamentos)
router.get('/estacionamento/:id', controleEstacionamento.obterEstacionamentoPorId)
router.put('/estacionamento/:id', controleEstacionamento.atualizarEstacionamento)
router.delete('/estacionamento/:id', controleEstacionamento.deletarEstacionamento)

module.exports = router;