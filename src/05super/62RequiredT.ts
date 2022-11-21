/**
 * Make all properties in T required
 * part of TS library definitions
 */
export type Required62<T> = {
    [P in keyof T]-?: T[P];
};

type PartialPoint621 = { x?: number; y?: number };

//Same as `{ x: number; y: number}`
type Point621 = Required<PartialPoint621>;


//Optional members for consumers
type CircleConfig = {
    color?: string,
    radius?: number,
}

//Usage
class Circle621 {
    //Required: Internally all members will always be resent
    private config: Required<CircleConfig>;

    constructor(config: CircleConfig) {
        this.config = {
            color: config.color ?? 'green',
            radius: config.radius ?? 0,
        }
    }


    draw() {
        //No null checking needed :)
        console.log(
            'Drawing a circle.',
            'Color:', this.config.color,
            'Radius:', this.config.radius
        );
    }
}