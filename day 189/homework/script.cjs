const fs = require('fs').promises;

async function run() {
    try {
        // 1) test.txt შექმნა
        await fs.writeFile('test.txt', 'Hello FS Module');
        console.log('test.txt შეიქმნა');

        // 2) წაკითხვა
        const data = await fs.readFile('test.txt', 'utf8');
        console.log('შიგთავსი:', data);

        // 3) დამატება
        await fs.appendFile('test.txt', ' - დამატებული ტექსტი');
        console.log('ტექსტი დაემატა');

        // 4) info.txt JSON
        const info = { name: 'YourName', age: 20 };
        await fs.writeFile('info.txt', JSON.stringify(info));
        console.log('info.txt შეიქმნა');

        // 5) წაკითხვა + parse
        const infoData = await fs.readFile('info.txt', 'utf8');
        const parsed = JSON.parse(infoData);
        console.log('სახელი:', parsed.name);

        // 6) rename
        await fs.rename('test.txt', 'newTest.txt');
        console.log('გადაერქვა');

        // 7) წაშლა
        await fs.unlink('newTest.txt');
        console.log('წაიშალა');

    } catch (err) {
        console.error('Error:', err);
    }
}

run();