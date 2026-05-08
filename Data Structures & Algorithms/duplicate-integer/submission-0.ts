class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]) {
        const temp = new Set<number>();

        for(const n of nums) {
            if(temp.has(n)) {
                return true;
            }
                temp.add(n);
        }
        return false;
    }
}
