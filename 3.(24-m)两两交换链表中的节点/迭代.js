function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
function swapList(head) {
  if (!head | !head.next) {
    return head;
  }
  // 一共是两条链，所以有两个节点left，rigth
  // dummyNode是为了统一逻辑
  let left = head;
  let right = head.next;
  let dummyNode = new ListNode(0);
  let newHead = right;
  while (left && right) {
    // 循环主要做的事情：新城新的两条链，并且连接
    left.next = right.next;
    right.next = left;
    dummyNode.next = right;
    // 顺便做的事情，把节点重新置位
    dummyNode = left;
    left = left.next;
    right = left.next;
  }
  return newHead;
}
