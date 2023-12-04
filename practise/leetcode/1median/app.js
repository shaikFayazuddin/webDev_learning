var findMedianSortedArrays = function(nums1, nums2) {
    let myArray = nums1.concat(nums2);
    myArray.sort((a, b) => a - b);
    let arrayLength = myArray.length;
    if(arrayLength/2 == 0){
        let t1 = myArray[arrayLength / 2]
        let t2 = myArray[t1 + 1]
        let median = (t1 + t2) / 2
        return median = myArray[median]
    }else{
        // let median = (arrayLength + 1) / 2
        return myArray[(arrayLength + 1) / 2]
    }

};

findMedianSortedArrays([1,3],[2])