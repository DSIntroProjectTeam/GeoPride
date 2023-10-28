// Colour map generated from the (0.085, 0.532, 0.201 -> 0.436, 0.308, 0.631)
// sample from "Diverging Color Maps for Scientific Visualization"
// by Kenneth Moreland:
// http://www.kennethmoreland.com/color-maps/
// Generated with the linked Python class by Carlo Barth on the same web page:
// http://www.kennethmoreland.com/color-maps/diverging_map.py
//
// Both accessed on 2023-10-26

// prettier-ignore
export const COLOUR_MAP = [
    [1,         "rgb(21 136 51)"],
    [0.96875,   "rgb(35 146 66)"],
    [0.9375,    "rgb(48 155 81)"],
    [0.90625,   "rgb(60 164 96)"],
    [0.875,     "rgb(72 173 110)"],
    [0.84375,   "rgb(84 181 124)"],
    [0.8125,    "rgb(96 188 137)"],
    [0.78125,   "rgb(108 195 149)"],
    [0.75,      "rgb(121 201 161)"],
    [0.71875,   "rgb(134 207 173)"],
    [0.6875,    "rgb(147 211 183)"],
    [0.65625,   "rgb(159 215 192)"],
    [0.625,     "rgb(172 218 200)"],
    [0.59375,   "rgb(185 220 207)"],
    [0.5625,    "rgb(197 221 213)"],
    [0.53125,   "rgb(209 221 218)"],
    [0.5,       "rgb(221 221 221)"],
    [0.46875,   "rgb(226 213 216)"],
    [0.4375,    "rgb(230 205 211)"],
    [0.40625,   "rgb(232 196 207)"],
    [0.375,     "rgb(231 187 203)"],
    [0.34375,   "rgb(229 178 200)"],
    [0.3125,    "rgb(226 168 197)"],
    [0.28125,   "rgb(220 158 194)"],
    [0.25,      "rgb(213 148 191)"],
    [0.21875,   "rgb(205 138 188)"],
    [0.1875,    "rgb(195 128 185)"],
    [0.15625,   "rgb(184 119 182)"],
    [0.125,     "rgb(172 110 178)"],
    [0.09375,   "rgb(158 101 175)"],
    [0.0625,    "rgb(143 93 171)"],
    [0.03125,   "rgb(128 85 166)"],
    [0,         "rgb(111 78 161)"],
] as const;

export default function mapColour(ratio: number) {
    const idx = Math.trunc((1 - ratio) * (COLOUR_MAP.length - 1));
    return COLOUR_MAP[idx][1];
}
