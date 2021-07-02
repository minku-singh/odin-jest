const repeatString = function(word, times) {
    if(times < 0)
    {
        return "ERROR";
    }

    if(word == " ")
    {
        return " ";
    }

    let ans = "";
    while(times)
    {
        ans += word;
        times--;
    }
    return ans;
};

module.exports = repeatString;
