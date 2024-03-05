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
                className='lg:pl-48 px-0 flex flex-col lg:grid lg:grid-cols-2 relative gap-4 lg:gap-0 text-md h-full lg:mt-1 mb-8 box-border lg:justify-center lg:items-stretch'>

                {/* Hero Text **/}
                <div className='py-2 px-4 lg:px-0 flex flex-col gap-4 lg:gap-y-8 lg:gap-x-0 lg:z-10 lg:col-span-1 self-stretch'>

                    <div className="mb-0">
                        <p className='tracking-wide text-xl lg:text-2xl lg:leading-9'>
                            Vuoi distinguere i tuoi immobili <br></br>di lusso nel mercato elitario?
                        </p>
                    </div>
                    <div className='lg:light:bg-white'>
                        <h1 className='text-6xl lg:text-8xl font-serif lg:leading-[80%]'>
                            <span className='font-semibold'>Luliex</span><br></br> lusso is a state <br></br>of mind
                        </h1>
                    </div>

                    <div className="max-w-2xl">
                        <p className="text-xl ">
                            Offriamo ad agenzie altamente selezionate la possibilità di mettersi in contatto con una clientela di alto profilo.
                        </p>
                    </div>
                    <div className='w-full mt-4'>
                    <Button asChild className={buttonVariants({ variant: "outline" }) + " py-2 px-4 lg:px-12 border border-primary rounded-none text-primary lg:w-auto uppercase text-sm lg:text-lg"}>
                        <Link href="#form">Candida la tua Agenzia</Link>
                    </Button>
                    </div>
                </div>

                {/* Hero Image **/}
                <div className='lg:relative right-0 top-0 lg:-z-10'>
                    <Image
                        src={HeroImage} alt="hero img" height={744} width={1055}
                        className='object-cover object-center w-full h-full' />
                </div>
            </div>
        </>
    )
}