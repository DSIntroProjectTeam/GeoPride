import clsx, { ClassValue } from "clsx";

import { COUNTRIES, CountryName } from "#/data/countries";
import Country from "#/app/country";

type props = {
    onSelect: (country: CountryName) => void;
    onOpenAbout: () => void;
    x?: ClassValue;
};

export default function CountryListView({ onSelect, onOpenAbout, x }: props) {
    return (
        <div className={clsx("relative z-10", "flex flex-col gap-4", "m-4 mt-32 lg:mt-4", "w-96 h-full", x)}>
            <div className={clsx("mx-2 prose")}>
                <h1 className="m-0">GeoPride</h1>
                <p className={clsx("m-0", "text-neutral-500")}>Please pick a country to see comparisons</p>
            </div>
            <ul className={clsx("flex flex-col gap-1")}>
                {COUNTRIES.map(country => (
                    <li key={country}>
                        <button
                            onClick={() => onSelect(country)}
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
            <button onClick={onOpenAbout} className={clsx("text-neutral-500 underline cursor-pointer")}>
                About GeoPride
            </button>
        </div>
    );
}
