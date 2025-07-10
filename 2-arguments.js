function arguments(arg1, arg2,) {
    if(arg1 === undefined && arg2 === undefined) {
        console.log("No arguments");
    } else if(arg1 !== undefined && arg2 === undefined) {
        console.log("Argument found ", arg1);
    }else {
        console.log("Arguments found")
    }
}