/**
 * Created by AlcaponexD on 04/03/2021.
 */
const Sequelise = require('sequelize');
const connection = new Sequelise('guiaperguntas','root','',{
    host:'localhost',
    dialect:'mysql'
});

module.exports = connection;