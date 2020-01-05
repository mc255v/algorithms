class DynamicProgramming {
  constructor() {
    this.memo = [1,1];
  }
  fibNaive(n) {
    // O(2^n)
    if (n <= 2) return 1;
    return this.fibNaive(n - 1) + this.fibNaive(n - 2);
  }

  fibMemo(n) {
    // O(n)
    if (this.memo[n - 1]) return this.memo[n - 1];
    const result = this.fibMemo(n - 1) + this.fibMemo(n - 2);
    this.memo[n - 1] = result;
    return result;
  }

  fibTab(n) {
    // O(n), smaller space complexity
    if (n <= 2) return 1;
    const fibNums = [0,1,1];
    for (let i = 3; i <= n; i++) {
      fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
    }
    return fibNums[n];
  }
}