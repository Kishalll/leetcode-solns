---
# Longest Substring Without Repeating Characters

<!-- badges -->
![Medium](https://img.shields.io/badge/Medium-ffa116?style=flat-square)  ![Trees](https://img.shields.io/badge/Trees-0a84ff?style=flat-square)  ![text](https://img.shields.io/badge/text-555555?style=flat-square)  <!-- streak badge placeholder -->

**LeetCode:** https://leetcode.com/problems/longest-substring-without-repeating-characters/  
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
var lengthOfLongestSubstring = function(s) {
    let map = new Map(); // char -> its last seen index
    let max = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // If char was seen and is inside the current window, shrink from left
        if (map.has(char) && map.get(char) >= left) {
            left = map.get(char) + 1;
        }

        map.set(char, right);
        max = Math.max(max, right - left + 1);
    }

    return max;
};
```

## Versions
| Version | File | Date |
|---------|------|------|
| v1 | [longest-substring-without-repeating-characters.txt](./longest-substring-without-repeating-characters.txt) | 2026-06-22 |

## Mistakes & Notes
<!-- post-solve reflections: what did you miss, what patterns did you notice -->

## Related Problems
<!-- links to related problems will be auto-populated in Part 3 -->

---
