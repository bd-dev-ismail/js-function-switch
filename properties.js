let shoppingCart = {
    keybord: 4,
    mouse: 2,
    mobile: 2,
    protene: 3
}
var kyes2 = shoppingCart['mouse'];
// console.log(kyes2);
var propertyName = 'keybord';
var propertynam = shoppingCart[propertyName];
console.log(propertyName, propertynam);
var properties = Object.keys(shoppingCart);
var propertiesValue = Object.values(shoppingCart);
// console.log(propertiesValue);