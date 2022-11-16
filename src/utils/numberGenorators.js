Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};


function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}


const complementEasyGen = () => {
  let total = 100 
  
  let num = randomIntFromInterval(1,total -1 )
  
  
  return {num1: "", num2: num, answer: total - num, symbol: '', text:`${num}'s complement total: ${total}`}
};
const complementMedGen = () => {
  let total = 1000
  
  let num = randomIntFromInterval(1,total -1 )
  
  
  return {num1: "", num2: num, answer: total - num, symbol: '', text:`${num}'s complement total: ${total}`}
};
const complementHardGen = () => {
  let total = 10000
  
  let num = randomIntFromInterval(1,total -1 )
  
  
  return {num1: "", num2: num, answer: total - num, symbol: '', text:`${num}'s complement total: ${total}`}
};




const additionEasyGen = () => {
  let max_ans = 99
  let min_num = 1
  let max_num = 99   
  
  do{
    var total = randomIntFromInterval(
      min_num * 2,
      max_ans
    );
    var num1 = randomIntFromInterval(
      Math.max(min_num, total - max_num),
      Math.min(total - min_num, max_num)
    );
    var num2 = total - num1;
  }
  while (num1 % 10 + num2 % 10 >= 10)
  
  
  return {num1: num1, num2:num2, answer: total, symbol: '+', text:`${num1} + ${num2}`}
};


const additionMedGen = () => {
  let max_ans = 200
  let min_num = 10
  let max_num = 100   
  
  
    var total = randomIntFromInterval(
      min_num * 2,
      max_ans
    );
    var num1 = randomIntFromInterval(
      Math.max(min_num, total - max_num),
      Math.min(total - min_num, max_num)
    );
    var num2 = total - num1;

  
    return {num1: num1, num2:num2, answer: total, symbol: '+', text:`${num1} + ${num2}`}
};

const additionHardGen = () =>{
  let max_ans = 2000
  let min_num = 100
  let max_num = 1000  
  
  
    var total = randomIntFromInterval(
      min_num * 2,
      max_ans
    );
    var num1 = randomIntFromInterval(
      Math.max(min_num, total - max_num),
      Math.min(total - min_num, max_num)
    );
    var num2 = total - num1;

  return {num1: num1, num2:num2, answer: total, symbol: '+', text:`${num1} + ${num2}`}
}

const subEasyGen = () => {
  let max_ans = 99
  let min_num = 1
  let max_num = 99   
  
  do{
    var total = randomIntFromInterval(
      min_num * 2,
      max_ans
    );
    var num1 = randomIntFromInterval(
      Math.max(min_num, total - max_num),
      Math.min(total - min_num, max_num)
    );
    var num2 = total - num1;
  }
  while (num1 % 10 + num2 % 10 >= 10)
  
  
  return {num1: total, num2:num2, answer: num1, symbol: '-', text:`${total} - ${num2}`}
};


const subMedGen = () => {
  let max_ans = 99
  let min_num = 1
  let max_num = 99   
  
  
    var total = randomIntFromInterval(
      min_num * 2,
      max_ans
    );
    var num1 = randomIntFromInterval(
      Math.max(min_num, total - max_num),
      Math.min(total - min_num, max_num)
    );
    var num2 = total - num1;

  
    return {num1: total, num2:num2, answer: num1, symbol: '-', text:`${total} - ${num2}`}
};

const subHardGen = () =>{
  let max_ans = 999
  let min_num = 1
  let max_num = 999
  
  
    var total = randomIntFromInterval(
      min_num * 2,
      max_ans
    );
    var num1 = randomIntFromInterval(
      Math.max(min_num, total - max_num),
      Math.min(total - min_num, max_num)
    );
    var num2 = total - num1;

    return {num1: total, num2:num2, answer: num1, symbol: '-', text:`${total} - ${num2}`}
}

const multEasyGen = () =>{
  let min_num = 1;
  let max_num = 10;

  let num1 =  randomIntFromInterval(min_num, max_num);
  let num2 =  randomIntFromInterval(min_num, max_num);

  return {num1: num1, num2:num2, answer: num1 * num2, symbol: 'x', text:`${num1} * ${num2}`}
}

const multMedGen = () =>{
  let min_num = 2;
  let max_num = 20;


  let nums = [randomIntFromInterval(min_num, max_num), randomIntFromInterval(min_num, max_num)]
  let num1 =  nums.max();
  let num2 =   nums.min();

  return {num1: num1, num2:num2, answer: num1 * num2, symbol: 'x', text:`${num1} * ${num2}`}
}

const multHardGen = () =>{
  let min_num = 10;
  let max_num = 40;

  let nums = [randomIntFromInterval(min_num, max_num), randomIntFromInterval(min_num, max_num)]
  let num1 =  nums.max();
  let num2 =   nums.min();

  return {num1: num1, num2:num2, answer: num1 * num2, symbol: 'x', text:`${num1} * ${num2}`}
}

const divisionEasyGen = () =>{
  let min_num = 1;
  let max_num = 9;

  let num1 =  randomIntFromInterval(min_num, max_num);
  let num2 =  randomIntFromInterval(min_num, max_num);

  return {num1: num1 * num2, num2:num2, answer: num1, symbol: '÷', text:`${num1 * num2} ÷ ${num2}`}
}
const divisionMedGen = () =>{
  let min_num1 = 1;
  let max_num1 = 9;
  let min_ans = 1;
  let max_ans = 100;

  let num1 =  randomIntFromInterval(min_num1, max_num1);
  let ans =  randomIntFromInterval(min_ans, max_ans);

  return {num1: num1 * ans, num2:num1, answer: ans, symbol: '÷', text:`${num1 * ans} ÷ ${num1}`}
}
const divisionHardGen = () =>{
  let min_num = 2;
  let max_num = 40;

  let nums = [randomIntFromInterval(min_num, max_num), randomIntFromInterval(min_num, max_num)]
  let num1 =  nums[0];
  let num2 =   nums[1];

  return {num1: num1 * num2, num2:num1, answer: num2, symbol: '÷', text:`${num1 * num2} ÷ ${num2}`}
}

export let getProblemGenerator = (locationPath) => {
  switch(locationPath){
    case '/complement/easy':
      return (complementEasyGen);
    case '/complement/medium':
      return (complementMedGen);
    case '/complement/hard':
      return (complementHardGen);
    case '/addition/easy':
      return (additionEasyGen);
    case '/addition/medium':
      return (additionMedGen);
    case '/addition/hard':
      return (additionHardGen);
    case '/multiplication/easy':
      return multEasyGen;
    case '/multiplication/medium':
      return multMedGen;
    case '/multiplication/hard':
      return multHardGen;
    case '/subtraction/easy':
      return subEasyGen;
    case '/subtraction/medium':
      return subMedGen;
    case '/subtraction/hard':
      return subHardGen;
    case '/division/easy':
      return divisionEasyGen;
    case '/division/medium':
      return divisionMedGen;
    case '/division/hard':
      return divisionHardGen;
    default:
      console.log("wrong url")
      return -1;
    
  }
}

