---
# Add Two Numbers

<!-- badges -->
![Medium](https://img.shields.io/badge/Medium-ffa116?style=flat-square)  ![Math](https://img.shields.io/badge/Math-0a84ff?style=flat-square)  ![text](https://img.shields.io/badge/text-555555?style=flat-square)  <!-- streak badge placeholder -->

**LeetCode:** https://leetcode.com/problems/add-two-numbers/  
**Solved:** 2026-06-22  
**Runtime:** <!-- runtime_ms --> ms | **Memory:** <!-- memory_mb --> MB

---

## Approach
<!-- describe your approach here -->

## Complexity
- **Time:** <!-- e.g. O(n) -->
- **Space:** <!-- e.g. O(1) -->

## Solution

```txt
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let curr = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = carry;

        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
    }

    return dummy.next;
};
```

## Versions
| Version | File | Date |
|---------|------|------|
| v1 | [add-two-numbers.txt](./add-two-numbers.txt) | 2026-06-22 |

## Mistakes & Notes
<!-- post-solve reflections: what did you miss, what patterns did you notice -->

## Related Problems
<!-- links to related problems will be auto-populated in Part 3 -->

---
