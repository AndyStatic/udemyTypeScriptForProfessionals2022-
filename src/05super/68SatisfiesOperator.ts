type Color681 = ColorString681 | ColorRGB681;
type ColorString681 = "red" | "blue" | "yellow" | "purple";
type ColorRGB681 = [red: number, green: number, blue: number];

type Theme681 = Record<string, Color681>;

const theme681: Theme681 = {
    primary: "red",
    secondary: [0, 255, 0],
    //tertiary: "purpel",
};

//satisfies Theme681
//actually not works

const [r, g, b] = theme681.secondary;
