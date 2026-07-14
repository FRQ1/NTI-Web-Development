var isValid = function(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let current = s[i];

        if (current === "(" || current === "[" || current === "{") {
            stack.push(current);
        } else {
            let previous = stack.pop();

            if (previous === undefined) return false;
            if (previous === "(" && current !== ")") return false;
            if (previous === "[" && current !== "]") return false;
            if (previous === "{" && current !== "}") return false;
        }
    }

    return stack.length === 0;
};