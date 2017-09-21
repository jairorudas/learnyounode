//var filtro = require('./moduloFiltro.js').filtro => Exemplo comentado no arquivo que esta dentro de esta pasta.
var filtro = require('./moduloFiltro.js')

module.exports = (() => {
	
	let [folder, extention] = process.argv.slice(2);
	
	filtro(folder, extention, (err, arquivos) => {
		if (err) console.log(err)
		arquivos.forEach((elem) => console.log(elem))
	})
})()
