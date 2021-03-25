// Serveur net
//      https://nodejs.org/docs/latest-v14.x/api/net.html

// console.log(process.argv);
const tousLesArgs   = [ ...process.argv ];
const port          = tousLesArgs[2];

console.log(`Go clic : http://localhost:${port}/`);

const net = require('net')

// Format avec premier zéro si besoin
function zeroFill (i) {
    return (i < 10 ? '0' : '') + i
}

//      https://nodejs.org/docs/latest-v14.x/api/net.html#net_net_createserver_options_connectionlistener
const server = net.createServer(function (socket) {
    // logique de gestion de la socket
    // console.log('prout');
    // socket.write('truc');
    // socket.end();
    // socket.end('wesh');
    
    let date = new Date();
    // format souhaité > "YYYY-MM-DD hh:mm"
    // socket.end(`${date}\n`);

    const YYYY  = date.getFullYear();
    const MM    = zeroFill(Number(date.getMonth()) + 1);
    const DD    = zeroFill(date.getDate());
    const hh    = zeroFill(date.getHours());
    const mm    = zeroFill(date.getMinutes());

    socket.end(`${YYYY}-${MM}-${DD} ${hh}:${mm}\n`);
})
//      https://nodejs.org/docs/latest-v14.x/api/net.html#net_server_listen
server.listen(port)


//// Doc officielle
//      Go clic : http://localhost:8124/
// const server = net.createServer((c) => {
//     // 'connection' listener.
//     console.log('client connected');
//     c.on('end', () => {
//         console.log('client disconnected');
//     });
//     c.write('hello\r\n');
//     c.pipe(c);
// });
// server.on('error', (err) => {
//     throw err;
// });
// server.listen(8124, () => {
//     console.log('server bound');
// });