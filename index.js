/**
 * Created by AlcaponexD on 03/03/2021.
 */
const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const connection = require(__dirname+'/database/database');
const Pergunta = require(__dirname+'/database/models/pergunta');
//conecta db

connection.authenticate()
    .then(() => {
        console.log('Conexao feita')
    })
    .catch((err) => {
        console.log(err)
    });
//Template ejs para html  ( Tipo blade)
app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));

app.use(BodyParser.urlencoded({extended:false}));
app.use(BodyParser.json());

app.get("/",(req,res) => {
    Pergunta.findAll({raw:true}).then((perguntas) => {
        console.log(perguntas)
        res.render('index',{
            perguntas: perguntas
        }) 
    });
});

app.get("/perguntas",(req,res) => {
    res.render('perguntas')
});

app.post('/store',(req,res)=>{

    Pergunta.create({
        titulo : req.body.title,
        descricao : req.body.description
    }).then(()=> {
        res.redirect('/');
    }).catch((err) => {
        alert('Erro ao salvar' + err)
    })
});

app.listen('8000',()=>{console.log('Server rodando !')});