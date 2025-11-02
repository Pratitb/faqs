import Assets from '../utils/assets'
import type { FaqHeaderType } from '../utils/types'

const FaqHeader = ({ title }: FaqHeaderType) => {
    return (
        <>
            {/* FAQ HEADER */}
            <div className='flex items-center gap-4'>
                <img src={Assets?.Star} alt="" />
                <p className='text-title font-bold text-3xl md:text-4xl lg:text-5xl'>{title}</p>
            </div>
        </>
    )
}

export default FaqHeader