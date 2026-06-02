
const EventEmitter = require('events');


const emitter = new EventEmitter();

// 1)
emitter.on("hello",()=>{
    console.log("hello world")
});
emitter.emit("hello");

// 2)
emitter.on("greet",(name)=>{
    console.log("hello" + name)
});


emitter.emit("greet","kote");

// 3)

emitter.on("login",()=>{
    console.log("user logged in")
});


emitter.emit("login");


emitter.on("login",()=>{
    console.log("welcome back!")
});


emitter.emit("login");

// 4)
emitter.on("sum",(a,b)=>{
    console.log(a+b)
});

// 5)
emitter.on("error",()=>{
    console.log("an error occurred")
});

emitter.emit("error");