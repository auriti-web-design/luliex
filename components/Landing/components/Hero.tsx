/**
 * Hero component that renders a hero section with text and an image.
 * Includes responsive styling for mobile vs desktop.
 */
/**
 * Hero component that renders the hero section.
 * Includes hero text and hero image.
 */

'use client'
import Image from "next/image";
import HeroImage from "@/assets/interior-exterior-design-luxury-pool-villa-house-home-feature-terrace-sun-bed.webp";
import * as React from "react";
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link";


export default function Hero() {
    return (
        <>
            <div
                className='lg:pl-48 px-0 flex flex-col lg:grid lg:grid-cols-7 relative gap-4 lg:gap-0 text-md h-full lg:mt-1 mb-8 box-border lg:justify-center lg:items-stretch'>

                {/* Hero Text **/}
                <div className='py-2 px-4 lg:px-0 flex flex-col gap-4 lg:gap-y-8 lg:gap-x-0 lg:z-10 lg:col-span-3 self-stretch'>

                    <div className="mb-0">
                        <p className='tracking-wide text-xl lg:text-2xl lg:leading-9'>
                            Dai visibilità ai tuoi immobili di lusso nella nostra esclusiva piattaforma
                        </p>
                    </div>
                    <div className='bg-white dark:bg-[#09090B] relative z-30 w-[850px] py-6'>
                        <h1 className='text-6xl lg:text-[9rem] font-serif lg:leading-[85%]'>
                            <span className='font-semibold'>Lusso</span> is <br></br>a state <br></br>of mind
                        </h1>
                    </div>

                    <div className="max-w-2xl">
                        <p className="text-xl ">
                            Offriamo ad agenzie altamente selezionate la possibilità di mettersi in contatto con una clientela di alto profilo.
                        </p>
                    </div>
                    <div className='w-full mt-4'>
                    <Button asChild className={buttonVariants({ variant: "outline" }) + " p-6 lg:px-12 border bg-gold border-gold rounded-none text-primary lg:w-auto uppercase text-sm lg:text-lg"}>
                        <Link href="#form">Candida la tua agenzia</Link>
                    </Button>
                    </div>
                </div>

                {/* Hero Image **/}
                <div className='lg:relative right-0 top-0 lg:-z-10 col-span-4'>
                    <Image
                        src={HeroImage} alt="hero img" height={744} width={1055}
                        className='object-cover object-center w-full h-full' />
                </div>
            </div>
        </>
    )
}