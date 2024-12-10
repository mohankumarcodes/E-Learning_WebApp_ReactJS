import Bannerpng from "../../assets/banner.png";
import { motion } from "framer-motion";
import { FadeUp } from "../Hero/Hero";



const Banner2 = () => {
    return (
        <section>
            <div className="container py-14 md:24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0 ">
                <div className="text-center md:text-left sapce-y-4 lg:max-w-[450px]">
                    {/* Banner2 Text */}
                    <div className="flex flex-col justify-center ">
                        <h1 className="text-4xl font-bold !leading-snug">Join Our Community to Start your Journey</h1>
                        <p className="text-dark2">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Recusendae iuseta minima ad ut id  eos accusantium aut, aperiam quis incident! </p>

                        < motion.div variants={FadeUp(0.8)} initial="initial" animate="animate" className="flex justify-center md:justify-start">
                            <button className="primary-btn flex items-center gap-2 group mt-8">Join Now</button>
                        </motion.div>
                    </div>
                </div>



                {/* Banner2 Image */}
                <div className="flex justify-center items-center">
                    <motion.img initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeInOut" }}
                        src={Bannerpng} alt="" className="w-[350px] md:max-w-[450px] object-cover drop-shadow" />
                </div>

            </div>
        </section>

    )
}

export default Banner2
