import Country from "#/components/country";
import { COUNTRIES, CountryName } from "#/data/countries";
import clsx from "clsx";

type props = {
    onSelectCountry: (country: CountryName) => void;
};

export default function CountryListView({ onSelectCountry }: props) {
    return (
        <>
            <ul>
                {COUNTRIES.map(country => (
                    <li key={country}>
                        <button onClick={() => onSelectCountry(country)} className={clsx("border", "px-2 py-0")}>
                            <Country name={country} />
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
