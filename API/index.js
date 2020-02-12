const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.listen(3000, (req, res) => {
	console.log('ok');
});

const connection = mysql.createConnection({
	host: 'localhost',
	database: 'bdcadastroclientes',
	user: 'root',
	password: ''
});

connection.connect(function(err) {
	if (err) throw err;
	console.log('Conectado');
});

/* ********   metodo get all   ********** */

app.get('/cliente', (req, res) => {
	connection.query('SELECT * FROM tbcliente', (error, result) => {
		if (error) throw error;
		return res.send(result);
	});
});
/* ************************************* */

/*****    metodo get 1 cliente   ********/

app.get('/cliente/:id', (req, res) => {
	const id = req.params.id;
	connection.query(`SELECT * FROM tbcliente WHERE codigo = ${id}`, (error, result) => {
		if (error) throw error;
		return res.send(result);
	});
});

/* ************************************* */

//****** **       metodo post     ********//

app.post('/cliente', (req, res) => {
	const { nome, email, credito, situacao } = req.body;
	console.log(req.body);
	connection.query(
		`INSERT INTO tbcliente (nome, email, credito, situacao) VALUES ('${nome}', '${email}', ${credito}, '${situacao}')`,
		(error, result) => {
			if (error) throw error;
			return res.send(result);
		}
	);
});

/* ************************************* */

// ********     metodo delete     ********//

app.delete('/cliente/:id', (req, res) => {
	const myid = req.params.id;
	console.log('metodo delete excutado');
	connection.query(`DELETE FROM tbcliente WHERE codigo = ${myid}`, (error, result) => {
		if (error) throw error;
		return res.send({ response: result.affectedRows });
	});
});


// ******** 	metodo update	 ******** //

app.put('/cliente/:id', (req, res) => {
	const { nome, email, credito, situacao } = req.body;
	const myid = req.params.id;
	console.log(myid);
	console.log(req.body);
	connection.query(`UPDATE tbcliente SET nome = ${nome}, email = ${email}, credito = ${credito}, situacao = ${situacao} WHERE codigo = ${myid}`, (error, result) => {
			if (error) throw error;
			return res.send(result);
		}
	);
});


/* ************************************* */

app.get('/login', (req, res) => {
	connection.query(`SELECT senha FROM tblogin WHERE usuario = 'zanette'`, (error, result) => {
		if (error) throw error;
		return res.send(result);
		console.log(result);
	});
});
