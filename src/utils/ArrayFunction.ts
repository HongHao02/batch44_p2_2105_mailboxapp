export function insertAt<T>(array: T[], index: number, value: T): T[] {
    array.splice(index, 0, value);
    return array;
}
