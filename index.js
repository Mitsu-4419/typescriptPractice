var hello = 'hello';
console.log(hello);
var person = {
    name: 'jack',
    age: 40
};
var fruits = ['Apple', 'Banana', 'Grape'];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
