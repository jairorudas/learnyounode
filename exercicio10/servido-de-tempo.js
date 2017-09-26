const Net = require('net')

const format = (data) => {
    return data < 10 ? `0${data}`: data;
}

module.exports = (() => {
    let port = process.argv[2]

    const server = Net.createServer((socket) => {
        let date    = new Date();
        let ano     = date.getFullYear();
        let mes     = date.getMonth() + 1;
        let dia     = date.getDate();
        let hora    = date.getHours();
        let minuto  = date.getMinutes();
        
        mes         = format(mes);
        dia         = format(dia);
        minuto      = format(minuto);

        socket.write(`${ano}-${mes}-${dia} ${hora}:${minuto}\n`);
        
    }).on('error', (err) => {
        throw err
    }).on('connection', (socket)=>{
        console.log('------------------------------------');
        console.log(socket.server._connections);
        console.log('------------------------------------');
        socket.end();

    } )

    server.listen(port)
})()