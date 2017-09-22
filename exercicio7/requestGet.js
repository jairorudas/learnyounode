const http = require('http')

module.exports = (() => {
    let url = process.argv.slice(2).join('')
    http.get(url, (response) =>{
        response.setEncoding('utf8')
        response.on('data', (data) => console.log(data));
        response.on('error', (error) => console.error(error));
    }).on('error', console.error)
})()