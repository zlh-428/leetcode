# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def mergeNodes(self, head: ListNode[ListNode]) -> ListNode[ListNode]:
        tmp = tail = ListNode()
        cur = head.next
        sum = 0
        while cur:
            if cur.val != 0:
                sum += cur.val
            else:
                node = ListNode(sum)
                tail.next = node
                tail = tail.next
                sum = 0
            cur = cur.next
        return tmp.next
