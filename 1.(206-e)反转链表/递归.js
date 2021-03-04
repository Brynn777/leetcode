function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function reverseLink(head) {
  // 递归停止的条件
  if (head === null || head.next === null) {
    return head;
  }
  // 递的过程：拆分问题
  let newHead = reverseLink(head.next);
  // 归的过程，解决问题
  head.next.next = head;
  head.next = null;
  return newHead;
}

// -
//  -
//   -
//    -
//     ｜（递归停止）if (head === null || head.next === null) return head
//    -return newHead;
//   -return newHead;
//  -return newHead;
// -return newHead;
// 后面返回的newHead都是同一个，及原链表的尾节点
