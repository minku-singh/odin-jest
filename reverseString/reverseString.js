const reverseString = function(word) {

    if(word == " ")
    {
        return " ";
    }

    let word_size = word.length;
    let ans = "";
    for(let i = word_size-1; i >= 0; i--)
    {
        ans += word[i];
    }
    return ans;
};

module.exports = reverseString;
