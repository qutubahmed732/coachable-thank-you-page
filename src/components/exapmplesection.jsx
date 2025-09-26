import React from 'react'
import roboticHand from "../assets/desktop/robotic-hand-third-section.png";
import smallRoboticHand from "../assets/mobile/small-image-robotic-hand.png";
import SVG from "../assets/desktop/Section5_Dots.svg";
import { Lightbulb, Funnel, FileText, BarChart } from "lucide-react";

import idea from "../assets/desktop/idea.png";
import funnel from "../assets/desktop/funnel.png"
import right from "../assets/desktop/right.png";
import content from "../assets/desktop/content.png";
import stats from "../assets/desktop/stats.png";

function Exapmplesection() {
    return (
        // <section className="bg-teal-900 text-white py-10 rounded-lg">
        //     <div className="max-w-4xl mx-auto text-center">
        //         <h2 className="text-xl font-semibold mb-8">
        //             Those 10 days took us from:
        //         </h2>

        //         <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-7 md:grid-rows-1 items-center justify-items-center">

        //             <div className="flex flex-col items-center pt-5">
        //                 <img src={idea} width={100} alt="" />
        //                 <p className="mt-2 font-medium">IDEA</p>
        //             </div>


        //             <span className="w-20 rotate-90 md:rotate-0"><img src={right} alt="" /></span>


        //             <div className="flex flex-col items-center pt-5">
        //                 <img src={funnel} width={100} alt="" />
        //                 <p className="mt-2 font-medium">FUNNEL</p>
        //             </div>


        //             <span className="w-20"><img src={right} alt="" /></span>


        //             <div className="flex flex-col items-center pt-5">
        //                 <img src={content} width={100} alt="" />
        //                 <p className="mt-2 font-medium">CONTENT</p>
        //             </div>


        //             <span className="w-20"><img src={right} alt="" /></span>


        //             <div className="flex flex-col items-center pt-5">
        //                 <img src={stats} width={100} alt="" />
        //                 <p className="mt-2 font-medium">FIRST SALES</p>
        //             </div>
        //         </div>

        //         <p className="mt-6 text-gray-200">
        //             And we've broken them down step-by-step so you can do the same.
        //         </p>
        //     </div>
        // </section>

        <section className="bg-teal-900 text-white py-10 rounded-lg">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-xl font-semibold mb-8">
                    Those 10 days took us from:
                </h2>

                {/* Responsive Grid */}
                <div className="grid grid-cols-3 grid-rows-3 md:grid-cols-7 md:grid-rows-1 place-items-stretch items-center justify-items-center gap-4">

                    {/* Step 1 */}
                    <div className="col-start-1 col-end-1 flex flex-col items-center">
                        <img src={idea} width={100} alt="idea" />
                        <p className="mt-2 font-medium">IDEA</p>
                    </div>

                    {/* Arrow 1 */}
                    <span className="col-start-2 col-end-2 w-12 md:w-20 rotate-0 flex justify-center">
                        <img src={right} alt="arrow" />
                    </span>

                    {/* Step 2 */}
                    <div className="col-start-3 col-end-4 flex flex-col items-center">
                        <img src={funnel} width={100} alt="funnel" />
                        <p className="mt-2 font-medium">FUNNEL</p>
                    </div>

                    {/* Arrow 2 (mobile mai neeche aana chahiye, desktop mai inline) */}
                    <span className="col-start-3 col-end-4 w-12 md:w-20 rotate-90 md:rotate-0 flex justify-center">
                        <img src={right} alt="arrow" />
                    </span>

                    {/* Step 3 (mobile mai niche right side pe) */}
                    <div className="col-start-3 col-end-4 row-start-3 row-end-4 flex flex-col items-center">
                        <img src={content} width={100} alt="content" />
                        <p className="mt-2 font-medium">CONTENT</p>
                    </div>

                    {/* Arrow 3 (mobile mai left side pe ulta arrow, desktop mai inline) */}
                    <span className="order-4 md:order-6 w-12 md:w-20 rotate-180 md:rotate-0 flex justify-center">
                        <img src={right} alt="arrow" />
                    </span>

                    {/* Step 4 (mobile mai bottom-left pe, desktop mai end pe) */}
                    <div className="col-start-1 col-end-2 row-start-3 row-end-4 flex flex-col items-center">
                        <img src={stats} width={100} alt="sales" />
                        <p className="mt-2 font-medium">FIRST SALES</p>
                    </div>
                </div>

                <p className="mt-6 text-gray-200">
                    And we've broken them down step-by-step so you can do the same.
                </p>
            </div>
        </section>



    )
}

export default Exapmplesection