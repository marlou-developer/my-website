import SidebarSection from "./_sections/sidebar-section";
import { useSelector } from "react-redux";
import TopbarSection from "./_sections/topbar-section";

import Tooltip from "@/app/_components/tooltip";
import Button from "@/app/_components/button";
import Accordion from "@/app/_components/accordion";

export default function Layout() {
    const { desktopCollapsed } = useSelector((store) => store.app);

    return (
        <div className="h-full bg-white dark:bg-gray-900">
            <SidebarSection />
            <div
                className={`${
                    desktopCollapsed ? "" : "lg:pl-72"
                } flex flex-col min-h-screen transition-all duration-300`}
            >
                <TopbarSection />
                <main
                    className={`flex-1 p-6 ${desktopCollapsed ? "ml-20" : ""}`}
                >
                    Hello world!
                    <Accordion
                        items={[
                            {
                                title: "What is Flowbite?",
                                content: (
                                    <div>
                                        <p className="mb-2 text-body">
                                            Flowbite is an open-source library
                                            of interactive components...
                                        </p>
                                        <p className="text-body">
                                            Check out this guide to learn how to{" "}
                                            <a
                                                href="/docs/getting-started/introduction/"
                                                className="text-fg-brand hover:underline"
                                            >
                                                get started
                                            </a>
                                            .
                                        </p>
                                    </div>
                                ),
                            },
                        ]}
                        single={true} // only one open at a time
                    />
                </main>
            </div>
        </div>
    );
}
