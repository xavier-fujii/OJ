// https://leetcode.com/problems/reverse-string

impl Solution {
    pub fn reverse_string(s: &mut Vec<char>) {
        let mut i = 0;
        let mut j = s.len() - 1;
        while i < j {
            let tmp = s[j];
            s[j] = s[i];
            s[i] = tmp;
            i += 1;
            j -= 1;
        }
    }
}
