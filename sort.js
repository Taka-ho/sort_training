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

function makePoint(){
    
    //arrayToSort-1で一番最後の配列を指すので、その数字をループ文で増やしていく
    for (let pointNumber = 1; pointNumber < length; pointNumber++){
        console.log(pointNumber);
    }
    
    for (let comparedNumber = 2; comparedNumber < length-1; comparedNumber++){
        console.log(comparedNumber);
    }
   
}

function makeSort(pointNumber,comparedNumber) {
    arrayToSort = [];
    //配列の最後と最後から二番目を比べて入れ替えるかどうかの処理を書く
    for (sortTimes = 0; sortTimes < length*length; sortTimes++)
        if (arrayToSort- + comparedNumber < arrayToSort- + pointNumber){
            let tmpVal = arrayToSort[arrayToSort- + comparedNumber]
            arrayToSort[arrayToSort- + comparedNumber] = arrayToSort- + PointNumber;
            arrayToSort[arrayToSort- + comparedNumber] = tmpVal
            arrayToSort.push(arrayToSort[arrayToSort- + comparedNumber] = tmpVal);

    //小さかった場合は入れ替えていく
    }else if(arrayToSort-pointNumber < arrayToSort-comparedNumber){
         let tmpVal = arrayToSort[arrayToSort- + pointNumber]
         arrayToSort[arrayToSort- + pointNumber] = arrayToSort- + comparedNumber;
         arrayToSort[arrayToSort- + comparedNumber] = tmpVal
         arrayToSort.push(arrayToSort[arrayToSort[arrayToSort- + comparedNumber] = tmpVal] = tmpVal);

        }else if(arrayToSort- + pointNumber === arrayToSort- + comparedNumber){

        }

        return arrayToSort;
    }



showLog(arrayToSort, 'ソート後'); // 結果を表示


