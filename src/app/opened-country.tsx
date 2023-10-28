import { useEffect, useRef } from "react";
import clsx, { ClassValue } from "clsx";

import Country from "#/app/country";
import { FLAGS, CountryName } from "#/data/countries";
import { Topic } from ".";

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
    country: CountryName | null;
    topic: Topic;
    onChange: (country: CountryName | null) => void;
    x?: ClassValue;
};

export default function OpenedCountryView({ country, onChange, topic, x }: props) {
    const prevCountryRef = useRef<CountryName>("Finland");
    const countryToShow = country ?? prevCountryRef.current;

    useEffect(() => {
        if (!country) return;

        prevCountryRef.current = country;
    }, [country]);

    return (
        <div
            className={clsx(
                "flex flex-col items-center",
                "absolute top-0 left-0",
                "min-h-screen p-4",
                "bg-white",
                "shadow-md",
                x
            )}
        >
            <div className="self-end">
                <button onClick={() => onChange(null)} className="text-blue-500 font-semibold">
                    Close
                </button>
            </div>
            <div className="mb-8">
                <div className={clsx("text-8xl text-center")}>{FLAGS[countryToShow]}</div>
                <h1 className={clsx("text-center text-xl uppercase font-light text-neutral-500")}>{countryToShow}</h1>
            </div>

            <ClosestFurthest from={countryToShow} onChange={onChange} open={topic === "all"} topic="all" dir="hi" />
            <ClosestFurthest
                from={countryToShow}
                onChange={onChange}
                open={topic === "safety"}
                topic="safety"
                dir="hi"
            />
            <ClosestFurthest
                from={countryToShow}
                onChange={onChange}
                open={topic === "public"}
                topic="public"
                dir="lo"
            />
            <ClosestFurthest
                from={countryToShow}
                onChange={onChange}
                open={topic === "discrim"}
                topic="discrimination"
                dir="lo"
            />
            <ClosestFurthest
                from={countryToShow}
                onChange={onChange}
                open={topic === "rights"}
                topic="rights"
                dir="hi"
            />
        </div>
    );
}

function ClosestFurthest({
    from,
    topic,
    open,
    onChange,
    dir,
}: {
    from: CountryName;
    topic: string;
    open: boolean;
    dir: "hi" | "lo";
    onChange: (country: CountryName) => void;
}) {
    const [title, list, scores] = getData(topic);

    const neighbours = (list[from] as CountryName[]).slice(0, 5);

    function getScore(country: CountryName) {
        return dir === "hi" ? scores[country] : 1 - scores[country];
    }

    function formatScore(score: number) {
        return (100 * score).toFixed(2);
    }

    const rawScore = scores[from];
    const myScore = getScore(from);

    return (
        <details open={open} className={clsx("w-[32rem]", "border-t")}>
            <summary className={clsx("flex gap-2 items-center", "py-2", "cursor-pointer", "group")}>
                <h2 className={clsx("uppercase", "text-neutral-600", "px-2")}>{title}</h2>
                <span
                    className={clsx(
                        "text-sm uppercase font-bold",
                        "ml-auto",
                        "text-neutral-400",
                        "transition-all",
                        "opacity-0 group-hover:opacity-100"
                    )}
                >
                    {dir === "hi" ? "Higher is better" : "Lower is better"}
                </span>
                <span className={clsx(scoreStyle(rawScore), "px-3 w-20 rounded-full", "text-center")}>
                    {formatScore(myScore)}%
                </span>
            </summary>
            <span className={clsx("px-2", "text-xs text-neutral-400")}>
                Countries with the most similar survery responses to {from}
            </span>
            <ol className={clsx("flex justify-center gap-1", "pb-2")}>
                {neighbours.map(country => (
                    <li key={country}>
                        <button
                            onClick={() => onChange(country)}
                            className={clsx(
                                "flex flex-col items-center justify-center",
                                "w-24 h-28",
                                "rounded-md",
                                "cursor-pointer",
                                "bg-neutral-50 hover:bg-blue-50",
                                "border hover:border-blue-200"
                            )}
                        >
                            <Country name={country} xFlag={["text-6xl"]} xName={["text-xs uppercase"]} />
                            <span>{formatScore(getScore(country))}%</span>
                        </button>
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
