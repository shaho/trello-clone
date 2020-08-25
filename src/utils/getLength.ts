interface funcArgs {
  length: number;
}

export function getLength<T extends funcArgs>(args: T): number {
  return args.length;
}

let result = getLength("3");
