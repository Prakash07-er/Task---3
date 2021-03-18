
let rotate = function (n)

{
 
let a = [1,2,3,4,5];
 
let rotate= n

for (i=0 ; i<rotate ; i++)

{
    
 temp = a.shift()

 
   a.push(temp)


}

return a

}

console.log(rotate(2))