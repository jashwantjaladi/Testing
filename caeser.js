function caeser(aString)
{
    let newString=""
    let newnum
    for(let i=0;i<=aString.length;i++)
    {
        newnum=aString.charCodeAt(i)
        if(newnum>=65 && newnum<=77 || newnum>=97 &&newnum<=109)
        {
        newString+=String.fromCharCode(newnum+13)
        }else if(newnum>=78 && newnum<=90 || newnum>=110 &&newnum<=122)
        {
            newString+=String.fromCharCode(newnum-13)
        }else{
            newString+=String.fromCharCode(newnum)
        }
    }
    return newString
}

console.log(caeser("abcd!"))

//implemented for rot13