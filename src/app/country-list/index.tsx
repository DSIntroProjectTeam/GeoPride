import Country from "#/components/country";
import { COUNTRIES, CountryName } from "#/data/countries";

type props = {
    onSelectCountry: (country: CountryName) => void;
};

export default function CountryListView({ onSelectCountry }: props) {
    return (
        <>
            <ul>
                {COUNTRIES.map(country => (
                    <li key={country}>
                        <button onClick={() => onSelectCountry(country)}>
                            <Country name={country} />
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
