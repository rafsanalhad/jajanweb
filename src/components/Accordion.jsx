import React, { useState, useRef } from "react";
import {motion, useInView} from 'framer-motion'

const Accordion = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {once: true});
  const delay= [1, 1.5];
  return (
    <motion.section initial={{opacity: 0, y: -50}} animate={inView ? {opacity: 1, y: 0} : ''} ref={ref} transition={{duration: 1}} className="relative lg:px-48 md:px-10 sm:px-10 px-10 z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <motion.span initial={{opacity: 0, y: -50}} animate={inView ? {opacity: 1, y: 0} : ''} ref={ref} transition={{duration: 1}} className="mb-2 text-[#0597FA] block font-semibold text-primary lg:text-[22px] md:text-[20px] sm:text-[16px] text-[16px]">
                FAQ
              </motion.span>
              <motion.h2 initial={{opacity: 0, scale: 0.5}} animate={inView ? {opacity: 1, scale: 1} : ''} ref={ref} transition={{duration: 1}} className="mb-4 font-bold text-dark dark:text-white lg:text-[48px] md:text-[36px] sm:text-[26px] text-[26px]">
                Any Questions? <span className="text-[#0597FA]">Look Here</span>
              </motion.h2>
              <motion.p initial={{opacity: 0, scale: 0.5}} animate={inView ? {opacity: 1, scale: 1} : ''} ref={ref} transition={{duration: 1}} className="text-[16px] text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </motion.p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <motion.div className="w-full px-4 lg:w-1/2" initial={{opacity: 0, y: -50}} animate={inView ? {opacity: 1, y: 0} : ''} ref={ref} transition={{duration: 1, delay: delay[0]}}>
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
          </motion.div>
          <motion.div className="w-full px-4 lg:w-1/2" initial={{opacity: 0, y: -50}} animate={inView ? {opacity: 1, y: 0} : ''} ref={ref} transition={{duration: 1, delay: delay[1]}}>
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
          </motion.div>
        </div>
      </div>

      
    </motion.section>
  );
};

export default Accordion;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div className="mb-8 w-full rounded-lg bg-white p-4  shadow-lg sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 lg:text-lg md:text-lg sm:text-[15px] text-[15px] font-semibold text-dark dark:text-white">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 lg:text-base md:text-base sm:text-[14px] text-[14px] leading-relaxed text-body-color dark:text-dark-6">
          {text}
        </p>
      </div>
    </div>
  );
};
