function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const dfs = (i, j) => {
    const len = j - i;

    if (len === 0) return null;
    if (len === 1) return lists[i];

    const left = dfs(i, i + (len >> 1));
    const right = dfs(i + (len >> 1), j);

    return mergetwoLists(left, right);
  };

  return dfs(0, lists.length);
};

let mergetwoLists = (l1, l2) => {
  const head = new ListNode();

  let cur = head;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }

    cur = cur.next;
  }

  cur.next = l1 ? l1 : l2;

  return head.next;
};
