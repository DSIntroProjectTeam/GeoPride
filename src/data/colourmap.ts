// Colour map generated from `CoolWarmFloat33.csv` from
// "Diverging Color Maps for Scientific Visualization"
// by Kenneth Moreland: http://www.kennethmoreland.com/color-maps/
// Accessed on 2023-10-26

const COLOUR_MAP = [
    [1, "rgb(180 3 38)"],
    [0.96875, "rgb(192 40 47)"],
    [0.9375, "rgb(203 61 56)"],
    [0.90625, "rgb(213 80 66)"],
    [0.875, "rgb(222 96 76)"],
    [0.84375, "rgb(230 112 87)"],
    [0.8125, "rgb(236 127 99)"],
    [0.78125, "rgb(241 141 111)"],
    [0.75, "rgb(245 154 123)"],
    [0.71875, "rgb(247 166 135)"],
    [0.6875, "rgb(248 177 148)"],
    [0.65625, "rgb(247 187 160)"],
    [0.625, "rgb(245 197 173)"],
    [0.59375, "rgb(241 205 186)"],
    [0.5625, "rgb(236 211 198)"],
    [0.53125, "rgb(229 217 210)"],
    [0.5, "rgb(221 221 221)"],
    [0.46875, "rgb(213 220 230)"],
    [0.4375, "rgb(204 217 238)"],
    [0.40625, "rgb(194 213 244)"],
    [0.375, "rgb(184 208 250)"],
    [0.34375, "rgb(174 201 253)"],
    [0.3125, "rgb(163 194 255)"],
    [0.28125, "rgb(152 185 255)"],
    [0.25, "rgb(141 176 254)"],
    [0.21875, "rgb(130 165 252)"],
    [0.1875, "rgb(119 154 247)"],
    [0.15625, "rgb(108 142 242)"],
    [0.125, "rgb(98 130 234)"],
    [0.09375, "rgb(87 117 226)"],
    [0.0625, "rgb(77 104 216)"],
    [0.03125, "rgb(68 90 205)"],
    [0, "rgb(58 76 192)"],
] as const;

export default function mapColour(number: number) {
    return COLOUR_MAP.find(([step]) => number >= step)![1];
}
