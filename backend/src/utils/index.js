module.exports = {
    checkPalindrome: (data) => {
        // Removes all non-alphanumeric characters and convert in lower case
        const input = data.replace(/[^A-Z0-9]/ig, '').toLowerCase();

        // Transforms the string received on the reverse and compares
        const result = input === input.split('').reverse().join('');

        /**
         * If the received value is equal to the reverse, it returns true,
         * if it does not return false
         */
        if (result) {
            return true;
        }
        return false;
    },
};
