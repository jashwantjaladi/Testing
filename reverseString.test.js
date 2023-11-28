const reverseString=require("./reverseString.js")
test("reverse a string",()=>
{
    expect(reverseString("hunter")).toBe("retnuh")
})