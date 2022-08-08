const sum = (a,b) => {
    return a+b
}

console.log(sum(7,3))

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 127.9;
    return valueInDollar;
}

module.exports = {sum, fromEuroToDollar}

