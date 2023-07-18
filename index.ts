// Instead of :

declare function duration(value?: number): any;
// better to do:

declare function duration(): number;
declare function duration(value: number): void;
