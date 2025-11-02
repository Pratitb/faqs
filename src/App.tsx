import { useEffect, useState } from 'react'
import './App.css'
import Accordion from './components/accordion'
import FaqHeader from './components/faqHeader'
import { useAccordion } from './context/accordion/accordionContext'
import Assets from './utils/assets'
import { AccordionData } from './utils/data'
import type { AccordionDataType } from './utils/types'

const App = () => {
  const { updateAccordionIndex, accordionIndex } = useAccordion()
  const [bgImage, setBgImage] = useState<string>(Assets?.BgPatternMob);

  useEffect(() => {
    const updateBg = () => {
      if (window.innerWidth < 768) {
        setBgImage('/src/assets/background-pattern-mobile.svg');
      } else {
        setBgImage('/src/assets/background-pattern-desktop.svg');
      }
    };

    updateBg();
    window.addEventListener('resize', updateBg);
    return () => window.removeEventListener('resize', updateBg);
  }, []);

  console.log('Assets:', Assets);
  console.log('bgImage:', bgImage);

  const handleAccordion = (index: number) => {
    updateAccordionIndex(index)
  }

  return (
    // MAIN
    <div className='min-h-screen'>
      {/* HEADER */}
      <div className="min-h-[25vh] bg-no-repeat bg-cover bg-center md:min-h-[30vh]" style={{ backgroundImage: `url(${bgImage})` }}></div>
      {/* FAQ BOX */}
      <div className='bg-white shadow-md rounded-2xl mx-4 -my-20 p-6 md:p-12 md:max-w-[700px] md:mx-auto'>
        <FaqHeader title='FAQs' />
        {/* ACCORDION BOX */}
        <div className='flex flex-col mt-6 max-h-[60vh] overflow-auto'>
          {AccordionData?.map((accordion: AccordionDataType, index: number) => {
            return (
              <Accordion key={index} title={accordion?.title} content={accordion?.content} getActionFn={() => handleAccordion(index)} isOpen={index === accordionIndex} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
