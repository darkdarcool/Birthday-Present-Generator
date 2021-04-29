import { present } from './presents'
let mypresents = present;
console.clear()
export function sayHello(name: string) {
  return `Hello ${name}!`
}

export function getpresent(name: string) {
  var names = eval(`mypresents.${name}`);
  return names
}
let present_list = [
  getpresent("one"),
  getpresent("two"),
  getpresent("three"),
  getpresent("four"),
]
for (var i = 0; i < present_list.length; i++) {
  console.log((i + 1) + ": " + present_list[i]);
}