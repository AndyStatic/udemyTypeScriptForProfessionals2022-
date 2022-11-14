type Add44 = (a: number, b: number) => number;

const add44: Add44 = (a: number, b: number) => {
  return a + b;
};

type Add442 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
  debugName?: string;
};

const add442: Add442 = (a: number, b: number) => {
  return a + b;
};

add442.debugName = "Additional Function";

const add443: Add442 = (a: number, b: number, c?: number) => {
  return a + b + (c != null ? c : 0);
};

type PointCreator = new (x: number, y: number) => { x: number; y: number };

type PointCreator44 = {
  new (x: number, y: number): { x: number; y: number };
};

const Point44: PointCreator = class {
  constructor(public x: number, public y: number) {}
};

type PointCreator442 = {
  new (x: number, y: number): { x: number; y: number };
  new (x: number, y: number, z: number): { x: number; y: number; z: number };
  (x: number, y: number): { x: number; y: number };
  (x: number, y: number, z: number): { x: number; y: number; z: number };
  debugName?: string;
};
