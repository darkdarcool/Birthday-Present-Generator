export function sayHello(name: string) {
  return `Hello ${name}!`
}
import * as readline from 'readline';

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
