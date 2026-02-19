import React from 'react';
import { Download, PlaneTakeoff, GraduationCap, Building2, Smartphone, Landmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StudentGuide = ({withCTA}) => {

    const navigate = useNavigate();

    const roadmap = [
        {
            title: "Before Enrolling",
            icon: <GraduationCap className="text-orange" />,
            steps: ["Pay the CVEC (€100) - Required for university services."]
        },
        {
            title: "After Acceptance",
            icon: <Building2 className="text-orange" />,
            steps: ["Find Housing (CROUS vs Private)", "Get a Housing Guarantor (Visale/Garantme)", "Set up EDF (Electricity)", "Take out Home Insurance"]
        },
        {
            title: "Upon Arrival",
            icon: <PlaneTakeoff className="text-orange" />,
            steps: ["Get a French SIM Card", "Open a Bank Account", "Validate your VLS-TS Visa online", "Register for Free Health Insurance (Ameli)"]
        }
    ];

    return (
        <section className="py-20 bg-gray-50 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold text-black-metal mb-4">International Student Roadmap</h2>
                        <p className="text-gray-600">A complete checklist of your administrative journey in France.</p>
                    </div>
                    {/* DOWNLOAD BUTTON */}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://edusteps2europe.com/uploads/Guide_Administrative_Procedures_International_Students_France.pdf"
                        className="flex items-center gap-2 bg-black-metal text-white px-6 py-3 rounded-xl font-bold hover:bg-orange transition-all shadow-lg"
                    >
                        <Download size={20} />
                        Download PDF Guide
                    </a>
                </div>

                {/* Timeline UI */}
                <div className="space-y-8">
                    {roadmap.map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex gap-6">
                            <div className="hidden sm:flex h-12 w-12 rounded-2xl bg-orange/10 items-center justify-center shrink-0">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <ul className="grid md:grid-cols-2 gap-3">
                                    {item.steps.map((step, i) => (
                                        <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                                            <div className="h-1.5 w-1.5 rounded-full bg-orange" />
                                            {step}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA - Linking back to packages */}
                {withCTA &&
                    <div className="mt-12 bg-orange p-8 rounded-3xl text-white text-center">
                        <h3 className="text-xl font-bold mb-2">Feeling Overwhelmed?</h3>
                        <p className="mb-6 opacity-90">We can handle all these steps for you so you can focus on your studies.</p>
                        <button
                            onClick={() => navigate("/packages")}
                            className="bg-white text-orange px-8 py-3 rounded-xl font-bold hover:scale-105 transition-all"
                        >
                            View Support Packages
                        </button>
                    </div>}
            </div>
        </section>
    );
};

export default StudentGuide;