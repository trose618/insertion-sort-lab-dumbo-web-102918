function findMinAndRemove(array) {
    let min = array[0]
    let minIndex = 0
    for (let i = 0; i < array.length; i++) {
        let current = array[i];

        if (current < min) {
            min = current
            minIndex = i
        }
    }

    array.splice(minIndex, 1)
    return min;

}

function insertionSort(array) {
    let sorted = []

    while(array.length != 0){
        let min = findMinAndRemove(array)
        sorted.push(min)
    }
    return sorted;
}
