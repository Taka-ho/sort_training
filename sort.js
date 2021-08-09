let arrayToSort = getRandomIntArray(7, 13); // ソートしたい配列をランダム生成
showLog(arrayToSort, 'ソート前'); // index.htmlへ表示

// ここに、arrayToSortを小さい順に並べ替える処理を書く。
// こんな出来合いのsort メソッドなどは使用禁止。
// arrayToSort.sort(function (a, b) {
//     if (a < b) return -1;
//     if (a > b) return 1;
//     return 0;
// });
// 自分でarrayToSortの中身を操作して、並べ替えの処理を記述する。
// ---- start 
const length = arrayToSort.length
function makeSort(pointNumber,comparedNumber) {
    makePoint();
    
    arrayToSort = [];
    //配列の最後と最後から二番目を比べて入れ替えるかどうかの処理を書く
    for (sortTimes = 0; sortTimes = length*length; sortTimes++){
        if (arrayToSort-comparedNumber < arrayToSort-pointNumber){

        
    //小さかった場合は入れ替えていく
    }else if(arrayToSort-pointNumber < arrayToSort-comparedNumber){

    }
    arrayToSort.push(/*この中にソートした配列を入れる*/);

    }
    return arrayToSort;
}

showLog(arrayToSort, 'ソート後'); // 結果を表示

function makePoint(){
    //arrayToSort-1で一番最後の配列を指すので、その数字をループ文で増やしていく
    var pointNumber = 1;
    for (pointNumber = 1; pointNumber = length; pointNumber++){
        
    }
    
    var comparedNumber = 2;
    for (comparedNumber = 2; comparedNumber = length-1; comparedNumber++){
    
    }
    return pointNumber,comparedNumber;    
}
