export const counterOfIncreasing = (measurments: number[]) : number => {
    let count = 0;
    for(let i=0; i<measurments.length; i++){
        if(measurments[i+1] > measurments[i]){
            count++;
        }
    }
    return count;
}

console.log(counterOfIncreasing([2,3,4,5,0,-1,8]));