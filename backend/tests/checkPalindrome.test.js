const utils = require('../src/utils');

test('Checks if ABA is a palindrome', () => {
    expect(utils.checkPalindrome('ABA')).toBe(true);
});

test('Checks if MACACO is NOT a palindrome', () => {
    expect(utils.checkPalindrome('MACACO')).toBe(false);
});

test('Checks if A MAN A PLAN A CANAL PANAMA is a palindrome', () => {
    expect(utils.checkPalindrome('A MAN A PLAN A CANAL PANAMA')).toBe(true);
});
