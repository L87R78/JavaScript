function numbersSequence(arr) {
    let resultArr= [];

    resultArr = arr.filter((e, i) => i % 2 == 1);
    resultArr = resultArr.map(a => a * 2);
    resultArr.reverse();
    console.log(resultArr.join(' '));

}