import React from 'react'
import { useTranslation } from 'react-i18next'; // 1. Import hook
import unionImg from '../../../assets/images/Union.png'

export default function DownloadGuide() {
    const { t } = useTranslation(); // 2. Initialize hook

    return (
        <div className='pl-5 lg:pl-20 lg:pr-0 flex items-center justify-between h-screen lg:min-h-screen min-h-max flex-col lg:flex-row '>
            <div className=' min-h-[300px] h-[75%] flex items-center lg:w-1/3 gap-4 lg:gap-x-10'>
                <div className='bg-blue w-4 h-full shrink-0' />
                <div className=' pr-5 h-full flex flex-col justify-center gap-y-4 md:gap-y-10'>
                    <h1 className='font-playfair font-semibold text-[22px] md:text-[30px] lg:text-[44px] text-wrap'>
                        {t('download_guide.title')}
                    </h1>
                    <p className='text-wrap font-poppins font-medium text-[14px] md:text-[20px] lg:leading-10'>
                        {t('download_guide.description')}
                    </p>
                </div>
            </div>
            <div className='self-end lg:overflow-hidden'>
                <img src={unionImg} alt={t('download_guide.img_alt')} />
            </div>
        </div>
    )
}