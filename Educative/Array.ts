function mergeArrays(arr1: number[], arr2: number[]) {
    let idx1 = 0;
    let idx2 = 0;
    const result: number[] = [];
    if (arr1.length === 0) {
      return arr2;
    }
    if (arr2.length === 0) {
      return arr1;
    }
    while (!(idx1 > arr1.length - 1 && idx2 > arr2.length - 1)) {
      if (arr1[idx1] != null && arr2[idx2] != null) {
        if (arr1[idx1] < arr2[idx2]) {
          result.push(arr1[idx1]);
          idx1++;
        } else {
          result.push(arr2[idx2]);
          idx2++;
        }
      } else {
        if (arr1[idx1] != null) {
          result.push(arr1[idx1]);
          idx1++;
        }
        if (arr2[idx2] != null) {
          result.push(arr2[idx2]);
          idx2++;
        }
      }
    }
    return result;
  }
  
  mergeArrays([1, 4, 45, 63], [3]);
  