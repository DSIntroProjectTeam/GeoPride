import _ from "lodash";

const COUNTRIES = {
    Austria: "🇦🇺",
    Belgium: "🇧🇪",
    Bulgaria: "🇧🇬",
    Croatia: "🇭🇷",
    Cyprus: "🇨🇾",
    Czechia: "🇨🇿",
    Denmark: "🇩🇰",
    Estonia: "🇪🇪",
    Finland: "🇫🇮",
    France: "🇫🇷",
    Germany: "🇩🇪",
    Greece: "🇬🇷",
    Hungary: "🇭🇺",
    Ireland: "🇮🇪",
    Italy: "🇮🇹",
    Latvia: "🇱🇻",
    Lithuania: "🇱🇹",
    Luxembourg: "🇱🇺",
    Malta: "🇲🇹",
    Netherlands: "🇳🇱",
    Poland: "🇵🇱",
    Portugal: "🇵🇹",
    Romania: "🇷🇴",
    Slovakia: "🇸🇰",
    Slovenia: "🇸🇮",
    Spain: "🇪🇸",
    Sweden: "🇸🇪",
    "United Kingdom": "🇬🇧",
};

export default function App() {
    return (
        <>
            {_(COUNTRIES)
                .entries()
                .map(([name, flag]) => (
                    <button key={flag}>
                        {flag} {name}
                    </button>
                ))
                .value()}
        </>
    );
}
