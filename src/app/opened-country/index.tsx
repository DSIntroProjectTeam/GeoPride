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

type props = {
    country: CountryName;
    onClickBack: () => void;
};

export default function OpenedCountryView({ country, onClickBack }: props) {
    return (
        <>
            <button onClick={onClickBack}>⬅ Back</button>
            <h1>Data for {country}</h1>
            <p>Overall score: {(allScores[country][1] * 100).toFixed(2)}%</p>
            <h2>Overall closest countries by responses</h2>
            <ol>
                {(allListed[country] as CountryName[]).slice(0, 5).map(closeCountry => (
                    <li>
                        <Country name={closeCountry} />
                        <span>(score: {(allScores[closeCountry][1] * 100).toFixed(2)}%)</span>
                    </li>
                ))}
            </ol>
            <h2>Closest countries by responses to discrimination questions</h2>
            <ol>
                {(discrimListed[country] as CountryName[]).slice(0, 5).map(closeCountry => (
                    <li>
                        <Country name={closeCountry} />
                        <span>(score: {(discrimScores[closeCountry][1] * 100).toFixed(2)}%)</span>
                    </li>
                ))}
            </ol>
            <h2>Closest countries by responses to public questions</h2>
            <ol>
                {(publicListed[country] as CountryName[]).slice(0, 5).map(closeCountry => (
                    <li>
                        <Country name={closeCountry} />
                        <span>(score: {(publicScores[closeCountry][1] * 100).toFixed(2)}%)</span>
                    </li>
                ))}
            </ol>
            <h2>Closest countries by responses to rights questions</h2>
            <ol>
                {(rightsListed[country] as CountryName[]).slice(0, 5).map(closeCountry => (
                    <li>
                        <Country name={closeCountry} />
                        <span>(score: {(rightsScores[closeCountry][1] * 100).toFixed(2)}%)</span>
                    </li>
                ))}
            </ol>
            <h2>Closest countries by responses to safety questions</h2>
            <ol>
                {(safetyListed[country] as CountryName[]).slice(0, 5).map(closeCountry => (
                    <li>
                        <Country name={closeCountry} />
                        <span>(score: {(safetyScores[closeCountry][1] * 100).toFixed(2)}%)</span>
                    </li>
                ))}
            </ol>
        </>
    );
}
