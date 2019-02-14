# 数据结构

#### 项目介绍
基础的数据结构

#### 分治算法
分而治之，将原问题分割成为同等结构的子问题，再将子问题逐一解决，原问题就得到了解决。
归并排序和快速排序都是分治算法。

#### [冒泡排序](https://gitee.com/LuckyFBB/data_structure/blob/master/sort/bubbleSort.js)
思路
- 比较相邻的元素。如果第一个比第二个大，就交换它们两个；
- 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
- 针对所有的元素重复以上的步骤，除了最后一个；
- 重复步骤1~3，直到排序完成。
复杂度---->O(n^2)
稳定性---->不稳定

#### [选择排序](https://gitee.com/LuckyFBB/data_structure/blob/master/sort/selectionSort.js)  
思路  
初始时在序列中找到最小（大）元素，放到序列的起始位置作为已排序序列；然后，再从剩余未排序元素中继续寻找最小（大）元素，放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。 
- 无序列Arr[0...n],有序列无
- 查找序列中最小(大)元素
- 放到有序列的末尾

复杂度---->O(n^2)  
稳定性---->不稳定

#### [插入排序](https://gitee.com/LuckyFBB/data_structure/blob/master/sort/insertSort.js)  
思路
遍历数组，当前元素和已经排序序列依次比较交换，插入到相应位置。可以在第二次循环的时候提前结束。

更新思路
不在每一次比较都进行交换，而改为赋值。
复杂度---->最坏O(n^2)   最好O(n) 
稳定性---->稳定

#### [归并排序](https://gitee.com/LuckyFBB/data_structure/blob/master/sort/mergeSort.js)  
思路
- 把长度为n的输入序列分成两个长度为n/2的子序列；
- 对这两个子序列分别采用归并排序；
- 将两个排序好的子序列合并成一个最终的排序序列。

复杂度---->O(nlogn)
稳定性---->稳定

#### [快速排序](https://gitee.com/LuckyFBB/data_structure/blob/master/sort/quickSort.js)  
思路
- 选取一个标准值，然后进行分区(partition)
- 比标准值小的值放在标准值前面，比标准值大的值放在标准值后面
- 对两个子序列分别进行快速排序

双路快排思路
- 选取一个标准值，然后进行分区(partition)
- 把小于standard的放在前端，把大于standard的数放在后端，当不满足条件的时候交换两者的位置，当遇到两个等于standard的值也交换位置。避免在相同数据较多的时候两个子序列出现不平衡现象。
- 对两个子序列分别进行快速排序

三路快排思路
- 选取一个标准值，然后进行分区(partition)，分为三个部分。
- 分为大于小于等于standard的三个部分，能够不再处理等于standard的部分。
- 对两个子序列分别进行快速排序

复杂度---->最好O(nlogn)  最坏O(n^2)
稳定性---->不稳定

#### [最大堆](https://gitee.com/LuckyFBB/data_structure/blob/master/sort/maximumHeap.js)  

#### 逆序对
数组中，前面的数字比后面的数字大，构成的一对数就是逆序对。
求解数组中的逆序对
- 暴力解法：两层循环，复杂度O(n^2)
- 使用归并算法 O(nlogn)

#### 取数组中第n大的元素
求解
- 排序之后再按着索引找 O(nlogn)
- 使用快排 O(n)