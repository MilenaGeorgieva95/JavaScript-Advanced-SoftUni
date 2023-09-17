function wordsUppercase(str) {
    pattern = /[\w]+/g;

    let matchesArr = str.match(pattern);

    res = matchesArr.map(x => x.toUpperCase()).join(', ');
    console.log(res);

}

wordsUppercase('Hi, how are you?')