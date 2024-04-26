function longestSubstring(s) {
    let longestLength = 0;
    let startOfSubstring = 0;
    const characterMap = {};

    for (let i = 0; i < s.length; i++) {
        const currentCharacter = s[i];
        if (characterMap[currentCharacter] >= startOfSubstring) {
            startOfSubstring = characterMap[currentCharacter] + 1;
        }
        characterMap[currentCharacter] = i;
        const currentSubstringLength = i - startOfSubstring + 1;
        longestLength = Math.max(longestLength, currentSubstringLength);
    }

    return longestLength;
}

module.exports = { longestSubstring };
