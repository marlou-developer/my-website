import React from "react";

export default function Tab({ tabs, activeIndex, onTabClick }) {
    return (
        <div className="border-b bg-white px-4 sm:px-6 lg:px-8">
            <nav className="flex justify-start space-x-12">
                {tabs.map((tab, idx) => (
                    <button
                        key={tab}
                        className={`py-4 text-base font-medium transition-colors ${
                            activeIndex === idx
                                ? "text-blue-800"
                                : "text-gray-600 hover:text-blue-700"
                        } relative`}
                        onClick={() => onTabClick(idx)}
                    >
                        {tab}
                        {activeIndex === idx && (
                            <span className="absolute left-0 right-0 -bottom-px mx-auto h-0.5 w-4/3 bg-blue-800 rounded z-10"></span>
                        )}
                    </button>
                ))}
            </nav>
        </div>
    );
}

// To call: 
// const tabList = ["Dashboard", "Attendance", "Timesheets", "Reports"];
// const [active, setActive] = useState(1);

                            //  <Tab
                            //     tabs={tabList}
                            //     activeIndex={active}
                            //     onTabClick={setActive}
                            // />
