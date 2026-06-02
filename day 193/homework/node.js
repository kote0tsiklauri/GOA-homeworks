const os = require('os');


// 1
console.log("N1");
console.log("OS Name:", os.type());
console.log("OS Architecture:", os.arch());
console.log("Home Platform:", os.platform());
console.log(" ");


// 2

// freemem() returns the amount of free memory in bytes.
// totalmem() returns the total amount of memory in bytes.
console.log("N2");

console.log("free Memory:", os.freemem());
console.log("total Memory:", os.totalmem());

// 3
console.log(" ");
console.log("N3");
console.log("os uptime:", os.uptime());

// 4
console.log(" ");
console.log("N4")
console.log("number of CPU cores:", os.cpus().length);
for (let i = 0; i < os.cpus().length; i++) {
    console.log(`CPU ${i} model:`, os.cpus()[i].model);
}


// 5

console.log(" ");
console.log("N5");
console.log("Home directory:", os.homedir());
console.log("Hostname:", os.hostname());


// 6
console.log(" ");
console.log("N6");
console.log("process id:", process.pid);
console.log("Node.js version:", process.version);
console.log("process platform:", process.platform);


// 7
console.log(" ");
console.log("N7");
const userName = process.argv[2] || "Guest";
console.log(`Hello, ${userName}!`);

// 8
console.log(" ");
console.log("N8");
console.log("process.cwd():", process.cwd()); // current working directory
console.log("__dirname:", __dirname); // directory of the current module


//9
console.log(" ");
console.log("N9");
setTimeout(() => {
    console.log("Program stopped.");
    console.log(process.exit(1));
}, 3000);


//10
console.log(" ");
console.log("N10");
const interval = setInterval(() => {
    console.log("Program running...");
}, 1000);

setTimeout(() => {
    clearInterval(interval);

    console.log("Program stopped.");

    process.exit();
}, 5000);