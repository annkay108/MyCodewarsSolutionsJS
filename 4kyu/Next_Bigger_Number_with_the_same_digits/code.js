function nextBigger(n){
    //your code here
    var arr = n.toString(10).replace(/\D/g, '0').split('').map(Number);
    if(arr.length==1) return -1;
    var pointer;
    for(var i=arr.length-1; i>0; i--){
      if(arr[i]>arr[i-1]) {
        pointer = i-1;
        break;
      }
    }
    if(pointer== undefined) return -1;
    var slicedArr1 = arr.slice(0,pointer);
    var slicedArr2 = arr.slice(pointer,arr.length);
    var moreSlicedArr2 = slicedArr2.slice(1,arr.length);
    moreSlicedArr2.sort(function(a,b){return a-b;});
    for (var i=0;i<moreSlicedArr2.length;i++){
      if(slicedArr2[0]<moreSlicedArr2[i]){
        var index = slicedArr2.indexOf(moreSlicedArr2[i]);
        [slicedArr2[0],slicedArr2[index]]=[slicedArr2[index],slicedArr2[0]]; 
        break;
      }
    }
    var muchSlicedArr2 = slicedArr2.slice(1,arr.length);
    muchSlicedArr2.sort(function(a,b){return a-b});
    var finalArrAns = [...slicedArr1,slicedArr2[0],...muchSlicedArr2];
    var toNum=parseInt(finalArrAns.join(''));
    return toNum
}