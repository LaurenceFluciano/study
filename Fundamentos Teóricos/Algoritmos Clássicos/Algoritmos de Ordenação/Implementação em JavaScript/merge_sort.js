function merge(values, left, right, middle)
{
    let leftArraySize = middle-left+1;
    let rightArraySize = right-middle;

    const leftArray = new Array(leftArraySize);
    const rightArray = new Array(rightArraySize);

    for (let i = 0; i < leftArraySize; i++)
    {
        leftArray[i] = values[i+left]
    }

    for (let i = 0; i < rightArraySize; i++)
    {
        rightArray[i] = values[i+middle+1]
    }


    let i = left;
    let j = 0;
    let h = 0;

    while (j < leftArraySize && h < rightArraySize)
    {
        if (leftArray[j] <= rightArray[h]) {
            values[i] = leftArray[j];
            j++;
        }
        else {
            values[i] = rightArray[h];
            h++;
        }
        i++;
    }
    
    while (j < leftArraySize)
    {
        values[i] = leftArray[j]
        j++;
        i++;
    }

    while (h < rightArraySize)
    {
        values[i] = rightArray[h]
        h++;
        i++;
    }
    
}

function mergeSort(values, left, right)
{
    const middle = Math.floor((right+left)/2)
    if (left < right) {
        mergeSort(values, left, middle);
        mergeSort(values, middle+1, right);
    }

    merge(values, left, right, middle); 
}

function generateNumbers(size)
{
    const arr = []
    for (let i = 0; i < size; i++)
    {
        arr.push(Math.floor(Math.random() * 10))
    }

    return arr
}

function main()
{
    const values = generateNumbers(20)
    mergeSort(values, 0, 19)

    console.log(values)
}

main()