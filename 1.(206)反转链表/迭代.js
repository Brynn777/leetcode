function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function reverseLink(head) {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  return prev;
}
// 链表分成三个部分
// 已经反转的 ｜ 当前 ｜ 未反转的
// 三个部分所以要三个节点 prev curr nextNode
// 每次循环的主要目的是 curr.next = prev;顺带把三个节点位置重置
// 循环退出的条件是当前节点为null
