// setTimeout(() => {
//     document.body.style.backgroundColor = 'red'
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange'
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow'
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green'
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// doing the same using functions and callbacks

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor
        doNext && doNext()
        // if (doNext) {
        //     doNext()
        // }
    }, delay);
}

delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('indigo', 1000, () => {
                delayedColorChange('blue', 1000, () => {
                })
            })
        })
    })
})


// writing the above code using Promises which will is covered later
const timedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve()
        }, delay)
    })
}

delayedColorChange("red", 1000)
    .then(()=> delayedColorChange("orange",1000))
    .then(()=> delayedColorChange("blue",1000))
    .then(()=> delayedColorChange("violet",1000))
    .then(()=> delayedColorChange("indigo",1000))
    .then(()=> delayedColorChange("green",1000))
    .then(()=> delayedColorChange("orange",1000))
    .then(()=> delayedColorChange("grey",1000))