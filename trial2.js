const scores=[100,98,25,76,65,99,2];
function sub (acc,item){
    return acc+item
}
const total=scores.reduce(sum,100)
console.log('the total score is:', total)

