// 1)
const buffer1 = Buffer.from("Hello World", "utf-8");
console.log(buffer1);


// 2)
const text = "Node.js";
const bufferFromText = Buffer.from(text, "utf-8");
const backToString = bufferFromText.toString();
console.log(backToString);


// 3)
const emptyBuffer = Buffer.alloc(10);
emptyBuffer.write("Kote");
console.log(emptyBuffer.toString());


// 4)
const bufferA = Buffer.from("Hello ","utf-8");
const bufferB = Buffer.from("kote", "utf-8");
const concatenated = Buffer.concat([bufferA, bufferB]);
console.log(concatenated.toString());


// 5)
const compareBuffer1 = Buffer.from("test", "utf-8");
const compareBuffer2 = Buffer.from("test", "utf-8");
const compareBuffer3 = Buffer.from("different", "utf-8");
console.log(compareBuffer1.equals(compareBuffer2));
console.log(compareBuffer1.equals(compareBuffer3));


// 6)
console.log(process.pid);


// 7)
console.log(process.cwd());


// 8)
console.log(process.argv);


// 9)
if (process.argv.length > 2) {
    console.log(process.argv[2]);
} else {
    console.log("No argument");
    process.exit(1);
}