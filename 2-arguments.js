function arguments(arg1, arg2,) {
    if(arg1 === undefined && arg2 === undefined) {
        console.log("No argument");
    } else if(arg1 !== undefined && arg2 === undefined) {
        console.log(arg1,"Argument found");
    }else {
        console.log(arg1, arg2,"Arguments found")
    }
}

// Test cases
arguments(); // No arguments
arguments("Best"); // Argument found    
arguments("Best", "School"); // Arguments found