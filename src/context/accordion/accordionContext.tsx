import { createContext, useContext } from "react";
import type { AccordionContextType } from "../../utils/types";

export const AccordionContext = createContext<AccordionContextType | undefined>(undefined)

export const useAccordion = () => {
    const context = useContext(AccordionContext)
    if (!context) throw new Error('Please check Accordion Context')
    return context
}