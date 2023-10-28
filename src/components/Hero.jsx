import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ProfileImage from "../assets/profile-image.png"

const Landing = ({ setSelectedPage }) => {

  const info = [
    { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "10" },
    { text: "Companies Work", count: "03" },
  ];

  return (
    <section id="home" className="md:flex mt-20 py-20 md:justify-between md:mx-20 lg:mx-20 md:items-center gap-16 lg:px-20 2xl:px-72 py-5">
    {/* IMAGE SECTION */}
    <div className="md:ml-auto md:order-2">
      <img alt="profile" className="md:w-[500px] " src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
    </div>
  
    {/* MAIN TEXT */}
    <div className="z-30 font-Inter  basis-2/5 mt-12 md:mt-0 ">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="text-6xl font-playfair z-10 text-center md:text-start">
          Juma {""} Tsuma 
          <span className="xs:relative xs:text-deep-blue xs:font-semibold z-10 text-xl
            before:absolute before:-left-[25px] before:-top-[10px] before:z-[-1]"
          >
            SOFTWARE ENGINEER
          </span>
        </p>
  
        <p className="mt-5 mb-3 text-sm text-center md:text-start">
          Welcome to my professional portfolio, showcasing my expertise in software engineering, Android app development, and UI/UX design. I’m passionate about creating innovative and user-friendly mobile applications that cater to your needs.
        </p>
      </motion.div>
  
      {/* CALL TO ACTIONS */}
      {/* <motion.div
        className="flex mt-2 justify-center md:justify-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <AnchorLink
          className="bg-[#2270e2]  text-white rounded-sm py-3 px-7 font-semibold
            hover:bg-blue hover:text-white transition duration-500"
          onClick={() => setSelectedPage("contact")}
          href="#contact"
        >
          Contact Me
        </AnchorLink>
        <AnchorLink
          className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
          onClick={() => setSelectedPage("contact")}
          href="#contact"
        >
          <div className="bg-white text-[#2270e2] hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
            Let's talk.
          </div>
        </AnchorLink>
      </motion.div> */}
  
      <motion.div
        className="flex mt-3 justify-center md:justify-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >

<div className="flex  items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-[#2270e2]">
                      {content.count}
                      <span className="text-[#2270e2]">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
        {/* <SocialMediaIcons /> */}

        
      </motion.div>

      <a href="./src/assets/Code_a_program.pdf mt-5" download>
      <button className="bg-[#2270e2] hidden md:block mt-5  text-white px-4 py-2 rounded-md">
       Download CV
      </button>            
        </a>

    </div>
  </section>
  
  );
};

export default Landing;
