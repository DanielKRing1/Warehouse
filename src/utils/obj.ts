/**
 * Create an object mapping id's 1-'count' to some value
 *
 * @param count how many entries in object mapping
 * @param setVal a callback to set the value at each index
 * @returns an object mapping each id to some value
 */
export function createIdMap<T>(
    count: number,
    setVal: (i: number) => T
): Record<string, T> {
    return new Array(count)
        .fill(undefined)
        .reduce<Record<string, T>>((acc, val, i) => {
            acc[i] = setVal(i);
            return acc;
        }, {});
}
