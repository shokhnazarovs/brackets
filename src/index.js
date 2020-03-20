module.exports = function check(str, bracketsConfig) {

    let stack = [];
    str = str.split('');

    let left = [];
    let right = [];

    for(let i=0; i<bracketsConfig.length; i++){
        left.push(bracketsConfig[i][0]);
        right.push(bracketsConfig[i][1]);
    }

    stack.push(str[0]);

    for(let i=1; i<str.length; i++){
        if(stack.length != 0 && left.indexOf(stack[stack.length-1]) === right.indexOf(str[i])){
            stack.pop();
        } else if(right.indexOf(str[i]) != -1 && left.indexOf(str[i]) === -1){
            return false;
        } else {
            stack.push(str[i]);
        }
    }

    if(stack.length === 0){
        return true;
    } else {
        return false;
    }
}
