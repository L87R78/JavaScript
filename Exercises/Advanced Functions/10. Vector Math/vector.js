let result = (function () {
    return {
        add: function (firstVec,secondVec) {
            return [firstVec[0]+secondVec[0],firstVec[1]+secondVec[1]]
        },
        multiply:function (firstVec,scalar) {
            console.log(firstVec);
            console.log(scalar);
            return [firstVec[0]*scalar,firstVec[1]*scalar]
        },
        length:function (firstVec) {
            return Math.sqrt(firstVec[0]*firstVec[0]+firstVec[1]*firstVec[1])
        },
        dot:function (firstVec,secondVec) {
            return firstVec[0]*secondVec[0]+secondVec[1]*firstVec[1]
        },
        cross:function (firstVec,secondVec) {
            return firstVec[0]*secondVec[1]-secondVec[0]*firstVec[1]
        }
    }
})();
console.log(result.multiply([3.5, -2], 2));