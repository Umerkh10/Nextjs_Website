"use client"
import { SwordsIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AppFaq = () => {

    const { ref, inView } = useInView({
        triggerOnce: false, 
        threshold: 0.1, 
      });

    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 100,
          });
      }, [inView]);

      

    const [openIndex, setOpenIndex] = useState(null);
    const [sOpen,setIsOpen] = useState(false)

    const questions = [
        { question: 'How to choose the right App Development Company for my business ?', answer: 'To choose the right app development company for your business, consider their experience and expertise in your industry, check their portfolio and client reviews, evaluate their communication and project management skills, ensure they offer post-launch support, and compare their pricing to your budget.' },

        { question: 'What are the key areas for App Development services ?', answer: 'Key areas for app development services include front-end development, which focuses on the user interface and user experience (UI/UX); back-end development, handling server-side logic, databases, and application integration; mobile app development for iOS and Android platforms; and web app development for responsive, browser-based applications. Additionally, these services often cover quality assurance (QA) and testing, deployment, maintenance, and support to ensure apps run smoothly and remain up-to-date with technological advancements.' },

        { question: 'Which is the best platform for App Development ?', answer: 'The best platform for app development depends on your needs. For native apps, iOS (Swift) and Android (Kotlin) are top choices. For cross-platform development, frameworks like Flutter, React Native, and Xamarin offer robust solutions. Flutter is praised for its performance and expressive UI, React Native is popular for its wide community support, and Xamarin is good for C# developers. Consider factors like target audience, development resources, and app complexity when choosing.' },

        { question: 'Why do most of the Application fail to publish in playstore and appstore?',
         answer: 'Most applications fail to publish on the Play Store and App Store due to issues like poor app quality, bugs, inadequate testing, non-compliance with store guidelines, lack of user engagement, and failure to address performance or security concerns. Proper preparation, thorough testing, and adherence to guidelines are crucial for successful app submission.' },

        { question: 'How do you ensure the code quality of Apps while developing ? ', 
        answer: 'To ensure code quality while developing apps, follow these practices: use version control for tracking changes, write clear and maintainable code with proper documentation, implement automated testing for early bug detection, conduct code reviews for peer feedback, and adhere to coding standards and best practices. Regularly refactor code to improve structure and performance.' },

        { question: 'How much does it cost to develop an App ? ',
         answer: 'The cost to develop an app varies widely depending on factors such as complexity, platform, features, and developer rates. Generally, it can range from $5,000 to $500,000 or more. Simple apps might cost $5,000 to $20,000, while more complex ones could range from $50,000 to $200,000 or beyond.' },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
  return (

    <div className='bg-slate-200 dark:bg-transparent pr-6 pl-6 pt-16 pb-10'>
        <div className='text-center text-5xl font-extrabold' data-aos="fade-up" >FAQs</div>
        <div className='pt-4 text-lg font-medium italic text-center' data-aos="fade-down" >Learn more about our App Development Services</div>

        
        <div className='p-10'>

{questions.map((item, index) => (
    <div data-aos="flip-down" className="md:pt-6 pt-8 " ref={ref}  key={index}>
        <div 
            className="cursor-pointer py-6 px-4 rounded-xl md:text-lg  font-medium flex justify-between group bg-gradient-to-r from-purple-700 to-indigo-900 text-white transition ease-in duration-150 delay-100 "
            onClick={() => toggleAccordion(index) }  >
            {item.question}
            <SwordsIcon className='  group-hover:rotate-180 group-hover:stroke-gray-100 transition ease-in duration-200 delay-100 '/>
        </div>
        {openIndex === index && (
            <div className="  py-4 px-4 rounded rounded-br-[10px] rounded-bl-[10px] text-lg bg-gradient-to-r from-purple-700 to-indigo-900 text-white italic ">
                {item.answer}
            </div>
        )}
    </div>
))}
</div>
    </div>
  )
}

export default AppFaq