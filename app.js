/*const a = prompt("введите число");
a > 5 ? console.log("больше") : console.log("меньше");
*/
let a = 0;
while(a < 20)
{
    if(a%2 == 0)
    {
        console.log(`это четное число: ${a}`);
    }
    else
    {
        console.log(`это нечетное число: ${a}`);
    }
    a++;
}
/*
let it = 1;
do
{
    a = prompt("введите пароль");
    if(a !== '123')
    {
        console.log(`${it}: ${a}`);
        it++;
    }
}
while(a !== '123');
console.log(it-1);
*/

for(let i=0; i <= 5; i++)
{
    switch(i)
    {
        case 0: console.log(`${i} zero`); break;
        case 1: console.log(`${i} one`); break;
        case 2: console.log(`${i} two`); break;
        case 3: console.log(`${i} three`); break;
        case 4: console.log(`${i} four`); break;
        case 5: console.log(`${i} five`); break;
    }
}
