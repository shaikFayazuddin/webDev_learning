function rangeOfNumbers(startNum, endNum) {
    if(startNum > endNum){
        return [];
    }else{
        const arr = rangeOfNumbers(startNum,endNum-1);
        arr.push(endNum);
        return arr;
    }
    
};

rangeOfNumbers(3, 7)