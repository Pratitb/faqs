import clsx from "clsx"
import Assets from "../utils/assets"
import type { AccordionType } from "../utils/types"

const Accordion = ({ title, content, getActionFn, isOpen }: AccordionType) => {
    return (
        // WRAP
        <div className="w-full py-4 border-b border-gray-100 last:border-b-0" onClick={getActionFn}>
            {/* HEADER */}
            <div className="flex justify-between items-center cursor-pointer">
                <p className="text-title font-semibold leading-5">{title}</p>
                <img src={isOpen ? Assets?.Minus : Assets?.Plus} alt="" />
            </div>
            {/* CONTENT */}
            <div className={clsx('overflow-hidden', isOpen ? 'max-h-40 opacity-1' : 'max-h-0 opacity-0')}>
                <p className="text-context text-sm pt-3 md:py-0">{content}</p>
            </div>
        </div>
    )
}

export default Accordion