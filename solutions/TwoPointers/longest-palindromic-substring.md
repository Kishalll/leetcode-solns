---
# Longest Palindromic Substring

<!-- badges -->
![Easy](https://img.shields.io/badge/Easy-00b8a3?style=flat-square)  ![TwoPointers](https://img.shields.io/badge/TwoPointers-0a84ff?style=flat-square)  ![javascript](https://img.shields.io/badge/javascript-555555?style=flat-square)  <!-- streak badge placeholder -->

**LeetCode:** https://leetcode.com/problems/longest-palindromic-substring/  
**Solved:** 2026-06-22  
**Runtime:** 20 ms | **Memory:** 54.9 MB

---

## Approach
<!-- describe your approach here -->

## Complexity
- **Time:** <!-- e.g. O(n) -->
- **Space:** <!-- e.g. O(1) -->

## Solution

```js
var longestPalindrome = function(s) {
    let start = 0, maxLen = 1;

    function expand(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLen) {
                maxLen = right - left + 1;
                start = left;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expand(i, i);     // odd-length  "aba"
        expand(i, i + 1); // even-length "abba"
    }

    return s.substring(start, start + maxLen);
};
```

## Versions
| Version | File | Date |
|---------|------|------|
| v1 | [longest-palindromic-substring.js](./longest-palindromic-substring.js) | 2026-06-22 |

## Mistakes & Notes
<!-- post-solve reflections: what did you miss, what patterns did you notice -->

## Related Problems
<!-- links to related problems will be auto-populated in Part 3 -->

---
