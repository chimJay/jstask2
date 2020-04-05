//declear an array of objects
const data = [ 
  {principal:2500, time:1.8},
  {principal:1000, time: 5},
  {principal:3000, time: 1},
  {principal:2000, time: 3}
]

//looping through data array
for(let i = 0; i < data.length; i++) {
const obj = data[i];
 
//calculate rate
function interestcalculator() {
  let rate;
if(obj.principal >= 2500 && obj.time > 1 && obj.time < 3) {
  rate = 3;
}else if(obj.principal >= 2500 && obj.time >= 3) {
  rate = 4;
}else if(obj.principal < 2500 || obj.time <= 1) {
   rate = 2;
}else{
  rate = 1;
}

//calculate interest
const interest = (obj.principal * rate * obj.time) / 100;

//declear an object
 const objData = { 
   principal: obj.principal,
   time: obj.time,
   rate: rate,
   interest:interest
 };
  
 //declear an array interestData
  const interestData = [];

  //add to the interestData 
  interestData.push(objData);

  //output interestData
  console.log(interestData);

  return interestData;
}
interestcalculator(data);
}

