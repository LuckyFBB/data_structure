function insertSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    //寻找i最合适的插入位置
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else
        break;
    }
  }
  return arr;
}

function insertSort2(arr) {
  let len = arr.length;
  //寻找i最合适的插入位置
  for (let i = 1; i < len; i++) {
    //当前i的值
    let curr = arr[i];
    //要插入的位置
    let j;
    for (j = i; j > 0 && curr < arr[j - 1]; j--) {
      arr[j] = arr[j - 1]
    }
    arr[j] = curr;
  }
  return arr;
}