import type { CountryName } from "#/data/countries";
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
import { useState } from "react";
import clsx from "clsx";

type props = {
    country: CountryName;
    onClickBack: () => void;
};

export default function OpenedCountryView({ country, onClickBack }: props) {
    const [isClosest, setIsClosest] = useState(true);

    const label = isClosest ? "Closest" : "Furthest";

    return (
        <>
            <button onClick={onClickBack}>⬅ Back</button>
            <h1>Data for {country}</h1>
            <p>Overall score: {(allScores[country][1] * 100).toFixed(2)}%</p>
            <p>
                Reverse: <input type="checkbox" checked={!isClosest} onChange={() => setIsClosest(v => !v)} />
            </p>

            <h2>{label} countries by responses overall</h2>
            <ClosestFurthest from={country} topic="all" isClosest={isClosest} />

            <h2>{label} countries by responses to discrimination questions</h2>
            <ClosestFurthest from={country} topic="discrimination" isClosest={isClosest} />

            <h2>{label} countries by responses to public questions</h2>
            <ClosestFurthest from={country} topic="public" isClosest={isClosest} />

            <h2>{label} countries by responses to rights questions</h2>
            <ClosestFurthest from={country} topic="rights" isClosest={isClosest} />

            <h2>{label} countries by responses to safety questions</h2>
            <ClosestFurthest from={country} topic="safety" isClosest={isClosest} />
        </>
    );
}

function ClosestFurthest({ from, topic, isClosest }: { from: CountryName; topic: string; isClosest: boolean }) {
    const [list, scores] = getData(topic);

    const neighbours = list[from] as CountryName[];
    const closestList = isClosest ? neighbours.slice(0, 5) : neighbours.slice(-6, -1).reverse();

    function getScore(country: CountryName) {
        return ((100 * (scores[country][1] + 1)) / 2).toFixed(2);
    }

    return (
        <ol className={clsx("flex gap-1")}>
            {closestList.map(country => (
                <li
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
    );
}

function getData(topic: string) {
    switch (topic) {
        case "all":
            return [allListed, allScores] as const;
        case "discrimination":
            return [discrimListed, discrimScores] as const;
        case "public":
            return [publicListed, publicScores] as const;
        case "rights":
            return [rightsListed, rightsScores] as const;
        case "safety":
            return [safetyListed, safetyScores] as const;
        default:
            return {} as never;
    }
}
