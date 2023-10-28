import { PropsWithChildren } from "react";
import clsx, { ClassValue } from "clsx";

type props = {
    onClose: () => void;
    x?: ClassValue;
};

export default function AboutText({ onClose, x }: props) {
    return (
        <div
            className={clsx(
                "w-[36rem]",
                "flex flex-col items-center",
                "absolute top-0 left-0",
                "min-h-screen p-4",
                "bg-white",
                "shadow-md",
                x
            )}
        >
            <div className="self-end">
                <button onClick={onClose} className="text-blue-500 font-semibold">
                    Close
                </button>
            </div>
            <h1 className="text-5xl mt-8 font-semibold mb-12">GeoPride</h1>
            <Section open title="What is GeoPride?">
                GeoPride is designed to help you evaluate the queer-friendliness of the countries you want to visit. The
                tool covers all the EU countries plus the United Kingdom. The countries have been scored based on four
                datasets. In addition to overall scores, you can check the scores by different categories: safety,
                public prejudice, discrimination, and legal rights.
            </Section>
            <Section title="How does GeoPride work?">
                On the main page, you can get an overview of the queer-friendliness in the EU by looking at the heat
                maps. You can select the category to see the scoring for different themes. You can also choose a country
                from the list on the left to see more details. On the detail page, you can see the country's scoring in
                different categories and a list of countries closest to that country in each category.
            </Section>
            <Section title="Where do the scores come from?">
                GeoPride is based on three survey datasets focusing on attitudes, perceptions, and experiences of
                discrimination based on sexual orientation or being transgender or intersex, and one dataset covering
                the legislation and policies related to the LGBTI rights in Europe. After selecting the relevant
                questions from the data, all answer options were scored from -2 to 2 to have a unified scale for future
                comparison. Responses indicating a problematic situation gave negative points, and responses indicating
                a good situation gave positive points. Laws and policies supporting the LGBTI rights were scored, too,
                depending on how widely they were applied in each country. For ranking countries, we calculated their
                total points as the sum of points for each question, which were a product of answer, percentage,
                question weight and relevance. Finally, we constructed countries' scores as percentage of scored points
                from the max possible. For finding the closest matches, the question scores were vectorized and the
                distance between countries calculated as the Euclidean distance.
            </Section>
            <Section title="Who made GeoPride?">
                GeoPride was made by students from the University of Helsinki for the course{" "}
                <q>Introduction to Data Science</q> (DATA11001) in 2023.
            </Section>
            <Section title="Where can I find the original datasets?">
                <ul className={clsx("text-left")}>
                    <li className={clsx("not-prose", "leading-5", "mb-2")}>
                        <div>
                            European Commission, Directorate-General for Communication,{" "}
                            <q>Special Eurobarometer 493: Discrimination in the EU (including LGBTI)</q>, version v1.00,
                            2019{" "}
                        </div>
                        <div className="text-xs pt-1">Accessed 2023-10-27</div>
                        <a
                            className="text-sm text-blue-500 visited:text-purple-800"
                            href="https://data.europa.eu/88u/dataset/S2251_91_4_493_ENG"
                        >
                            https://data.europa.eu/88u/dataset/S2251_91_4_493_ENG
                        </a>
                    </li>
                    <li className={clsx("not-prose", "leading-5", "mb-2")}>
                        <div>EU LGBTI Survey 2020</div>
                        <div className="text-xs pt-1">Accessed 2023-10-27</div>
                        <a
                            className="text-sm text-blue-500 visited:text-purple-800"
                            href="https://www.kaggle.com/datasets/maddalenamariano/eu-lgbti-survey-2020"
                        >
                            https://www.kaggle.com/datasets/maddalenamariano/eu-lgbti-survey-2020
                        </a>
                    </li>
                    <li className={clsx("not-prose", "leading-5", "mb-2")}>
                        <div>EU LGBT Survey 2012</div>
                        <div className="text-xs pt-1">Accessed 2023-10-27</div>
                        <a
                            className="text-sm text-blue-500 visited:text-purple-800"
                            href="https://www.kaggle.com/datasets/ruslankl/european-union-lgbt-survey-2012"
                        >
                            https://www.kaggle.com/datasets/ruslankl/european-union-lgbt-survey-2012
                        </a>
                    </li>
                    <li className={clsx("not-prose", "leading-5", "mb-2")}>
                        <div>LGBTQ+ Rights in Europe</div>
                        <div className="text-xs pt-1">Accessed 2023-10-27</div>
                        <a
                            className="text-sm text-blue-500 visited:text-purple-800"
                            href="https://www.kaggle.com/datasets/maddalenamariano/rainbow-europe-lgbtq-rights"
                        >
                            https://www.kaggle.com/datasets/maddalenamariano/rainbow-europe-lgbtq-rights
                        </a>
                    </li>
                    <li className={clsx("not-prose", "leading-5", "mb-2")}>
                        <div>Map of Europe, @leakymirror (GitHub)</div>
                        <div className="text-xs pt-1">Accessed 2023-10-26</div>
                        <a
                            className="text-sm text-blue-500 visited:text-purple-800"
                            href="https://github.com/leakyMirror/map-of-europe/tree/master"
                        >
                            https://github.com/leakyMirror/map-of-europe/tree/master
                        </a>
                    </li>
                </ul>
            </Section>
        </div>
    );
}

function Section({ title, open, children }: PropsWithChildren<{ title: string; open?: boolean }>) {
    return (
        <details open={open} className={clsx("w-full", "border-t")}>
            <summary className={clsx("flex gap-2 items-center", "py-2", "cursor-pointer", "group")}>
                <h2 className={clsx("uppercase", "text-neutral-600", "px-2")}>{title}</h2>
            </summary>
            <p className={clsx("px-2 pb-2", "text-justify", "prose prose-neutral")}>{children}</p>
        </details>
    );
}
