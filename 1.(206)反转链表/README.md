反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-linked-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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
let arr = [1, 3, 4, 5];
let linkHead = linkFrom(arr);
let string = toString(linkHead);
console.log(string);
// 测试打印
let arr = [1, 3, 4, 5];
let linkHead = linkFrom(arr);
let resHead = reverseLink(linkHead);
let reverseString = toString(resHead);
console.log(reverseString);
```