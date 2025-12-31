import Card from "@/app/_components/card";
import Tabs from "@/app/_components/tabs";
import React from "react";
import { FcBriefcase } from "react-icons/fc";

export default function SubscriberContentListSection() {
    return (
        <div className="flex gap-3">
            <div className="flex-none w-1/4">
                <Card className="h-52">Egies</Card>
            </div>
            <div className="flex-1">
                <Tabs
                    tabs={[
                        {
                            label: "Features",
                            active: true,
                        },
                        {
                            label: "Details",
                            active: false,
                        },
                    ]}
                />
                <div className="flex flex-wrap my-3 gap-3">
                    <div className="flex w-52 h-12 border-blue-500 bg-blue-100 border-2 shadow-sm rounded-lg ">
                        <div className="w-12 h-12 flex items-center justify-center">
                            <FcBriefcase className="h-6 w-6" />
                        </div>
                        <div className="flex items-center justify-start w-full">
                            dadaw
                        </div>
                    </div>
                    <div className="flex w-52 h-12 border-blue-500 bg-blue-100 border-2 shadow-sm rounded-lg ">
                        <div className="w-12 h-12 flex items-center justify-center">
                            <FcBriefcase className="h-6 w-6" />
                        </div>
                        <div className="flex items-center justify-start w-full">
                            dadaw
                        </div>
                    </div>
                    <div className="flex w-52 h-12 border-blue-500 bg-blue-100 border-2 shadow-sm rounded-lg ">
                        <div className="w-12 h-12 flex items-center justify-center">
                            <FcBriefcase className="h-6 w-6" />
                        </div>
                        <div className="flex items-center justify-start w-full">
                            dadaw
                        </div>
                    </div>
                    <div className="flex w-52 h-12 border-blue-500 bg-blue-100 border-2 shadow-sm rounded-lg ">
                        <div className="w-12 h-12 flex items-center justify-center">
                            <FcBriefcase className="h-6 w-6" />
                        </div>
                        <div className="flex items-center justify-start w-full">
                            dadaw
                        </div>
                    </div>
                    <div className="flex w-52 h-12 border-blue-500 bg-blue-100 border-2 shadow-sm rounded-lg ">
                        <div className="w-12 h-12 flex items-center justify-center">
                            <FcBriefcase className="h-6 w-6" />
                        </div>
                        <div className="flex items-center justify-start w-full">
                            dadaw
                        </div>
                    </div>
                    <div className="flex w-52 h-12 border-blue-500 bg-blue-100 border-2 shadow-sm rounded-lg ">
                        <div className="w-12 h-12 flex items-center justify-center">
                            <FcBriefcase className="h-6 w-6" />
                        </div>
                        <div className="flex items-center justify-start w-full">
                            dadaw
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
