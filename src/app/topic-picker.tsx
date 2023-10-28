import { PropsWithChildren } from "react";
import clsx, { ClassValue } from "clsx";

import { Topic } from "#/app";

type props = { x?: ClassValue; activeTopic: Topic; pickTopic: (topic: Topic) => void };

export default function TopicPicker({ activeTopic, pickTopic, x }: props) {
    return (
        <div className={clsx("fixed top-0 right-0", "m-4", "flex flex-wrap gap-4 justify-center", x)}>
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
