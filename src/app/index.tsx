import clsx from "clsx";
import _ from "lodash";

import countries from "#/data/flags";

export default function App() {
    return (
        <>
            <div className="flex flex-col gap-2">
                {_(countries)
                    .entries()
                    .map(([name, flag]) => (
                        <button key={flag}>
                            {flag} {name}
                        </button>
                    ))
                    .value()}
            </div>
        </>
    );
}
