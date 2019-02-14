//一定是一个完全二叉树，某个节点的值不会大于父节点
//堆元素索引从1开始,初始化时先将第一个元素赋值为0
//堆有n个元素,则它的第一个叶子结点是第n/2+1个, 最后一个非叶子结点是第 n/2 个
//将n个元素逐个插入到一个空堆中,算法复杂度为O(nlogn)
function Heap() {
  this.data = [0]
}

//向堆中插入一个元素:插入到最后一个位置, 对插入的元素向上进行堆重构
Heap.prototype.insertItem = function (item) {
  this.data.push(item);
  let n = this.data.length - 1;
  __shiftUp(this.data, n)
}

//删除堆中最大的值:将最后一个元素放到第一个的位置,向下进行堆重构
Heap.prototype.deleteMax = function () {
  if (this.data.length > 1) {
    let last = this.data.pop();
    this.data[1] = last;
    __shiftDown(this.data, 1);
  }
}

//向上堆重构: 新元素跟父元素比较,新元素大则交换,一直到新元素比父元素小为止
function __shiftUp(arr, k) {
  while (k > 1 && arr[k] > arr[parseInt(k / 2)]) {
    swap(arr, k, parseInt(k / 2));
    k /= 2;
  }
}

//向下堆重构:从堆顶开始,比较当前元素和两个子元素,将若当前元素小于子元素中的一个,则将当前元素与较大的子元素交换,直到当前元素大于其子元素
function __shiftDown(arr, k) {
  let len = arr.length;
  while (2 * k < len) {
    let left = 2 * k;
    if (left + 1 < len && arr[left] < arr[left + 1]) {
      left += 1;    //右子元素大于左子元素
    }
    if (arr[k] >= data[left]) {
      break;
    }
    swap(arr, k, left);
    k = left;
  }
}

//交换
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
