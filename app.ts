export const counterOfIncreasingMapRealization = (measurments: number[]) : number => {
    let count = 0;
    measurments.map((num, index) => {
        if(num > measurments[index - 1]){
            count++;
        }
    })
    return count;
}


export const counterOfIncreasingReduceRealization = (measurments: number[]) : number => {
    let count = 0;
    count = measurments.reduce((previousValue, currentValue) => {
        if(currentValue > previousValue){
            count++;
        }
        return count;
    },
     measurments[0] +1
    );
    return count;
}

console.log(counterOfIncreasingReduceRealization([2,3,4,5,0,-1,8]));
console.log(counterOfIncreasingMapRealization([2,3,4,5,0,-1,8]));