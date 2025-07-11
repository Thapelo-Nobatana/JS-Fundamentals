const args = process.argv.slice(2);

let number = parseInt(args[0]);

if(number === undefined || isNaN(number)) {
    console.log("Not a number");
} else {
    console.log(`My number: ${number}`);
}