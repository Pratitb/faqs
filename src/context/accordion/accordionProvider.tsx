import { useState } from 'react'
import type { ContextType } from '../../utils/types'
import { AccordionContext } from './accordionContext'

export const AccordionProvider = ({ children }: ContextType) => {
    const [accordionIndex, setAccordionIndex] = useState<number | null>(0)
    const updateAccordionIndex = (index: number) => {
        setAccordionIndex(prev => prev === index ? null : index)
    }
    return (
        <AccordionContext.Provider value={{ accordionIndex, updateAccordionIndex }}>
            {children}
        </AccordionContext.Provider>
    )
}

export default AccordionProvider