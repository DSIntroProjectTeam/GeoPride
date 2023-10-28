import { useState } from "react";

import { CountryName } from "#/data/countries";

import CountryListView from "./country-list";
import OpenedCountryView from "./opened-country";
import EuMap from "./eu-map";
import TopicPicker from "./topic-picker";
import AboutText from "./about-text";

export type Topic = "all" | "discrim" | "public" | "rights" | "safety";

export default function App() {
    const [topic, selectTopic] = useState<Topic>("all");
    const [country, selectCountry] = useState<CountryName | null>(null);
    const [showAbout, setShowAbout] = useState(false);

    return (
        <>
            <EuMap activeTopic={topic} x={["z-0"]} />
            {!country && !showAbout && (
                <CountryListView onSelect={selectCountry} onOpenAbout={() => setShowAbout(true)} x={["z-10"]} />
            )}
            <TopicPicker activeTopic={topic} pickTopic={selectTopic} x={["z-20"]} />
            {country && <OpenedCountryView country={country} onChange={selectCountry} topic={topic} x={["z-30"]} />}
            {showAbout && <AboutText onClose={() => setShowAbout(false)} x={["z-40"]} />}
        </>
    );
}
