function sumAll(...numbers: number[]): number {
    let total = 0;
    for (const num of numbers) {
      total += num;
    }
    return total;
  }
  
  console.log(sumAll(1, 2, 3, 4)); // Output: 10
  