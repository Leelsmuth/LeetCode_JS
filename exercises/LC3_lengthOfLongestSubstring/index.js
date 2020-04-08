// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {

  //create an empty hash map (key/ val -> charater/ index)
  let windowCharsMap = {}

  //create start and max variable, set both with initial values of zero
  let windowStart = 0
  let maxLength = 0
  // Loop through input string
  for (let i = 0; i < s.length; i++) {

    const endChar = s[i]
    // If current character in hash map & index >= start
    if (windowCharsMap[endChar] >= windowStart) {
      // set start to index for chararcter found in hash map + 1
      windowStart = windowCharsMap[endChar] + 1

    }

    // Set key/ value pair on hash map to be current character/  current index
    windowCharsMap[endChar] = i

    maxLength = Math.max(maxLength, i - windowStart + 1)

  }

  // Return max
  return maxLength
}


module.exports = lengthOfLongestSubstring;
