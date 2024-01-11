function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let dummy = new ListNode(0, head);

  let node0 = dummy;
  let node1 = head;

  while (node1 && node1.next) {
    let node2 = node1.next;
    let node3 = node2.next;

    node0.next = node2;
    node2.next = node1;
    node1.next = node3;

    node0 = node1;
    node1 = node3;
  }

  return dummy.next;
};
