const scores=[100,98,25,76,65,99,2];
function sum(acc,item){
    return acc+item
}
const total=scores.reduce(sum,0)
console.log('the total score is:', total)
