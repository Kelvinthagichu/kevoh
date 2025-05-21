trainer:lorenah:mondays:2024
student:charles:tech:22
mp:wanjiku:kiambu:true
const trainees=[
    {id:1, fullname: "valentine lynn", age:20},
    {id:2,fullname:"kelvin thiongo"},
    {id:3,fullname:'mitchelle'},
    {id:4,fullname:"justo"},
    {id:5,fullname:'absa'}
];
console.log(trainees[4]
)
    
  // for each -performing an operation on every single item in the array
  function traineesprinter(item){
    console.log('this trainee is good,',item.fullname,"is urgent:",item.urgent)

  }
  trainees.forEach(traineesprinter)
  //map used to convert/represent one item as something different
  function traineesMapper(item){
    return item.name;

  }
  const mapped=trainees.map(traineesMapper);
  console.log('these are the mapped goals:')
  