impl Solution {
    pub fn permute_unique(nums: Vec<i32>) -> Vec<Vec<i32>> {
    let mut v: Vec<Vec<i32>> = Vec::new();
    let len = nums.len();
    let mut sum = Vec::new();
    let mut book = vec![false; nums.len()];
    Solution::helper(&mut sum, &nums, len, &mut v, &mut book);
    v
  }
    pub fn helper(sum: &mut Vec<i32>,nums: &Vec<i32>,len: usize,
                                    v: &mut Vec<Vec<i32>>,book: &   mut Vec<bool>) {
      if sum.len() == len {
        v.push(sum.to_vec());
        return;
      }
      let mut val = Vec::new();
      for i in 0..len {
        if !book[i] && !val.contains(&nums[i]) {
          val.push(nums[i]);
          book[i] = true;
          sum.push(nums[i]);
          Solution::helper(sum, nums, len, v, book);
          book[i] = false;
          sum.pop();
        }
      }
    }
}