var strStr = function(haystack, needle) {
    if (haystack === needle || needle === "") return 0;

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let sub = haystack.substring(i, i + needle.length);

        if (sub === needle) {
            return i;
        }
    }

    return -1;
};