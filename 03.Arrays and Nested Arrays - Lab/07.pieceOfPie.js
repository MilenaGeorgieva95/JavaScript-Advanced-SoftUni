function pieceOfPie(arr, flavourOne, flavourTwo) {
    let start = arr.indexOf(flavourOne)
    let end = arr.indexOf(flavourTwo) + 1;

    let list = arr.slice(start, end);
    return list
}

pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie')
