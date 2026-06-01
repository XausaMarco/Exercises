/**
 * Base Sliding Window Pattern
 * Use case: Finding the longest subarray meeting a condition 
 * (e.g., Longest Substring Without Repeating Characters)
 */
const slidingWindowBase = (input) => {
  let left = 0; // Init left
  let maxLength = 0;
  const map = new Map(); // To track frequency or existence

  // Iterating on right with a foor loop 
  for (let right = 0; right < input.length; right++) {
    const char = input[right];

    // 1. Expand the window: Add the current element
    // (In a real problem, you'd update your state/map here)
    map.set(char, (map.get(char) || 0) + 1);

    // 2. Shrink the window: While the condition is violated
    // Example condition: No duplicates allowed in the window
    while (map.get(char) > 1) {
      const leftChar = input[left];
      map.set(leftChar, map.get(leftChar) - 1);
      left++; // Shrink from the left
    }

    // 3. Update the result: Window is now valid
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

// Test: String with repeats
console.log(slidingWindowBase("abcabcbb")); // 3 ("abc")
