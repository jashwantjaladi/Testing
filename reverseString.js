function reverseString(aString)
{
    let newString=""
    for(let i=aString.length;i>=0;i--)
    {
        newString+=aString.charAt(i)
    }
    return newString
}

module.exports=reverseString;