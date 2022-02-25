module.exports = {
  //153. Find Minimum in Rotated Sorted Array
  // review comment: took horribly long to come up with
  // approach is sloppy but right diretion-ish
  findMin: (nums) => {
    const getMiddle = () => Math.floor(nums.length / 2);
    while (true) {
      const mid = getMiddle();
      const end = nums.length - 1;

      if (nums.length === 3 && nums[0] > nums[mid]) {
        return nums[mid];
      } else if (nums[0] > nums[mid] && nums[mid] < nums[end]) {
        if (nums[mid - 1] > nums[mid]) {
          return nums[mid];
        } else {
          nums = nums.splice(0, mid);
        }
      } else if (nums[0] < nums[mid] && nums[mid] > nums[end]) {
        nums = nums.splice(mid);
      } else if (nums[0] < nums[mid] && nums[mid] <= nums[end]) {
        return nums[0];
      } else {
        return nums[mid];
      }
    }
  },
};
