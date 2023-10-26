import Country from "#/components/country";
import { COUNTRIES, CountryName } from "#/data/countries";
import clsx from "clsx";
import EuMap from "./eu-map";

type props = {
    onSelectCountry: (country: CountryName) => void;
};

export default function CountryListView({ onSelectCountry }: props) {
    return (
        <>
            <EuMap x={["z-0"]} />
            <ul className={clsx("relative z-10", "w-64 h-full", "flex flex-col gap-1", "p-4", "overflow-scroll")}>
                {COUNTRIES.map(country => (
                    <li key={country} className={clsx("first:mt-auto last:mb-auto")}>
                        <button
                            onClick={() => onSelectCountry(country)}
                            className={clsx(
                                "bg-white hover:bg-blue-50",
                                "border hover:border-blue-200",
                                "rounded-full",
                                "px-4 py-1",
                                "flex gap-1"
                            )}
                        >
                            <Country name={country} />
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
