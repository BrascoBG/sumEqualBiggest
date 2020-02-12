function sumEqualBiggest(args){
  let sum = 0;
  let max = 0;

  for(let i = 1; i < args.length; i++){
    let current = args[i];
    sum += current;
    if(current > max){
      max = current;
    }
  }
  sum -= max
  if(sum === max){
      console.log('Yes, sum = ' + (sum));
    } else{
      console.log('Nope, diff = ' + Math.abs(sum - max));
    }
  
}
sumEqualBiggest([7,3,4,1,1,2,12,1]);
