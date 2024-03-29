import Image from "next/image";
import FsSimage from "@/assets/375.webp";
import * as React from "react";

export default function MainSection() {
    return (
        <>
            <section className='py-4 px-2 lg:px-48 w-full'>
                <div className='py-6 lg:py-24'>
                    <div className='flex gap-4 lg:items-center'>
                        <div
                            className='before:content-[] h-16 w-0 lg:h-0 lg:w-28 border-2 lg:border border-gold'></div>
                        <h2 className='font-serif text-2xl lg:text-5xl'>
                            Luliex: la più esclusiva selezione di
                            <br
                            className='hidden lg:block'></br>
                            immobili di lusso in italia e nel mondo
                        </h2>
                    </div>
                </div>

                <div className='w-full flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-24'>
                    <div className='lg:col-span-1 w-full'>
                        <Image
                            src={FsSimage}
                            alt="hero img"
                            className='object-cover object-center w-full h-full' />
                    </div>
                    <div className='lg:col-span-1 w-full py-12 lg:py-0'>
                        <div className='flex flex-col lg:container gap-y-8'>

                            <p className='text-normal lg:text-lg'>
                                Luliex è una straordinaria piattaforma che offre, solo ad agenzie altamente qualificate e referenziate, la possibilità di vendere <span className="text-gold">immobili di pregio</span> a end-user e investitori nazionali, internazionali e fondi d&#39;investimento. Gli asset che saranno presenti all&#39;interno del portale sono <span className="text-gold">ville di lusso</span>, <span className="text-gold">hotel</span>, <span className="text-gold">resort</span>, <span className="text-gold">cantine vitivinicole</span> e <span className="text-gold">dimore storiche</span>.

                            </p>

                            <p className='text-normal lg:text-lg'>
                                Il nostro <span className="text-gold">obiettivo</span> è quello di mettere in correlazione le più importanti agenzie operanti nel settore dell&apos;,<span className="text-gold">immobiliare di lusso</span> nel mondo con coloro che cercano una <span className="text-gold">meravigliosa dimora</span> in cui vivere o una <span className="text-gold">proprietà in cui investire</span>, offrendo la possibilità di relazionarsi con personale altamente qualificato e in grado di soddisfare le richieste di tutti gli stakeholders.
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}