const calculator=require("./calculator")
test("calculator array",()=>
{
    expect(calculator(5,3)).toEqual([8,2,15])
})