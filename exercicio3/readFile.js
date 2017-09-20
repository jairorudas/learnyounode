module.exports = (() => {

	const fs = require('fs')

	let arquivo = process.argv[2];
	// O metodo readFileSync recebe como 'utf8' para fazer um encode do buffer que recebe a leitura 
	// Do arquivo.

	// Também podera ser utilizado o metodo toString depois da leitura do arquivo, para parsear o buffer recebido

	let linhas = fs.readFileSync(arquivo, 'utf8').split('\n').length - 1;

	console.log(linhas)
})();
