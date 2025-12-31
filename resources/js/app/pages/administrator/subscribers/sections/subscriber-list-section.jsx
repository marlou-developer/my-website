import Accordion from "@/app/_components/accordion";
import React from "react";
import SubscriberContentListSection from "./subscriber-content-list-section";

export default function SubscriberListSection() {
    return (
        <div>
            <Accordion
                items={[
                    {
                        title: "Egies",
                        content: <SubscriberContentListSection />,
                    },
                    {
                        title: "Egies2",
                        content: <SubscriberContentListSection />,
                    },
                ]}
            />
        </div>
    );
}
