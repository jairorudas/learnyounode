
exports = (() => {
	const fs = require('fs');
	const path = require('path')
	

	let [folder, extention] = process.argv.slice(2);
	//console.log(path.parse(folder))

	fs.readdir(folder, (err, data) => {
		let arquivos = data.filter((arq) => path.extname(arq) === `.${extention}`);
		arquivos.forEach(elem => console.log(elem))
	})
})();
