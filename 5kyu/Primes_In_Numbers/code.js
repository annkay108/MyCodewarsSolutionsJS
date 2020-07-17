function checkIfPrime(n){
    if(n==2) return true;
    if(n>2 && n%2==0) return false;
    var maxFactor = Math.floor(Math.sqrt(n));
    for (var i = 3; i<= maxFactor; i+=2){
      if(n%i==0) return false;
    }
    return true;
  }
  
  function primeFactors(n){
      //your code here
    if(checkIfPrime(n)) return `(${n})`;
    var arrPrime = [];
    for(var i =2; i<=Math.ceil(n/2);i++){
      if(n%i == 0){
        if(checkIfPrime(i)) arrPrime.push(i);
      }
    }
    var ansObj = {};
    var ans = ``;
    for (var i of arrPrime){
      var flag = true;
      while(flag){
        if(n%i==0){
          n /=i
          i in ansObj? ansObj[i]+=1: ansObj[i]= 1
        }
        else{
          flag = false;
        }
      }
    }
    for (var i in ansObj){
      ans = ansObj[i]==1? `${ans}(${i})`:`${ans}(${i}**${ansObj[i]})`;
    }
    return ans
  }