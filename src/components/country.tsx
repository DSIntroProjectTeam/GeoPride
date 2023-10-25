import { FLAGS } from "#/data/countries";
import clsx, { ClassValue } from "clsx";

export default function Country({
    name,
    reverse = false,
    xName,
    xFlag,
}: {
    name: string;
    reverse?: boolean;
    xName?: ClassValue[];
    xFlag?: ClassValue[];
}) {
    const displayName = name === "United Kingdom" ? "UK" : name;
    return reverse ? (
        <>
            <span className={clsx(xName)}>{displayName}</span>
            <span className={clsx(xFlag)}>{FLAGS[name]}</span>
        </>
    ) : (
        <>
            <span className={clsx(xFlag)}>{FLAGS[name]}</span>
            <span className={clsx(xName)}>{displayName}</span>
        </>
    );
}
