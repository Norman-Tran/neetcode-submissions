class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string) {
        if( t.length !== s.length) return false;
        const count = new Array(26).fill(0);

        for(let i = 0; i < s.length; i++) {
            count[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }

        for(let j = 0; j < t.length; j++) {
            if(count[t[j].charCodeAt(0) - 'a'.charCodeAt(0)] === 0) return false;
            count[t[j].charCodeAt(0) - 'a'.charCodeAt(0)] -= 1;
        }

        return true;
    }
}
