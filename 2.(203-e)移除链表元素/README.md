203. 移除链表元素
删除链表中等于给定值 val 的所有节点。

示例:

输入: 1->2->6->3->4->5->6, val = 6
输出: 1->2->3->4->5
## 节点定义
```javascript
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
```
 ## 测试代码
 ```javascript
// 将链表序列化
 function toString(head) {
  let string = '';
  for (let curr = head; curr != null; curr = curr.next) {
    // concat函数不会修改输入值，拼接后的字符串会变成返回值
    string = string.concat(curr.val, '->');
  }
  return string.concat('null');
}
 // 快速生成链表
 function linkFrom(arr) {
  let head = new ListNode(arr[0]);
  let tail = head;
  let i = 1;
  for (i = 1; i < arr.length; i++) {
    let curr = new ListNode(arr[i]);
    tail.next = curr;
    tail = curr;
  }
  return head;
}
// 测试打印
let arr = [1, 3, 4, 5, 1];
let linkHead = linkFrom(arr);
let resHead = removeNode(linkHead, 1);
let string = toString(resHead);
console.log(string);
```