---
# Reverse Integer

<!-- badges -->
![Medium](https://img.shields.io/badge/Medium-ffa116?style=flat-square)  ![Math](https://img.shields.io/badge/Math-0a84ff?style=flat-square)  ![text](https://img.shields.io/badge/text-555555?style=flat-square)  <!-- streak badge placeholder -->

**LeetCode:** https://leetcode.com/problems/reverse-integer/  
**Solved:** 2026-07-02  
**Runtime:** 40 ms | **Memory:** <!-- memory_mb --> MB

---

## Approach
<!-- describe your approach here -->

## Complexity
- **Time:** <!-- e.g. O(n) -->
- **Space:** <!-- e.g. O(1) -->

## Solution

```txt
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MAX = 2 ** 31 - 1;   //  2147483647
    const INT_MIN = -(2 ** 31);    // -2147483648

    let result = 0;
    let num = x;

    while (num !== 0) {
        // Extract last digit; trunc toward zero works for negative numbers too
        const digit = num % 10;
        num = Math.trunc(num / 10);

        result = result * 10 + digit;

        // Check overflow after each step (since we can't use 64-bit ints)
        if (result > INT_MAX || result < INT_MIN) {
            return 0;
        }
    }

    return result;
};
```

## Versions
| Version | File | Date |
|---------|------|------|
| v1 | [reverse-integer.txt](./reverse-integer.txt) | 2026-07-02 |

## Mistakes & Notes
<!-- post-solve reflections: what did you miss, what patterns did you notice -->

## Related Problems
<!-- links to related problems will be auto-populated in Part 3 -->

---
