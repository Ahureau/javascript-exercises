const removeFromArray = function(toClean, ...toRemove) {
    for (let i = toClean.length - 1; i >= 0; i--) {
        for (const eachRemove of toRemove) {
            if (toClean[i] === eachRemove) {
                toClean.splice(i, 1);
            }
        }
    }
    return toClean;
}

// Do not edit below this line
module.exports = removeFromArray;
