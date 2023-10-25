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

type props = {
    country: CountryName;
    onClickBack: () => void;
};

export default function OpenedCountryView({ country, onClickBack }: props) {
    const [isClosest, setIsClosest] = useState(true);

    function pick(values: any) {
        const arr = values[country] as CountryName[];
        return isClosest ? arr.slice(0, 5) : arr.slice(-6, -1).reverse();
    }

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
            <ol>
                {pick(allListed).map(closeCountry => (
                    <li>
                        <Country name={closeCountry} />
                        <span>(score: {(allScores[closeCountry][1] * 100).toFixed(2)}%)</span>
                    </li>
                ))}
            </ol>
            <h2>{label} countries by responses to discrimination questions</h2>
            <span>
                (<Country name={country} />
                <span>Own score: {(discrimScores[country][1] * 100).toFixed(2)}%</span>)
            </span>
            <ol>
                {pick(discrimListed).map(closeCountry => (
                    <li>
                        <Country name={closeCountry} />
                        <span>(score: {(discrimScores[closeCountry][1] * 100).toFixed(2)}%)</span>
                    </li>
                ))}
            </ol>
            <h2>{label} countries by responses to public questions</h2>
            <span>
                (<Country name={country} />
                <span>Own score: {(publicScores[country][1] * 100).toFixed(2)}%</span>)
            </span>
            <ol>
                {pick(publicListed).map(closeCountry => (
                    <li>
                        <Country name={closeCountry} />
                        <span>(score: {(publicScores[closeCountry][1] * 100).toFixed(2)}%)</span>
                    </li>
                ))}
            </ol>
            <h2>{label} countries by responses to rights questions</h2>
            <span>
                (<Country name={country} />
                <span>Own score: {(rightsScores[country][1] * 100).toFixed(2)}%</span>)
            </span>
            <ol>
                {pick(rightsListed).map(closeCountry => (
                    <li>
                        <Country name={closeCountry} />
                        <span>(score: {(rightsScores[closeCountry][1] * 100).toFixed(2)}%)</span>
                    </li>
                ))}
            </ol>
            <h2>{label} countries by responses to safety questions</h2>
            <span>
                (<Country name={country} />
                <span>Own score: {(safetyScores[country][1] * 100).toFixed(2)}%</span>)
            </span>
            <ol>
                {pick(safetyListed).map(closeCountry => (
                    <li>
                        <Country name={closeCountry} />
                        <span>(score: {(safetyScores[closeCountry][1] * 100).toFixed(2)}%)</span>
                    </li>
                ))}
            </ol>
        </>
    );
}
