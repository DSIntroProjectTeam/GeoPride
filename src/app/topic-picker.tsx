import { PropsWithChildren } from "react";
import clsx, { ClassValue } from "clsx";

import { Topic } from "#/app";
import { COLOUR_MAP } from "#/data/colourmap";

type props = { x?: ClassValue; activeTopic: Topic; pickTopic: (topic: Topic) => void };

export default function TopicPicker({ activeTopic, pickTopic, x }: props) {
    const [good, bad] = scaleNames(activeTopic);

    return (
        <div className={clsx("fixed top-0 right-0", "m-4", "flex flex-col gap-4 justify-center", x)}>
            <div className={clsx("flex gap-4", "rounded-full", "bg-neutral-200", "border")}>
                <TopicButton active={activeTopic === "all"} onPick={() => pickTopic("all")}>
                    Overall Scores
                </TopicButton>
                <TopicButton active={activeTopic === "safety"} onPick={() => pickTopic("safety")}>
                    Safety
                </TopicButton>
                <TopicButton active={activeTopic === "public"} onPick={() => pickTopic("public")}>
                    Public Prejudice
                </TopicButton>
                <TopicButton active={activeTopic === "discrim"} onPick={() => pickTopic("discrim")}>
                    Discrimination
                </TopicButton>
                <TopicButton active={activeTopic === "rights"} onPick={() => pickTopic("rights")}>
                    Legal Rights
                </TopicButton>
            </div>
            <div className={clsx("w-full", "flex", "rounded-full overflow-hidden", "shadow-md")}>
                {COLOUR_MAP.map(tuple => (
                    <div className="h-2" style={{ backgroundColor: tuple[1], width: `${100 / COLOUR_MAP.length}%` }} />
                ))}
            </div>
            <div className={clsx("w-full -mt-3 px-2", "flex justify-between", "text-neutral-500", "text-sm uppercase")}>
                <span>{good}</span>
                <span>{bad}</span>
            </div>
        </div>
    );
}

function TopicButton({
    active = false,
    onPick,
    children,
}: PropsWithChildren<{ active?: boolean; onPick?: () => void }>) {
    return (
        <button
            onClick={onPick}
            className={clsx(
                "text-sm uppercase",
                "rounded-full",
                "px-4 py-1",
                "transition-all",
                active && "hover:cursor-default",
                active && "bg-white scale-110 shadow-sm ring-1 ring-neutral-300",
                !active && "hover:bg-neutral-100"
            )}
        >
            {children}
        </button>
    );
}

function scaleNames(topic: Topic) {
    switch (topic) {
        case "all":
            return ["Best", "Worst"];
        case "discrim":
            return ["Least", "Most"];
        case "public":
            return ["Least", "Most"];
        case "rights":
            return ["Most", "Least"];
        case "safety":
            return ["Safest", "Most Dangerous"];
    }
}
