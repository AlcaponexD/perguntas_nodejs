const Sequelize = require('sequelize');
const connection = require(__dirname+'/../database');
const Pergunta = connection.define('pergunta',{
        titulo:{
            type:Sequelize.STRING,
            allowNull:false
        },
        descricao:{
            type:Sequelize.TEXT,
            allowNull:false
        }
    }
);

Pergunta.sync({force:false}).then(() => {});

module.exports = Pergunta;