const arr=[34,22,65,19,55,15,81,6];
let min=arr[0];
for(let i=0;i<arr.length;i++){
    if(min>arr[i])
        min=arr[i];
}
console.log("Minimum Number in the array is: ",min);