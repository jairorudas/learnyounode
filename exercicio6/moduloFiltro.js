/*exports.filtro = (caminho, extention, callback) => {

	const fs = require('fs'); //Para trabalhar com a abertura de arquivos
	const path = require('path') // para trabalhar com arquivos e sí e caminhos de arquivos
	let arquivos = [];
	
	fs.readdir(caminho, (err, data) => {
		if(err) callback(err);
		arquivos = data.filter((arq) => path.extname(arq) === `.${extention}`);
		callback(null, arquivos)
	})
}*/

// OU FAZER ISSO AQUI TAMBÉM FUNCIONA

module.exports = (caminho, extention, callback) => {

	const fs = require('fs'); //Para trabalhar com a abertura de arquivos
	const path = require('path') // para trabalhar com arquivos e sí e caminhos de arquivos
	let arquivos = [];
	
	fs.readdir(caminho, (err, data) => {
		if(err) return callback(err);
		arquivos = data.filter((arq) => path.extname(arq) === `.${extention}`);
		callback(null, arquivos)
	})
}
