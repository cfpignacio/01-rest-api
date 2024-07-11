import express from 'express';
const app = express();

const port = 3000;

app.get('/', (req, res) => {
	res.send({ msg: 'Servidor funcionando!!!!' });
});

app.get('/saludar/:nombre', (req, res) => {
	const nombre = req.params.nombre;
	res.send({ msg: `Hola ${nombre} !!!` });
});

app.listen(port, () => {
	console.log('Servidor online en puerto ' + port);
});
