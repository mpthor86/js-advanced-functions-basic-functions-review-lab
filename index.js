// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
    return function(adj = "special") {
        return `You are ${flair}${adj}${flair}!`
    }
}

let Calculator = {
    add : function(int1, int2) {
        return int1 + int2
    },
    subtract : function(int1, int2) {
        return int1 - int2
    },
    multiply : function(int1, int2) {
        return int1 * int2
    },
    divide : function(int1, int2) {
        return int1 / int2
    }
}

function actionApplyer(int, arr) {
    let answer = int
    for (let i = 0; i < arr.length; i++){
        answer = arr[i](answer)
    }
    return answer
    }
