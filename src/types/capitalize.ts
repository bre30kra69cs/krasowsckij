export type CapitalizeWorld<T, Acc extends string = ''> = T extends `${infer Head}${infer Rest}`
  ? CapitalizeWorld<Rest, `${Acc}${Capitalize<Head>}`>
  : Acc;
