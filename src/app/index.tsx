import { useState } from "react";

import CountryListView from "./country-list";
import { CountryName } from "#/data/countries";
import OpenedCountryView from "./opened-country";

export default function App() {
    type ViewId = "country-list" | "opened-country";

    const [view, setView] = useState<ViewId>("country-list");
    const [selectedCountry, selectCountry] = useState<CountryName>();

    function onSelectCountry(country: CountryName) {
        selectCountry(country);
        setView("opened-country");
    }

    function onDeselectCountry() {
        selectCountry(undefined);
        setView("country-list");
    }

    switch (view) {
        case "country-list":
            return <CountryListView onSelectCountry={onSelectCountry} />;
        case "opened-country":
            return <OpenedCountryView onClickBack={onDeselectCountry} country={selectedCountry!} />;
    }
}
