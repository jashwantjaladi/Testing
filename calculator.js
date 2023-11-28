function calculator(a,b)
{
    let array=[];
    let sum=a+b;
    let diff=a-b;
    let mul=a*b;
    array.push(sum, diff, mul)
    return array
}

module.exports=calculator;