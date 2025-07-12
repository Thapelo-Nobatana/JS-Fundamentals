const args = process.argv.slice(2);
 let num = parseInt(args[0]);

   function factorial(n) {
        if(n === 0 || n === 1) {
            return 1;
        }

        return n * factorial(n - 1);
    }

if(isNaN(num)) {
    console.log(1);
    return
} else {
  
    console.log(factorial(num));
}



