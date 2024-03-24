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
//# sourceMappingURL=index.js.map