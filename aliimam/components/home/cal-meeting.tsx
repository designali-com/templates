"use client"

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";


export function CalMeeting() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "designali" });
            cal("ui", { "cssVarsPerTheme": { "light": { "cal-brand": "#00A8FF" }, "dark": { "cal-brand": "#00A8FF" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return (
        <section className="relative border-y-2 border-t-0 border-dotted">
            <div className="mx-auto w-full max-w-6xl border-dotted lg:border-x-2">
                <h1 className="text-md text-center text-primary border-b-2 border-dotted p-4">
                    Book a Meeting
                </h1>
            </div>
            <div className="flex justify-center lg:border-x-2 border-dotted max-w-6xl mx-auto items-center">
            <div className="w-full h-full max-w-4xl mx-auto bg-background p-6 border-dotted lg:border-x-2">
                <Cal namespace="designali"
                    calLink="designali-com/designali"
                    config={{ "layout": "month_view", "useSlotsViewOnSmallScreen": "true" }}
                />
            </div>
            </div>
        </section>
    )


};
