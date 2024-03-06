'use client'
import Image from "next/image";
import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import test1 from '@/assets/4.webp'
import test2 from '@/assets/5.webp'
import test3 from '@/assets/6.webp'
import test4 from '@/assets/7.webp'
import test5 from '@/assets/8.webp'
import test6 from '@/assets/9.webp'
import { AspectRatio } from "@/components/ui/aspect-ratio";


export default function VilleDiLusso() {
    return (
        <section className='py-4 px-2 lg:px-48 w-full'>
            <div className='py-6'>
                <div className="p-8 lg:p-40 bg-gold">
                    <div className='flex gap-4 lg:items-center items-center'>
                        <div
                            className='before:content-[] h-10 w-0 lg:h-0 lg:w-28 border-2 lg:border border-secondary'></div>
                        <h2 className='font-serif text-2xl lg:text-7xl text-secondary'>Ville di Lusso</h2>
                    </div>

                    <div className="text-lg lg:text-xl text-secondary leading-normal my-12">
                        <p>
                            Le <strong>ville di lusso</strong> sono immobili capaci di stregare chiunque cerchi una nuova casa dove trascorrere momenti felici e accumulare ricordi indimenticabili. Inoltre si configurano come <strong>asset di pregio</strong>che hanno un indiscusso valore a livello internazionale.
                        </p>
                        <br></br>
                        <p>
                            Negli anni sono venuti a configurarsi come sicuri investimenti immobiliari che non incontrano svalutazione e che consentono di trarre, anche nel lungo termine, il <strong>massimo vantaggio</strong> dall&#39;investimento prodotto.
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
                                    <AspectRatio ratio={16 / 9}>
                                        <Image src={test1} alt="Test 1" width={1080} height={450} />
                                    </AspectRatio>
                                </CarouselItem>
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-1/2">
                                    <AspectRatio ratio={16 / 9}>
                                        <Image src={test2} alt="Test 2" width={1080} height={450} />
                                    </AspectRatio>
                                </CarouselItem>
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-1/2">
                                    <AspectRatio ratio={16 / 9}>
                                        <Image src={test3} alt="Test 3" width={1080} height={450} />
                                    </AspectRatio>
                                </CarouselItem>

                                <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-1/2">
                                    <AspectRatio ratio={16 / 9}>
                                        <Image src={test4} alt="Test 4" width={1080} height={450} />
                                    </AspectRatio>
                                </CarouselItem>
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-1/2">
                                    <AspectRatio ratio={16 / 9}>
                                        <Image src={test5} alt="Test 5" width={1080} height={450} />
                                    </AspectRatio>
                                </CarouselItem>
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-1/2">
                                    <AspectRatio ratio={16 / 9}>
                                        <Image src={test6} alt="Test 6" width={1080} height={450} />
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