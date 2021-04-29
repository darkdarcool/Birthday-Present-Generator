"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getpresent = exports.sayHello = void 0;
var presents_1 = require("./presents");
var mypresents = presents_1.present;
console.clear();
function sayHello(name) {
    return "Hello " + name + "!";
}
exports.sayHello = sayHello;
function getpresent(name) {
    var names = eval("mypresents." + name);
    return names;
}
exports.getpresent = getpresent;
var present_list = [
    getpresent("one"),
    getpresent("two"),
    getpresent("three"),
    getpresent("four"),
];
for (var i = 0; i < present_list.length; i++) {
    console.log((i + 1) + ": " + present_list[i]);
}
