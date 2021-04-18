"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getpresent = exports.sayHello = void 0;
function sayHello(name) {
    return "Hello " + name + "!";
}
exports.sayHello = sayHello;
var present = {
    "one": "Enter The Gungeon"
};
function getpresent(name) {
    var names = eval("present." + name);
    return names;
}
exports.getpresent = getpresent;
console.log(getpresent("one"));
