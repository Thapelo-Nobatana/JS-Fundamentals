const args = process.argv.slice(2);

let num1 = parseInt(args[0]);
let num2 = parseInt(args[1]);

if(isNaN(num1) || isNaN(num2)) {
    console.log(NaN);
} else {
    function add(num1, num2) {
        let sum ;
       sum =  num1 + num2;

       return sum
}

    console.log(add(num1, num2));
}



// add(2, 3)

