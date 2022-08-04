var shoppingCart = {
    keybord: 4,
    mouse: 2,
    mobile: 2,
    protene: 3,
    pen: 25
}
const keys = Object.keys(shoppingCart);
console.log(keys);
const value = Object.values(shoppingCart);
console.log(value);

for(i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    // console.log(propertyName, propertyValue);
    
}
//For in
for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}