const http = require('http')
const bl = require('bl');

module.exports = (() => {
    let url = process.argv.slice(2).join('');
    //let bl = new BufferList();

    http.get(url, (response) =>{
        response.pipe(bl((err, data) => {
            if(err) return console.log(err)
            console.log(data.length);
            console.log(data.toString());
        }))
        response.on('error', (error) => console.error(error));
        
    })
    .on('error', console.error)
})()