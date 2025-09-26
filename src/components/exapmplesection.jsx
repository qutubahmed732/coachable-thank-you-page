import React from 'react'
import roboticHand from "../assets/desktop/robotic-hand-third-section.png";
import smallRoboticHand from "../assets/mobile/small-image-robotic-hand.png";
import SVG from "../assets/desktop/Section5_Dots.svg";

function Exapmplesection() {
    return (
        <section className="relative w-full h-[100vh] flex flex-col md:flex-row items-center justify-between bg-no-repeat bg-cover bg-center bg-[#F5F5F5] mix-blend-colorburn" style={{ backgroundImage: `url(${SVG})` }}>
            <div className="absolute w-full h-full bottom-0 left-0">
                <img className='w-[calc(614px+5vw)] h-full' src={roboticHand} alt="" />
            </div>

            <div className="absolute w-full h-full right-0 left-auto flex items-center justify-end">
                <div className='absolute max-w-[700px] h-[80%] mr-10 border-3 border-emerald-300'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officia officiis error iste amet laborum magni voluptatibus culpa doloremque, asperiores natus fugiat minima numquam. Laudantium, eaque. Officia distinctio ratione voluptatum.
                Itaque libero ea suscipit praesentium nesciunt enim perferendis maiores commodi quibusdam sequi. Repellat non ex earum. Odit ratione ad earum architecto non itaque, nihil temporibus in consequuntur facilis libero quas?
                Fuga non numquam harum iste voluptatum accusantium labore perspiciatis ratione beatae suscipit, modi sunt? Alias voluptates ad hic earum eos dignissimos? Quas aliquam omnis a debitis beatae ex numquam quia.
                Necessitatibus inventore corporis velit. Ea ut officiis cum quidem atque! Porro animi ex rem, accusantium minus labore, harum minima dolorum distinctio repudiandae quas laboriosam error sapiente provident nam dicta sunt?
                Reprehenderit provident eum, reiciendis magni laborum pariatur? Itaque quod labore, illum eligendi eum hic officia molestiae incidunt fugit animi. Similique illum assumenda quae neque praesentium nam consequatur quam odit modi.
                Eius facere laudantium nesciunt nam nisi! Cumque nostrum accusamus, sint, mollitia iste dicta quae blanditiis aliquid saepe labore porro quaerat repellendus consequuntur possimus modi ipsam nobis quasi, odit quo? Quo.
                Deserunt quae dolorum eveniet, totam recusandae in quidem quod at laudantium ipsa nobis fugit excepturi id dolor ipsam harum sapiente exercitationem aliquid asperiores dicta! Sit, suscipit. Praesentium quibusdam modi itaque?
                Voluptatem totam rerum sunt molestias aliquid, veniam modi error vel repudiandae tenetur quam ut dolor nam eum iusto. Explicabo temporibus, placeat totam voluptatum rem ipsam expedita dolor et non veniam!
                Nemo nulla, nihil earum sunt modi explicabo ipsa, praesentium vero iusto totam incidunt molestiae nisi mollitia minus eius pariatur sequi tempore non. Eum iusto labore necessitatibus maxime! Quo, voluptates necessitatibus!
                Ab optio repellendus quia, dolores dolorum ad quam! Vero, dicta. Blanditiis ullam officiis quidem ducimus consequatur delectus aliquam impedit eligendi, sequi placeat, neque eius, odit doloremque repellat quos cupiditate exercitationem.</div>
            </div>
        </section>
    )
}

export default Exapmplesection