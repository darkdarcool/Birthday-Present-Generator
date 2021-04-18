export function sayHello(name: string) {
  return `Hello ${name}!`
}

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
console.log("EEEE")
