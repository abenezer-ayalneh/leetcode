export function mergeSort<T>(array: T[]): T[] {
    if (array.length <= 1) {
        return array;
    }

    const mid = Math.floor(array.length / 2);

    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));

    return merge(left, right);
}

function merge<T>(left: T[], right: T[]): T[] {
    const result: T[] = [];

    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return [
        ...result,
        ...left.slice(i),
        ...right.slice(j)
    ];
}