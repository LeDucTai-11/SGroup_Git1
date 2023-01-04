let freeShipping = {
    "Shampoo" : 5.99,
    "Rubber" : 45.9,
}
let sum = 0;
// for( let x of Object.values(freeShipping)) {
//     sum += x;
// }

sum = Object.values(freeShipping).reduce((total,current) => {
    return total + current;
})


console.log((sum > 50));