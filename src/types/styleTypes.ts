type RgbColor = `rgb(${number}, ${number}, ${number})`;
type RgbaColor = `rgba(${number}, ${number}, ${number}, ${number})`;
type HexColor = `#${string}`;

export type StyleColorType = RgbColor | RgbaColor | HexColor;
