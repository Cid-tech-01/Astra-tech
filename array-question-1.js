const arr=[34,22,65,19,55,15,81,6];
let max=0;
for(let i=0;i<arr.length;i++){
    if(max<arr[i])
        max=arr[i];
}
console.log("Maximum Number in the array: ",max);
