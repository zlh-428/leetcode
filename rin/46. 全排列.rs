impl Solution {
    pub fn permute(mut nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut ans = vec![];

        Self::dfs(&mut nums, &mut ans, 0);

        ans
    }

    fn dfs(nums: &mut Vec<i32>, ans: &mut Vec<Vec<i32>>, begin: usize) {
        if begin == nums.len() {
            ans.push(nums.to_vec());
            return;
        }

        for i in begin..nums.len() {
            nums.swap(i, begin);
            Self::dfs(nums, ans, begin + 1);
            nums.swap(i, begin);
        }
    }
}