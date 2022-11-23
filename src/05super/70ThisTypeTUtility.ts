type Math701 = {
    double(): void;
    half(): void;
};


export const math701: Math701 = {
    double(this: { value: number }) {
        this.value *= 2;
    },
    half(this: { value: number }) {
        this.value /= 2;
    },
}

//get rid of duplicate annotation
export const math702: Math701 & ThisType<{ value: number }> = {
    double() {
        this.value *= 2;
    },
    half() {
        this.value /= 2;
    },
}

const obj701 = {
    value: 1,
    ...math701,
};

obj701.double();
console.log(obj701.value); //2

obj701.half();
console.log(obj701.value); //1


type StateDescription70<D, M> = {
    data: D;
    methods: M & ThisType<D & M>;
};

function createState70<D, M>(desc: StateDescription70<D, M>): D & M {
    return { ...desc.data, ...desc.methods };
}


let state70 = createState70({
    data: { x: 0, y: 0 },
    methods: {
        moveBy(dx: number, dy: number) {
            this.x += dx;
            this.y += dy;
        },
    },
});

state70.x = 10;
state70.y = 20;
state70.moveBy(5, 5);