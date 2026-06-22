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