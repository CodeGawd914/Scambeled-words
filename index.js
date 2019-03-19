/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
*/

function scramble(str1, str2) {
    var count = Object.create(null);

    [].forEach.call(str1, function(a) {
        count[a] = (count[a] || 0) + 1
    })

    return [].every.call(str2, function(a) {
        return count[a]--
    })
}
