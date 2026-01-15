import React from 'react'
import { Card, InfoCard } from '../../cards/Contact'
import { Building2, Mail, MapPin, Phone } from 'lucide-react'
import mail from "../../../assets/images/icons8-email-48.png"
import location from "../../../assets/images/icons8-location-40.png"
import phone from "../../../assets/images/icons8-whatsapp-30.png"

export default function ContactSection() {
    return (
        <div className='w-full flex flex-col items-center'>
            <div className='font-poppins font-medium text-center w-2/3  text-[24px] md:text-[32px]'>
                Whether you're a parent with questions or a student ready to get started, our team is just a message away
            </div>
            <section className="py-12 lg:py-16">
                <div className="container mx-auto px-4 md:px-10 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        <InfoCard
                            icon={phone}
                            title="Call Us"
                            value="+1 (555) 123-4567"
                        />
                        <InfoCard
                            icon={mail}
                            title="Email Us"
                            value="info@studyabroad.com"
                        />
                        <InfoCard
                            icon={location}
                            title="Visit Us"
                            value="123 Education Street, Suite 100, New York, NY 10001"
                        />
                    </div>
                </div>
            </section>
            {/* Bank Details Section */}
            <section className="py-12 lg:py-16">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <Card variant="highlighted" className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Building2 size={32} className="text-orange" />
                                <h2 className="font-['Playfair_Display'] text-2xl lg:text-3xl  ">
                                    Payment Information
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <p className="text-sm text-black-metal/60 mb-1">Bank Name</p>
                                    <p className="">Global Education Bank</p>
                                </div>

                                <div>
                                    <p className="text-sm text-black-metal/60 mb-1">Account Name</p>
                                    <p className=" ">StudyAbroad Services Ltd.</p>
                                </div>

                                <div>
                                    <p className="text-sm text-black-metal/60 mb-1">IBAN</p>
                                    <p className="  font-mono text-sm">GB29 NWBK 6016 1331 9268 19</p>
                                </div>

                                <div>
                                    <p className="text-sm text-black-metal/60 mb-1">SWIFT/BIC</p>
                                    <p className="  font-mono text-sm">NWBKGB2L</p>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-grey-goose/60">
                                <p className="text-sm text-black-metal/70">
                                    <strong>Important:</strong> Please include your student reference number in the payment description.
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
