function range(start, end, opt=start<end? 1 : -1){
  let nums = []; 
  
  if(opt > 0){
    for(let i=start; i<=end; i+=opt) nums.push(i);
  }else{
    for(let i=start; i>=end; i+=opt) nums.push(i); 
  }

  return nums; 
}

function sum(nums){
  let counter = 0; 
  for(let n of nums){
    counter += n; 
  }
  return counter; 
}

console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

