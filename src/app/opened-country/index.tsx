import type { CountryName } from "#/data/countries";

import clsx from "clsx";

import Country from "#/components/country";

import allListed from "#/data/vecs/all.listed.json";
import allScores from "#/data/scores/scores_all.json";
import discrimListed from "#/data/vecs/discrimination.listed.json";
import discrimScores from "#/data/scores/scores_discrimination.json";
import publicListed from "#/data/vecs/public.listed.json";
import publicScores from "#/data/scores/scores_public.json";
import rightsListed from "#/data/vecs/rights.listed.json";
import rightsScores from "#/data/scores/scores_rights.json";
import safetyListed from "#/data/vecs/safety.listed.json";
import safetyScores from "#/data/scores/scores_safety.json";

type props = {
    country: CountryName;
    onClickBack: () => void;
};

export default function OpenedCountryView({ country, onClickBack }: props) {
    return (
        <div className={clsx("flex flex-col items-center")}>
            <button onClick={onClickBack}>⬅ Back</button>
            <h1>Data for {country}</h1>

            <ClosestFurthest from={country} topic="all" />
            <ClosestFurthest from={country} topic="discrimination" />
            <ClosestFurthest from={country} topic="public" />
            <ClosestFurthest from={country} topic="rights" />
            <ClosestFurthest from={country} topic="safety" />
        </div>
    );
}

function ClosestFurthest({ from, topic }: { from: CountryName; topic: string }) {
    const [title, list, scores] = getData(topic);

    const neighbours = (list[from] as CountryName[]).slice(0, 5);
    const rawScore = scores[from];

    function getScore(country: CountryName) {
        return (100 * scores[country]).toFixed(2);
    }

    return (
        <details open={topic === "all"} className={clsx("w-[32rem]", "border-t")}>
            <summary className={clsx("flex gap-2 justify-between", "py-2", "cursor-pointer")}>
                <h2 className={clsx("uppercase", "text-neutral-600", "px-2")}>{title}</h2>
                <span className={clsx(scoreStyle(rawScore), "px-3 w-20 rounded-full", "text-center")}>
                    {getScore(from)}%
                </span>
            </summary>
            <span className={clsx("px-2", "text-xs text-neutral-400")}>
                Countries with the most similar survery responses to {from}
            </span>
            <ol className={clsx("flex justify-center gap-1", "pb-2")}>
                {neighbours.map(country => (
                    <li
                        key={country}
                        className={clsx(
                            "flex flex-col items-center justify-center",
                            "w-24 h-28",
                            "border rounded-md",
                            "bg-blue-50"
                        )}
                    >
                        <Country name={country} xFlag={["text-6xl"]} xName={["text-xs uppercase"]} />
                        <span>{getScore(country)}%</span>
                    </li>
                ))}
            </ol>
        </details>
    );
}

function getData(topic: string) {
    switch (topic) {
        case "all":
            return ["Overall", allListed, allScores] as const;
        case "discrimination":
            return ["Discrimination", discrimListed, discrimScores] as const;
        case "public":
            return ["Public Prejudice", publicListed, publicScores] as const;
        case "rights":
            return ["Legal Rights", rightsListed, rightsScores] as const;
        case "safety":
            return ["Safety", safetyListed, safetyScores] as const;
        default:
            return {} as never;
    }
}

function scoreStyle(score: number) {
    if (score >= 0.8) return "bg-green-500 text-white";
    if (score >= 0.6) return "bg-green-100 text-green-900";
    if (score >= 0.4) return "bg-neutral-100 text-neutral-900";
    if (score >= 0.2) return "bg-red-100 text-red-900";
    return "bg-red-500 text-white";
}
