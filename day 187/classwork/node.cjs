const EventEmitter = require('events');


// 4)
const emitter1 = new EventEmitter();

emitter1.on('message', (text) => {
    console.log(`[NEW MESSAGE]: ${text}`);
});

emitter1.emit('message', 'Hello world!');

emitter1.on('multiMessage', (text, user) => {
    console.log(`[${user}]: ${text}`);
});

emitter1.emit('multiMessage', 'Hello!', 'John');


// 5)
const emitter2 = new EventEmitter();

emitter2.on('start', () => {
    console.log('Program started ✅');
});

emitter2.on('message', (text) => {
    console.log(`Message: ${text}`);
});

emitter2.emit('start');
emitter2.emit('message', 'This is my first message');


// 6)
const emitter3 = new EventEmitter();

emitter3.on('start', () => {
    console.log('System started');
});

emitter3.on('data', (num) => {
    if (num % 2 === 0) {
        console.log(`${num} is Even`);
    } else {
        console.log(`${num} is Odd`);
    }
});

emitter3.on('end', () => {
    console.log('Process finished');
});

emitter3.emit('start');
emitter3.emit('data', 7);
emitter3.emit('data', 10);
emitter3.emit('end');

