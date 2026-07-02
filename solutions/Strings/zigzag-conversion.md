---
# Zigzag Conversion

<!-- badges -->
![Easy](https://img.shields.io/badge/Easy-00b8a3?style=flat-square)  ![Strings](https://img.shields.io/badge/Strings-0a84ff?style=flat-square)  ![javascript](https://img.shields.io/badge/javascript-555555?style=flat-square)  <!-- streak badge placeholder -->

**LeetCode:** https://leetcode.com/problems/zigzag-conversion/  
**Solved:** 2026-07-02  
**Runtime:** 3 ms | **Memory:** 56.4 MB

---

## Approach
<!-- describe your approach here -->

## Complexity
- **Time:** <!-- e.g. O(n) -->
- **Space:** <!-- e.g. O(1) -->

## Solution

```js
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || numRows >= s.length) return s;

    const rows = new Array(numRows).fill('');
    let curRow = 0;
    let goingDown = false;

    for (const char of s) {
        rows[curRow] += char;
        // Reverse direction at the top or bottom row
        if (curRow === 0 || curRow === numRows - 1) {
            goingDown = !goingDown;
        }
        curRow += goingDown ? 1 : -1;
    }

    return rows.join('');
};
```

## Versions
| Version | File | Date |
|---------|------|------|
| v1 | [zigzag-conversion.js](./zigzag-conversion.js) | 2026-07-02 |

## Mistakes & Notes
<!-- post-solve reflections: what did you miss, what patterns did you notice -->

## Related Problems
<!-- links to related problems will be auto-populated in Part 3 -->

---
