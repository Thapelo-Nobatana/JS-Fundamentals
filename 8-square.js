const square = "x"
const args = process.argv[2];
let my_number = parseInt(args[0]);

if(my_number === undefined || isNaN(my_number)) {
    console.log("Missing size");

}else {
    for (let i = 0; i < my_number; i++) {
        let line = "";
        for (let j = 0; j < my_number; j++) {
            line += square;
        }
        console.log(line);
    }
}