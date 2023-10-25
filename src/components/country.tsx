import { FLAGS } from "#/data/countries";

export default function Country({ name, reverse = false }: { name: string; reverse?: boolean }) {
    return reverse ? (
        <>
            <span>{name}</span>
            <span>{FLAGS[name]}</span>
        </>
    ) : (
        <>
            <span>{FLAGS[name]}</span>
            <span>{name}</span>
        </>
    );
}
