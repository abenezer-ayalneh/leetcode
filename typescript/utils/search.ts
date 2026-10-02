/**
 *
 * @param haystack
 * @param needle
 */
export function binarySearch<T>(haystack: T[], needle: T): T | null {
    let low = 0;
    let high = haystack.length - 1;

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);
        const value = haystack[mid];

        if (value === needle) {
            return value;
        }

        if (value < needle) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return null;
}