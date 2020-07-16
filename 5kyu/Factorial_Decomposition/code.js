function checkIfPrime(n){
    if(n==2) return true;
    if(n>2 && n%2==0) return false;
    var max_divider = Math.floor(Math.sqrt(n));
    for(var i =3; i<=max_divider;i+=2){
      if(n%i==0)return false;
    }
    return true;
  }
  
  function decompose_num(n,primeArr,ansObj){
    for (var i of primeArr){
      var flag = true;
      while(flag){
        if(n%i==0 && n!=1){
          n /=i
          i in ansObj?ansObj[i]+=1:ansObj[i]=1
        }
        else{
          flag = false;
        }
      }
    }
    
  }
  
  function decomp(n) {
    // your code
    if(n<=3) return `${n}`;
    
    var ansObj = {};
    var ans = ``;
    var primeArr = [];
    for (var i = 2; i<=n; i++){
      if(checkIfPrime(i)) primeArr.push(i)
      decompose_num(i,primeArr,ansObj);
    }
    for (var key in ansObj){
      ansObj[key]==1?ans=`${ans} * ${key}`:ans = `${ans} * ${key}^${ansObj[key]}`
    }
    return ans.slice(3,ans.length);
  }
  