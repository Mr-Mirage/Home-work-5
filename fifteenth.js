let arr = [10, 17, 15, 12];
let sum1 = 0;
let sum2 = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 != 0){
        sum1 += arr[i];        
    }
    else if(arr[i] % 2 == 0){
        sum2 += arr[i];
    }
}

if(sum1 > sum2){
    console.log(`Difference is: ${sum1 - sum2}`);
}
else{
    console.log(`Difference is: ${sum2 - sum1}`);
}
