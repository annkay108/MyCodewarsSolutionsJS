function doubles(maxk, maxn) {
    // your code
  var ans =0;
  for(var n=1;n<=maxn; n++){
    for(var k=1; k<=maxk; k++){ans+=1/(k*Math.pow(n+1,2*k));}}
  return ans
}