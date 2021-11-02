// input node timer1.js 10 3 5 15 9

const args = process.argv.slice(2).sort((a, b) => a - b);
// args = [ '3', '5', '9', '10', '15' ]

for (const arg of args) {

  if (Number(arg) > -1) {
    
    setTimeout(() => {
  
      process.stdout.write(`${arg} seconds   .`);
  
    }, Number(arg) * 1000);
  }
}

setTimeout(() => {

  process.stdout.write('\n');

}, Number(args[args.length - 1] * 1000));