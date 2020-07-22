function dblLinear(n) {
  let arr = [0, 0];
  let u = [1];
  let flag = true;
  let counter = 0;
  let number = 2;
  while (counter < n) {
    arr.push(number);
    if ((number - 1) % 2 == 0) {
      if (arr[(number - 1) / 2] == 0) {
        arr[number] = 0;
        u.push(number);
        counter++;
        flag = false;
      }
    }
    if ((number - 1) % 3 == 0 && flag) {
      if (arr[(number - 1) / 3] == 0) {
        arr[number] = 0;
        u.push(number);
        counter++;
      }
    }
    flag = true;
    ++number;
  }
  return u[n];
}
