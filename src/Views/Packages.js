// import React from 'react';
// import { CheckCircle2, MessageCircle, Home, School, Landmark, Briefcase, Languages, Taxi, Info } from 'lucide-react';

// const Packages = () => {
//     const mainPackages = [
//         {
//             name: "Formule Essentiel",
//             price: "250€",
//             description: "Nous vous expliquons les démarches pour chaque procédure administrative.",
//             features: ["Explications détaillées", "Contacts utiles", "Liens administratifs officiels"],
//             color: "border-gray-200"
//         },
//         {
//             name: "Formule Confort",
//             price: "500€",
//             description: "Nous vous envoyons les formulaires et restons joignables pour vous guider.",
//             features: ["Tout de la formule Essentiel", "Envoi des formulaires prêts à remplir", "Support réactif par email/téléphone"],
//             color: "border-gray-200"
//         },
//         {
//             name: "Esprit Tranquille",
//             price: "750€",
//             popular: true,
//             description: "Notre formule la plus complète pour un accompagnement total.",
//             features: ["Accompagnement administratif total", "Analyse personnalisée des coûts", "Assistance WhatsApp 7J/7 offerte"],
//             color: "border-orange shadow-xl scale-105"
//         }
//     ];

//     const specializedServices = [
//         {
//             title: "Chercher une Université",
//             icon: <School className="text-orange" size={32} />,
//             tiers: [
//                 { label: "Essentiel", price: "50€", detail: "Liste de 5 écoles + liens + conditions" },
//                 { label: "Confort", price: "70€", detail: "Synthèse comparative complète" },
//                 { label: "Premium", price: "100€", detail: "Stratégie d'admission + dossier type" }
//             ]
//         },
//         {
//             title: "Logement Étudiant",
//             icon: <Home className="text-orange" size={32} />,
//             tiers: [
//                 { label: "Essentiel", price: "50€", detail: "5 à 8 résidences + conseils candidature" },
//                 { label: "Premium", price: "100€", detail: "Prise de contact + assistance RDV + suivi" }
//             ]
//         },
//         {
//             title: "Agence Bancaire",
//             icon: <Landmark className="text-orange" size={32} />,
//             tiers: [
//                 { label: "Essentiel", price: "70€", detail: "Procédure détaillée + check-list documents" },
//                 { label: "Premium", price: "150€", detail: "Support bilingue + suivi jusqu'à ouverture" }
//             ]
//         }
//     ];

//     return (
//         <div className="bg-white min-h-screen pt-32 pb-20 px-6">
//             <div className="max-w-7xl mx-auto">

//                 {/* --- Section 1: Intro --- */}
//                 <div className="text-center mb-16">
//                     <h1 className="text-4xl md:text-5xl font-bold text-black-metal mb-6">Nos Formules d'Accompagnement</h1>
//                     <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//                         Gérer votre arrivée en Europe peut être complexe. Avec <span className="text-orange font-bold">Edusteps2Europe</span>, 
//                         bénéficiez d'une assistance sérieuse pour sécuriser vos démarches administratives.
//                     </p>
//                     <div className="mt-8 inline-block bg-orange/10 text-orange px-6 py-2 rounded-full font-semibold">
//                         Tarif 1ère année • 100€ par année supplémentaire
//                     </div>
//                 </div>

//                 {/* --- Section 2: Main Pricing Cards --- */}
//                 <div className="grid md:grid-cols-3 gap-8 mb-24">
//                     {mainPackages.map((pkg, idx) => (
//                         <div key={idx} className={`relative p-8 rounded-3xl border-2 flex flex-col ${pkg.color} bg-white transition-all`}>
//                             {pkg.popular && (
//                                 <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest">
//                                     RECOMMANDÉ
//                                 </span>
//                             )}
//                             <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
//                             <div className="text-4xl font-black text-orange mb-4">{pkg.price}</div>
//                             <p className="text-gray-500 mb-8 h-12">{pkg.description}</p>
//                             <ul className="space-y-4 mb-8 flex-grow">
//                                 {pkg.features.map((feat, i) => (
//                                     <li key={i} className="flex items-start gap-3 text-sm">
//                                         <CheckCircle2 className="text-orange shrink-0" size={18} />
//                                         <span>{feat}</span>
//                                     </li>
//                                 ))}
//                             </ul>
//                             <button className={`w-full py-4 rounded-xl font-bold transition-all ${pkg.popular ? 'bg-orange text-white hover:bg-orange/90' : 'border-2 border-black-metal text-black-metal hover:bg-black-metal hover:text-white'}`}>
//                                 Choisir cette formule
//                             </button>
//                         </div>
//                     ))}
//                 </div>

//                 {/* --- Section 3: Specialized Support --- */}
//                 <h2 className="text-3xl font-bold text-center mb-12">Accompagnements Spécifiques</h2>
//                 <div className="grid md:grid-cols-3 gap-8 mb-24">
//                     {specializedServices.map((service, idx) => (
//                         <div key={idx} className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
//                             <div className="mb-6">{service.icon}</div>
//                             <h3 className="text-xl font-bold mb-6">{service.title}</h3>
//                             <div className="space-y-6">
//                                 {service.tiers.map((t, i) => (
//                                     <div key={i} className="border-b border-gray-200 pb-4 last:border-0">
//                                         <div className="flex justify-between items-center mb-1">
//                                             <span className="font-bold text-orange text-sm uppercase">{t.label}</span>
//                                             <span className="font-black">{t.price}</span>
//                                         </div>
//                                         <p className="text-xs text-gray-500 leading-relaxed">{t.detail}</p>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* --- Section 4: A La Carte & Misc --- */}
//                 <div className="grid md:grid-cols-2 gap-12 mb-24">
//                     <div className="bg-black-metal text-white p-10 rounded-3xl">
//                         <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
//                             <Briefcase className="text-orange" /> Services à la Carte
//                         </h3>
//                         <div className="space-y-6">
//                             <div className="flex justify-between items-center border-b border-white/10 pb-4">
//                                 <div>
//                                     <p className="font-bold">Job Étudiant</p>
//                                     <p className="text-sm text-gray-400">CV + Lettre de motivation + Conseils</p>
//                                 </div>
//                                 <span className="text-orange font-bold">100€</span>
//                             </div>
//                             <div className="flex justify-between items-center border-b border-white/10 pb-4">
//                                 <div>
//                                     <p className="font-bold">Traduction de documents</p>
//                                     <p className="text-sm text-gray-400">Accompagnement traducteur assermenté</p>
//                                 </div>
//                                 <span className="text-orange font-bold">10% commission</span>
//                             </div>
//                             <div className="flex justify-between items-center">
//                                 <div>
//                                     <p className="font-bold">Taxi (Aéroport)</p>
//                                     <p className="text-sm text-gray-400">Réservation et accueil</p>
//                                 </div>
//                                 <span className="text-orange font-bold">min 10€</span>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="bg-orange p-10 rounded-3xl text-white">
//                         <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
//                             <MessageCircle /> Assistance WhatsApp 7J/7
//                         </h3>
//                         <p className="mb-6 opacity-90">
//                             Besoin d'une réponse rapide pour Doctolib, Ameli ou une question urgente ? 
//                             Bénéficiez de notre support direct.
//                         </p>
//                         <p className="font-bold text-lg border-t border-white/20 pt-6">
//                             Offert avec la formule "Esprit Tranquille"
//                         </p>
//                         <p className="mt-2 text-sm opacity-80">
//                             Tarif à la question pour les autres demandes isolées.
//                         </p>
//                     </div>
//                 </div>

//                 {/* --- Section 5: Essential Info (The FAQ/Disclaimer) --- */}
//                 <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200">
//                     <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
//                         <Info className="text-orange" /> Informations Importantes
//                     </h3>
//                     <div className="grid md:grid-cols-2 gap-8 text-sm leading-relaxed text-gray-600">
//                         <div className="space-y-4">
//                             <p>• À votre arrivée en France, vous devez payer la <strong>CEVEC</strong>, le <strong>CROUS</strong> et l'assurance responsabilité civile.</p>
//                             <p>• <strong>Mineurs :</strong> Aucune démarche spécifique pour obtenir le visa étudiant.</p>
//                             <p>• <strong>Majeurs :</strong> Vous avez 2 mois pour valider votre visa valant titre de séjour.</p>
//                         </div>
//                         <div className="space-y-4">
//                             <p>• <strong>Sécurité Sociale :</strong> Inscription obligatoire sur <em>etranger.ameli.fr</em> pour obtenir vos remboursements santé et vos droits CAF.</p>
//                             <p className="italic bg-white p-4 rounded-xl border border-gray-100">
//                                 Note : Edusteps2Europe décline toute responsabilité en cas de refus administratif (ex: refus de visa).
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Packages;


import React from 'react';
import { CheckCircle2, MessageCircle, Home, School, Landmark, Briefcase, Languages, Taxi, Info } from 'lucide-react';
import { chatOnWhatsapp } from '../utils/utils';
import StudentGuide from '../components/views/packages/Guide';

const Packages = () => {
    const mainPackages = [
        {
            name: "Essential Package",
            price: "250€",
            description: "We guide you through the requirements for every administrative procedure.",
            features: [
                "Step-by-step explanations",
                "Useful contact list",
                "Official administrative links"
            ],
            color: "border-gray-200",
            message: "I want to subscribe to the Essential Package"
        },
        {
            name: "Comfort Package",
            price: "500€",
            description: "We send you the required forms and remain available to help you complete them.",
            features: [
                "Everything in Essential",
                "Ready-to-fill form delivery",
                "Dedicated support via email/phone"
            ],
            color: "border-gray-200",
            message: "I want to subscribe to the Comfort Package"
        },
        {
            name: "Peace of Mind",
            price: "750€",
            popular: true,
            description: "Our most comprehensive formula for total administrative support.",
            features: [
                "Full administrative management",
                "Personalized city cost analysis",
                "FREE 24/7 WhatsApp assistance"
            ],
            color: "border-orange shadow-xl scale-105",
            message: "I want to subscribe to the Peace of Mind Package"
        }
    ];

    const specializedServices = [
        {
            title: "University Search",
            icon: <School className="text-orange" size={32} />,
            tiers: [
                { label: "Essential", price: "50€", detail: "List of 5 schools + links + admission requirements" },
                { label: "Comfort", price: "70€", detail: "Comparative synthesis (Program, costs, reputation)" },
                { label: "Premium", price: "100€", detail: "Admission strategy + application calendar + sample files" }
            ]
        },
        {
            title: "Student Housing",
            icon: <Home className="text-orange" size={32} />,
            tiers: [
                { label: "Essential", price: "50€", detail: "5 to 8 residences + links + application tips" },
                { label: "Premium", price: "100€", detail: "Direct contact with options + viewing assistance + follow-up" }
            ]
        },
        {
            title: "Banking Setup",
            icon: <Landmark className="text-orange" size={32} />,
            tiers: [
                { label: "Essential", price: "70€", detail: "List of suitable banks + detailed account opening guide" },
                { label: "Premium", price: "150€", detail: "Direct bank contact + trilingual support (FR/ENG/AR) + full follow-up" }
            ]
        }
    ];

    return (
        <div className="bg-white min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* --- Section 1: Intro --- */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-black-metal mb-6">Our Support Packages</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Managing your arrival in Europe can be overwhelming. With <span className="text-orange font-bold">EduSteps2Europe</span>,
                        receive high-quality, professional support to secure your administrative journey.
                    </p>
                    <div className="mt-8 inline-block bg-orange/10 text-orange px-6 py-2 rounded-full font-semibold">
                        First Year Rate • 100€ per additional year
                    </div>
                </div>

                {/* --- Section 2: Main Pricing Cards --- */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {mainPackages.map((pkg, idx) => (
                        <div
                            onClick={() => chatOnWhatsapp(pkg.message)}
                            key={idx} className={`relative p-8 rounded-3xl border-2 flex flex-col ${pkg.color} bg-white transition-all`}>
                            {pkg.popular && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest">
                                    RECOMMENDED
                                </span>
                            )}
                            <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                            <div className="text-4xl font-black text-orange mb-4">{pkg.price}</div>
                            <p className="text-gray-500 mb-8 h-12">{pkg.description}</p>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {pkg.features.map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm">
                                        <CheckCircle2 className="text-orange shrink-0" size={18} />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-4 rounded-xl font-bold transition-all ${pkg.popular ? 'bg-orange text-white hover:bg-orange/90' : 'border-2 border-black-metal text-black-metal hover:bg-black-metal hover:text-white'}`}>
                                Choose this plan
                            </button>
                        </div>
                    ))}
                </div>

                {/* --- Section 3: Specialized Support --- */}
                <h2 className="text-3xl font-bold text-center mb-12">Specialized Services</h2>
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {specializedServices.map((service, idx) => (
                        <div key={idx} className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                            <div className="mb-6">{service.icon}</div>
                            <h3 className="text-xl font-bold mb-6">{service.title}</h3>
                            <div className="space-y-6">
                                {service.tiers.map((t, i) => (
                                    <div key={i} className="border-b border-gray-200 pb-4 last:border-0">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-bold text-orange text-sm uppercase">{t.label}</span>
                                            <span className="font-black">{t.price}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 leading-relaxed">{t.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- Section 4: A La Carte & WhatsApp CTA --- */}
                <div className="grid md:grid-cols-2 gap-12 mb-24">

                    {/* A La Carte Services */}
                    <div className="bg-black-metal text-white p-10 rounded-3xl flex flex-col">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Briefcase className="text-orange" /> A La Carte Services
                        </h3>
                        <div className="space-y-6 flex-grow">
                            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                <div>
                                    <p className="font-bold">Student Job Search</p>
                                    <p className="text-sm text-gray-400">CV + Cover Letter + Search Strategy</p>
                                </div>
                                <span className="text-orange font-bold">100€</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                <div>
                                    <p className="font-bold">Document Translation</p>
                                    <p className="text-sm text-gray-400">Certified translation coordination</p>
                                </div>
                                <span className="text-orange font-bold">10% fee</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-bold">Airport Pickup (Taxi)</p>
                                    <p className="text-sm text-gray-400">Booking and greeting service</p>
                                </div>
                                <span className="text-orange font-bold">min 10€</span>
                            </div>
                        </div>
                        <a
                            onClick={() => chatOnWhatsapp("I want to inquire for service")}
                            className="cursor-pointer mt-8 border border-white/20 text-center py-4 rounded-xl font-bold hover:bg-white hover:text-black-metal transition-all"
                        >
                            Inquire for Service
                        </a>
                    </div>

                    {/* WhatsApp CTA Card */}
                    <div className="bg-orange p-10 rounded-3xl text-white flex flex-col">
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <MessageCircle /> 24/7 WhatsApp Support
                            </h3>
                            <p className="mb-6 text-lg leading-relaxed">
                                Need a quick answer for <strong>Doctolib</strong>, <strong>Ameli</strong>, or an urgent administrative question?
                                Get direct, instant access to our expert team.
                            </p>
                            <div className="bg-white/10 p-4 rounded-2xl mb-6">
                                <p className="font-bold text-lg">
                                    FREE with "Peace of Mind" Package
                                </p>
                                <p className="text-sm opacity-90">
                                    Custom rates apply for individual questions on other plans.
                                </p>
                            </div>
                        </div>

                        {/* --- THE CTA BUTTON --- */}
                        <a
                            onClick={() => chatOnWhatsapp()}
                            className="cursor-pointer mt-4 bg-white text-orange text-center py-5 rounded-2xl font-black text-lg shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                        >
                            <MessageCircle size={24} fill="currentColor" className="text-orange" />
                            Chat with an Expert Now
                        </a>
                    </div>
                </div>

                {/* --- Section 5: Essential Info (The FAQ/Disclaimer) --- */}
                <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <Info className="text-orange" /> Essential Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8 text-sm leading-relaxed text-gray-600">
                        <div className="space-y-4">
                            <p>• Upon arrival in France, you must pay the <strong>CVEC</strong>, register with the <strong>CROUS</strong>, and take out civil liability insurance.</p>
                            <p>• <strong>Minors:</strong> No specific administrative steps are required for the student visa.</p>
                            <p>• <strong>Adults:</strong> You have 2 months to validate your VLS-TS visa upon arrival.</p>
                        </div>
                        <div className="space-y-4">
                            <p>• <strong>Social Security:</strong> Registration on <em>etranger.ameli.fr</em> is mandatory for healthcare reimbursements and CAF housing benefits.</p>
                            <p className="italic bg-white p-4 rounded-xl border border-gray-100">
                                Disclaimer: EduSteps2Europe is not responsible for administrative rejections (e.g., visa refusal).
                            </p>
                        </div>
                    </div>
                </div>

                <StudentGuide/>

            </div>
        </div>
    );
};

export default Packages;