const fs   = require('fs')
const http  = require('http') 

module.exports = (() => {
    const [port, path] = process.argv.slice(2);
    
    const Server = http.createServer((req, res) => {
        res.writeHead(200, {'content-type': 'text/plain'})
        fs.createReadStream(path).pipe(res)
        
        /**
         * FUNCIONA TAMBÉM DESCOMENTANDO ESSE CODIGO, POIS createReadStream É UM STREAM E POSSUI EVENTOS STREAMS.
         */


        // let arquivo = fs.createReadStream(path, {encoding: 'utf8'})
        // arquivo.on('data', (data) => {
        //     res.write(data)
        // })        

        //arquivo.on('end', () => {console.log('Não mais data para chegar'); process.exit()})
        //arquivo.on('error', (err) => {throw err })

    }).on('error', (err) => console.log(err))

    Server.listen(Number(port))
})()