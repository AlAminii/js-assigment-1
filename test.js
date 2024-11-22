function calculateTax(income, expenses) {
    if(income<=0 || expenses<=0 || expenses>income){
        return   "Invalid Input"
    }
    let texAmount = income-expenses
   let tex = texAmount*(0.2)
   return tex
}

let result = calculateTax(5000, 15)
console.log(result)

// -------------

function checkDigitsInName(name) {
if(typeof name !== 'string'){
        return "Invalid Input"
    }
    for(let chr of name){
        if(!isNaN(chr) && chr  ){
            return true
        }

    }
    return false
}

let num = checkDigitsInName(["Raj"])
console.log(num)

function calculateFinalScore(obj) {
  if (
    typeof obj !== "object" ||
    typeof obj.name !== "string" ||
    typeof obj.testScore !== "number" ||
    typeof obj.schoolGrade !== "number" ||
    typeof obj.isFFamily !== 'boolean'||
    obj.testScore < 0 ||
    obj.testScore > 50 ||
    obj.schoolGrade < 0 ||
  obj.schoolGrade >30
  ) {
    return "Invalid Input";
  }

  let totalScore = obj.testScore + obj.schoolGrade;

  if (obj.isFFamily === true) {
    totalScore = totalScore + 20;
  }
console.log(totalScore)
  if (totalScore >= 80) {
    return true;
  } else {
    return false;
  }
}

let obje = calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true });
console.log(obje);


function sendNotification(email) {
  if (
    typeof email !== "string" ||
    !email.includes("@") ||
    email.split("@").length !== 2 ||
    email.indexOf("@") === email.length - 1 ||
    email.indexOf("@") === 0
  ) {
    return "Invalid Email";
  }
  let splitStr = email.split("@");
  return splitStr[0] + " sent you an email from " + splitStr[1];
}

let str = sendNotification("zihad@gmail.com");
console.log(str);

// -------========---------------====----------



function  waitingTime(waitingTimes  , serialNumber) {
  if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
    return 'Invalid Input '
  }

  let sum = 0;
for(let wait of waitingTimes){
  sum =  wait +sum

}
  let AvgTime  =  sum / waitingTimes.length
 let roundedTime = Math.round(AvgTime)
let ser  = serialNumber-1
let totalBaki = ser - waitingTimes.length
return totalBaki*roundedTime




}

let  findserial = waitingTime([13, 2], 6)
console.log(findserial)