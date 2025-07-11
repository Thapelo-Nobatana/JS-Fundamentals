const my_c = "C is fun";
const args = process.argv.slice(2);
my_number = parseInt(args[0]);

if(my_number === undefined || isNaN(my_number)) {
    console.log("Missing number of occurrences");
} else {
    for (let i = 0; i < my_number; i++) {
        console.log(my_c);
    }
}
