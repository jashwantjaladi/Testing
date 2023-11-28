const caeserfn=require("./caeser.js")
test("shift by 13 places",()=>
{
    expect(caeserfn("abcd")).toEqual("nopq")
})