'use client'
import Image from "next/image";
import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import test1 from '@/assets/15.webp'
import test2 from '@/assets/16.webp'
import test3 from '@/assets/17.webp'
import test4 from '@/assets/18.webp'
import test5 from '@/assets/19.webp'
import test6 from '@/assets/20.webp'
import { AspectRatio } from "@/components/ui/aspect-ratio";


export default function Resort() {
    return (
        <section className='py-4 px-2 lg:px-48 w-full'>
            <div className='py-6'>
                <div className="p-8 lg:p-40 bg-[#D4B882]">
                    <div className='flex gap-4 lg:items-center items-center'>
                        <div
                            className='before:content-[] h-10 w-0 lg:h-0 lg:w-28 border-2 lg:border border-secondary'></div>
                        <h2 className='font-serif text-2xl lg:text-7xl text-secondary'>Resort</h2>
                    </div>

                    <div className="text-lg lg:text-xl text-secondary leading-normal my-12">
                        <p>
                            Gli investimenti nei <strong>resort</strong> possono configurarsi come un&#39;entusiasmante opportunità per gli investitori immobiliari di operare in un grande settore con un <strong>eccellente potenziale</strong> di guadagno e per gli investitori immobiliari affermati diventano una possibilità concreta di diversificare il proprio portafoglio nel settore dei servizi.
                        </p>
                        <br></br>
                        <p>
                            I resort sono luoghi unici in cui è possibile unire il soggiorno a <strong>svariati servizi e attività</strong>, come il tennis, il golf, attrazioni, eventi enogastronomici.
                        </p>
                    </div>

                    <div className="py-4">
                        <Carousel
                            plugins={[
                                Autoplay({
                                    delay: 2000,
                                })
                            ]}
                            opts={{
                                align: "start",
                                loop: true
                            }}
                            className="w-full"
                        >
                            <CarouselContent>
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-1/2">
                                    <AspectRatio ratio={1}>
                                        <Image src={test1} alt="Test 1" width={1080} height={1080} />
                                    </AspectRatio>
                                </CarouselItem>
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-1/2">
                                    <AspectRatio ratio={1}>
                                        <Image src={test2} alt="Test 2" width={1080} height={1080}/>
                                    </AspectRatio>
                                </CarouselItem>
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-1/2">
                                    <AspectRatio ratio={1}>
                                        <Image src={test3} alt="Test 3" width={1080} height={1080} />
                                    </AspectRatio>
                                </CarouselItem>

                                <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-1/2">
                                    <AspectRatio ratio={1}>
                                        <Image src={test4} alt="Test 4" width={1080} height={1080} />
                                    </AspectRatio>
                                </CarouselItem>
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-1/2">
                                    <AspectRatio ratio={1}>
                                        <Image src={test5} alt="Test 5" width={1080} height={1080} />
                                    </AspectRatio>
                                </CarouselItem>
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-1/2">
                                    <AspectRatio ratio={1}>
                                        <Image src={test6} alt="Test 5" width={1080} height={1080}/>
                                    </AspectRatio>
                                </CarouselItem>
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}