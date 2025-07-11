const args = process.argv.slice(2);

if(args[0] === undefined) {
    console.log("No argument");
} else if(args[0] !== undefined) {
    let sentence = args.join(' ');
    sentence = sentence.replace(/,/g, ' ');
    console.log(`${sentence} `)
}