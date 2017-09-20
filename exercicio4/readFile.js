module.exports = (() => {
	
	const fs = require('fs')
	let arquivo = process.argv[2];

	// O metodo readFileSync recebe como 'utf8' para fazer um encode do buffer que recebe a leitura 
	// Do arquivo.

	// Também podera ser utilizado o metodo toString depois da leitura do arquivo, para parsear o buffer recebido
	
	let imprimeLinhas = (error, data) => {
		console.log(arguments);
		
	}

	fs.readFile(arquivo, 'utf8', (err, data) => {
		if (err) console.log(error);
		let linhas = data.split('\n').length -1;
		console.log(linhas)		
		
	});
})();
