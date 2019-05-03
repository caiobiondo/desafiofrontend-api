const mongoose = require ('mongoose');

const ProductSchema = new mongoose.Schema({
    nomeTipoOperacao : {
        type: String,
        required: true,
    },

    dataEfetivaLancamento : {
        type: String,
        required: true,
    },

    dataLancamentoContaCorrenteCliente : {
        type: String,
        required: true,
    },

    numeroEvento : {
        type: String,
        required: true,
    },


    descricaoGrupoPagamento : {
        type: String,
        required: true,
    },

    codigoIdentificadorUnico : {
        type: String,
        required: true,
    },

    nomeBanco : {
        type: String,
        required: true, 
    },

    quantidadeLancamentoRemessa : {
        type: String,
        required: true,  

    },

    numeroRaizCNPJ : {
        type: String,
        required: true,
    },

    numeroSufixoCNPJ : {
        type: String,
        required: true,
    },

    valorLancamentoRemessa : {
        type: String,
        required: true,

    },

    dateLancamentoContaCorrenteCliente : {
        type: String,
        required: true,


    },

    dateEfetivaLancamento : {
        type: String,
        required: true, 

    },

});

mongoose.model('Product',ProductSchema);