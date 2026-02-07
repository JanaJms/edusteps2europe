import React from 'react'
import { Building2 } from 'lucide-react'
import mail from "../../../assets/images/icons8-email-48.png"
import location from "../../../assets/images/icons8-location-40.png"
import phone from "../../../assets/images/icons8-whatsapp-30.png"
// Assuming these are your custom card components
import { Card, InfoCard } from '../../cards/Contact'
import { chatOnWhatsapp, openLocation, openMail } from '../../../utils/utils'

export default function ContactSection() {
    return (
        <div className='w-full flex flex-col items-center py-10'>

            {/* Header Text */}
            <div className='font-poppins font-medium text-center px-6 w-full max-w-4xl text-[20px] md:text-[28px] lg:text-[32px] leading-snug'>
                Whether you're a parent with questions or a student ready to get started, our team is just a message away
            </div>

            {/* Info Cards Section */}
            <section className="w-full py-10 lg:py-16">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                        <InfoCard
                            className='cursor-pointer'
                            onClick={chatOnWhatsapp}
                            icon={phone}
                            title="Call Us"
                            value="+33 07 80 75 27 58"
                        />
                        <InfoCard
                            onClick={openMail}
                            className='cursor-pointer'
                            icon={mail}
                            title="Email Us"
                            value="contact@edusteps2europe.com"
                        />
                        <div className="sm:col-span-2 md:col-span-1">
                            <InfoCard
                                onClick={openLocation}
                                className='cursor-pointer'
                                icon={location}
                                title="Visit Us"
                                value="60 Rue François 1er, 75008 Paris, France"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Bank Details Section */}
            <section className="w-full py-8 lg:py-12">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <Card variant="highlighted" className="p-6 md:p-10 rounded-2xl shadow-xl">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-orange/10 rounded-lg">
                                    <Building2 size={32} className="text-orange" />
                                </div>
                                <h2 className="font-playfair text-2xl lg:text-3xl font-bold">
                                    Payment Information
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                                <DetailItem label="Bank Name" value="Global Education Bank" />
                                <DetailItem label="Account Name" value="StudyAbroad Services Ltd." />
                                <DetailItem label="IBAN" value="GB29 NWBK 6016 1331 9268 19" isMono />
                                <DetailItem label="SWIFT/BIC" value="NWBKGB2L" isMono />
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                    <strong className="text-black-metal">Important:</strong> Please include your student reference number in the payment description.
                                    For security purposes, always verify payment details by contacting us directly before making any transfers.
                                    We will never ask for payment through unofficial channels.
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}

/**
 * Sub-component for individual bank details to keep the grid clean
 */
function DetailItem({ label, value, isMono = false, onClick }) {
    return (
        <div onClick={onClick} className="flex flex-col cursor-pointer">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold">{label}</p>
            <p className={`text-[15px] md:text-base text-black-metal break-all ${isMono ? "font-mono bg-gray-50 p-1 rounded" : "font-medium"}`}>
                {value}
            </p>
        </div>
    )
}