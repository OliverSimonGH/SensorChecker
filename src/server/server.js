const { SENSOR_DATA } = require('../events');
const data = require('../data/data');
const io = require('socket.io')();
const port = 8000;

io.on('connection', (socket) => {
    setInterval(() => {
        socket.emit(SENSOR_DATA, data[Math.floor(Math.random() * data.length)]);
    }, 3000)
});

io.listen(port, () => console.log(`Live chat listening on port [${port}]`));
