import ArrowRightCircle from '../../../assets/images/Arrow right-circle.png'
import freeCall from '../../../assets/images/freeCall.png'

export default function BookCall() {
    return (
        <div className='h-full px-10 lg:px-20'>
            <div className='bg-green-cyan rounded-[100px] py-10 px-16 h-full w-full flex items-center justify-between '>
                <div className='w-[55%] flex gap-4 items-end'>
                    <div className='text-[64px] font-playfair font-semibold leading-tight'>
                        Book a Free Call with Our Experts
                    </div>
                    <img src={ArrowRightCircle} className='size-28 shrink-0 font-thin' />
                </div>
                <div>
                    <img src={freeCall} />
                </div>
            </div>
        </div>
    )
}
