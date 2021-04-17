export function sayHello(name: string) {
  return `Hello ${name}!`
}
import * as readline from 'readline';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is is passcode? ', (answer) => {
  answer = answer.toLowerCase()
  if (answer != "04308") throw new Error("You are NOT darkdarcool. Go to hell");
  else {
    ;
  }
  rl.close();
});
let present =
{
  "one" :
    "Enter The Gungeon"
}
  
export function getpresent(name: string) {
  var names = eval(`present.${name}`);
  return names
}
console.log(getpresent("one"))