type Falsy = false | "" | 0 | null | undefined; 
export const func1 = <T>(arr: T[]): Exclude<T, Falsy>[] => {
  return arr.filter((item) => Boolean(item)) as Exclude<T, Falsy>[];
}
