module.esports = (() => {
	const argumentos = process.argv.slice(2);
	var k =  argumentos.reduce((a,b) => { var n  = ~~(a) + ~~(b); return n})
	console.log(k)
})();




