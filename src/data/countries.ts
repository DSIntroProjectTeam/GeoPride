// prettier-ignore
export const COUNTRIES = [
    "Austria",   "Belgium",
    "Bulgaria",  "Croatia",
    "Cyprus",    "Czechia",
    "Denmark",   "Estonia",
    "Finland",   "France",
    "Germany",   "Greece",
    "Hungary",   "Ireland",
    "Italy",     "Latvia",
    "Lithuania", "Luxembourg",
    "Malta",     "Netherlands",
    "Poland",    "Portugal",
    "Romania",   "Slovakia",
    "Slovenia",  "Spain",
    "Sweden",    "United Kingdom"
] as const;

// prettier-ignore
export const FLAGS: Record<string, string> = {
    "Austria": "🇦🇹",   "Belgium": "🇧🇪",
    "Bulgaria": "🇧🇬",  "Croatia": "🇭🇷",
    "Cyprus": "🇨🇾",    "Czechia": "🇨🇿",
    "Denmark": "🇩🇰",   "Estonia": "🇪🇪",
    "Finland": "🇫🇮",   "France": "🇫🇷",
    "Germany": "🇩🇪",   "Greece": "🇬🇷",
    "Hungary": "🇭🇺",   "Ireland": "🇮🇪",
    "Italy": "🇮🇹",     "Latvia": "🇱🇻",
    "Lithuania": "🇱🇹", "Luxembourg": "🇱🇺",
    "Malta": "🇲🇹",     "Netherlands": "🇳🇱",
    "Poland": "🇵🇱",    "Portugal": "🇵🇹",
    "Romania": "🇷🇴",   "Slovakia": "🇸🇰",
    "Slovenia": "🇸🇮",  "Spain": "🇪🇸",
    "Sweden": "🇸🇪",    "United Kingdom": "🇬🇧",
};

export type CountryName = (typeof COUNTRIES)[number];
