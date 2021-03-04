function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function removeNode(head, value) {
  // 为了统一删除第一节点和其他节点的逻辑，在这里加一个哑节点
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;
  // 链表被分为两个部分
  // 完整链表 ｜ 删除的节点
  // 所以要两个节点 prev ｜ curr
  let curr = head;
  let prev = dummyNode;
  // 循环跳出条件，当下节点为空
  while (curr !== null) {
    if (curr.val === value) {
      // 循环主要做的事情： 删除节点；顺便调整位置
      prev.next = curr.next;
      curr.next = null;
      curr = prev.next;
    } else {
      prev = curr;
      curr = prev.next;
    }
  }
  return dummyNode.next;
}
