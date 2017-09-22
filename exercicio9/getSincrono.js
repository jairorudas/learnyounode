const http  = require('http')
const bl    = require('bl')


module.exports = (() => {
    let retorno = []
    let ind = 0
    let urls = process.argv.slice(2)

    let syncRequest = (urls, ind) => {
        
        while(ind <= 2){
            http.get(urls[ind], (response) => {
                response.pipe(bl((err, data) => {
                    if(err) return console.log(err)
                    retorno.push(data.toString())
                }));
                ind += 1;
                response.on('end',  syncRequest(urls, ind))
                response.on('error', console.error)
            })
            .on('error', console.error)
        }

    }
    syncRequest(urls, ind)

    retorno.forEach((elem) => {
        console.log(elem)
    })

})()