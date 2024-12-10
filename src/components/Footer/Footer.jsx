
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";


const Footer = () => {
    return (
        <footer className="py-28 bg-[#f7f7f7]">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
                    {/* first section */}
                    <div className="space-y-4 max-w-[300px]">
                        <h1 className="text-2xl font-bold">The Coding Journey</h1>
                        <p className="text-dark2">
                            TCJ is a platform  dedicated to empowering aspiring developers. From the beginner tutorial to advanced concepts, we provide a compherihensive learning experience designed to help you master coding skills, build projects, and launch your tech career.
                        </p>
                    </div>
                    {/* second section */}
                    <div className="grid grid-cols-2  gap-10">
                        <div className="space-y-4">
                            <h1 className="text-2xl font-bold">Courses</h1>
                            <div className="text-dark2">
                                <ul className="space-y-2 text-md ">
                                    <li className="cursor-pointer
                                     hover:text-secondary duration-200">
                                        Web Development
                                    </li>
                                    <li className="cursor-pointer
                                     hover:text-secondary duration-200">
                                        Software Development
                                    </li>
                                    <li className="cursor-pointer
                                     hover:text-secondary duration-200">
                                        Apps Development
                                    </li>
                                    <li className="cursor-pointer
                                     hover:text-secondary duration-200">
                                        E-Learning
                                    </li>

                                </ul>

                            </div>

                        </div>

                        <div className="space-y-4">
                            <h1 className="text-2xl font-bold">Links</h1>
                            <div className="text-dark2">
                                <ul className="space-y-2 text-md">
                                    <li className="cursor-pointer
                                     hover:text-secondary duration-200">
                                        Home
                                    </li>
                                    <li className="cursor-pointer
                                     hover:text-secondary duration-200">
                                        Service
                                    </li>
                                    <li className="cursor-pointer
                                     hover:text-secondary duration-200">
                                        About
                                    </li>
                                    <li className="cursor-pointer
                                     hover:text-secondary duration-200">
                                        Contact
                                    </li>

                                </ul>

                            </div>

                        </div>

                    </div>
                    {/* third section */}
                    <div className="space-y-4">
                        <h1 className="text-2xl font-bold">Get In Touch</h1>
                        <div className="flex items-center">
                            <input className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2" type="text" placeholder="Enter email" />
                            <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl ">Go</button>
                        </div>
                    </div>

                </div>
            </div>
        </footer>

    )
}

export default Footer
