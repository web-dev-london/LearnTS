"use strict";
var _a;
let weight;
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
let demention = 'inch';
function greet(name) {
    if (name)
        console.log(name.toLowerCase());
    else
        console.log('Hola');
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('a');
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30
};
let phone = document.getElementById('phone');
phone.value;
function render(document) {
    if (typeof document === 'string') {
        console.log('Used unknown type by Narrowing');
    }
}
function processEvents(message) {
    throw new Error(message);
}
processEvents('dj');
//# sourceMappingURL=index.js.map