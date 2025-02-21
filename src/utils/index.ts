type Falsy = false | "" | 0 | null | undefined;
// 問題① 適切な命名に変更してください
export const filterOutFalsy = <T>(arr: T[]): Exclude<T, Falsy>[] => {
  return arr.filter((item) => Boolean(item)) as Exclude<T, Falsy>[];
};
