export const counterOfIncreasing = (measurments: number[]) : number => {
    let count = 0;
    measurments.map((num, index) => {
        if(num > measurments[index - 1]){
            count++;
        }
    })
    return count;
}

console.log(counterOfIncreasing([2,3,4,5,0,-1,8]));