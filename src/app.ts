// arrow function

const add = (a:number,b:number) : number => a + b
const squre = (x:number) : number => x*x

console.log(add(5,5))
console.log(squre(3))

const logMsg = (msg:string) :string =>{
    return msg
}
console.log(logMsg("User logged in sucessfully!"))

const logFailed = (max_attempt: number, name: string, msg: string): string => {
    return `${name}, ${msg}. You tried the maximum ${max_attempt} times.`;
};

console.log(logFailed(3, "Mr Robot", "login failed"));
