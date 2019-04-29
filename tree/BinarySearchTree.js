function BinarySearchTree() {
  var Node = function (key) {
    this.key = key          //当前的值
    this.left = null        //左节点
    this.right = null       //右节点
  }
  var root = null             //根节点

  //插入节点的外部访问函数
  this.insert = function (key) {
    var newNode = new Node(key)
    if (root === null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }

  //插入节点的内部访问函数
  var insertNode = function (node, newNode) {
    if (newNode.key < node.key) {    //如果比当前节点小，放入左子树
      if (node.left === null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    } else {       //如果比当前节点大，放入右子树 
      if (node.right === null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  }

  //中序遍历的外部访问函数
  this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root, callback)
  }

  //中序遍历的内部访问函数
  var inOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback)
      callback(node.key)
      inOrderTraverseNode(node.right, callback)
    }
  }

  //先序遍历的外部访问函数
  this.preOrderTraverse = function (callback) {
    preOrderTraverseNode(root, callback)
  }

  //先序遍历的内部访问函数
  var preOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      callback(node.key)
      preOrderTraverseNode(node.left, callback)
      preOrderTraverseNode(node.right, callback)
    }
  }

  //后序遍历的外部访问函数
  this.postOrderTraverse = function (callback) {
    postOrderTraverseNode(root, callback)
  }

  //后序遍历的内部访问函数
  var postOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback)
      postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  //寻找最小值的外部函数
  this.min = function () {
    return minNode(root)
  }

  //返回最小值
  minNode = function (node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left
      }
      return node.key
    }
    return null
  }

  //寻找最大值的外部函数
  this.max = function () {
    return maxNode(root)
  }

  //返回最大值
  maxNode = function (node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right
      }
      return node.key
    }
    return null
  }

  //查找某个值的外部函数
  this.search = function (key) {
    return searchNode(root, key)
  }

  //查找某个值
  searchNode = function (node, key) {
    if (node === null) {
      return false
    } else if (node.key < key) {
      return searchNode(node.right, key)
    } else if (node.key > key) {
      return searchNode(node.left, key)
    } else {
      return true
    }
  }

  this.remove = function (key) {
    root = removeNode(root, key)
  }

  removeNode = function (node, key) {
    if (node === null) {
      return null
    }
    if (node.key < key) {
      node.right = removeNode(node.right, key)
    } else if (node.key > key) {
      node.left = removeNode(node.left, key)
    } else {
      //只有一个叶子节点
      if (node.left === null && node.right === null) {
        node = null
        return node
      }
      //只有一个节点为空的情况
      if (node.left === null) {    //只有左节点为空
        node = node.right
        return node
      } else if (node.right === null) {   //只有左节点为空
        node = node.left
        return node
      }
      //有两个节点
      var aux = findMinNode(node.right)
      node.key = aux.key
      node.right = removeNode(node.right, aux.key)
      return node

      function findMinNode(node) {
        while (node && node.left !== null) {
          node = node.left
        }
        return node
      }
    }
  }
}
