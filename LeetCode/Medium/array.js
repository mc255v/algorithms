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
  //33. Search in Rotated Sorted Array
  // learned from findMin() but still struggled with implementation until understanding
  // halved sides always having a sorted array
  findTarget: (nums, target) => {
    if (!nums.length) {
      return -1;
    }
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (nums[mid] === target) {
        return mid;
      } else if (nums[left] <= nums[mid]) {
        // left side is sorted
        if (nums[left] <= target && target <= nums[mid]) {
          // target is in the left side
          right = mid - 1;
        } else {
          // target is in the right side
          left = mid + 1;
        }
      } else {
        // right side is sorted
        if (nums[mid] <= target && target <= nums[right]) {
          // target is in the right side
          left = mid + 1;
        } else {
          // target is in the left side
          right = mid - 1;
        }
      }
    }
    return -1;
  },
};
