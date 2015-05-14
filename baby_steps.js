num = process.argv;
total = 0;
for (i = 2; i < num.length; i++){
  
  total += +num[i];
}

console.log(total);

