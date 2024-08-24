export type ReplacePropsUtil<T, R> = Omit<T, keyof R> & R;
