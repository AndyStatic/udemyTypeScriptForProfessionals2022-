export interface InputProps {
  type: "text" | "emai";
  value: string;
  onChange: (newValue: string) => void;
}

//1 to 1 correspondance of body in type to interface
export type InputProps37 = {
  type: "text" | "emai";
  value: string;
  onChange: (newValue: string) => void;
};

//type extansion
type InputOnChange = (newValue: InputValue) => void;
type InputValue = string;

/**
 * Only Type features:
 * Unions
 * Intersections (&)
 * Primitives
 * Shorthand Functions
 * Advanced Type Functions
 */

/**
 * Only Interface features:
 * Declaration Merging
 * Familiarity (extends)
 */
