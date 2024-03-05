'use client'
import Image from "next/image";
import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import test1 from '@/assets/223.webp'
import test2 from '@/assets/375.webp'
import test3 from '@/assets/2793.webp'
import test4 from '@/assets/chalet.webp'
import test5 from '@/assets/dimore_storiche.webp'
import { AspectRatio } from "@/components/ui/aspect-ratio";


export default function Dimore() {
    return (
        <section className='py-4 px-2 lg:px-48 w-full'>
            <div className='py-6'>
                <div className="p-8 lg:p-40 bg-[#D4B882]">
                    <div className='flex gap-4 lg:items-center items-center'>
                        <div
                            className='before:content-[] h-10 w-0 lg:h-0 lg:w-28 border-2 lg:border border-primary'></div>
                        <h2 className='font-serif text-2xl lg:text-5xl text-secondary'>Resort</h2>
                    </div>

                    <div className="text-lg lg:text-xl text-secondary leading-normal my-12">
                        <p>
                            Investire nelle dimore storiche vuol dire possedere delle statuarie proprietà di grandissimo pregio sia dal punto di vista storico che economico, che conservano il fascino di essere state abitate dalle famiglie più nobili o essere state addirittura residenze papali.
                        </p>
                        <br></br>
                        <p>
                            Le dimore storiche si configurano come un ottimo investimento sia se le si acquista come abitazione principale che come asset che diverrà centro e polo storico-culturale di servizi nel campo dell&#39;ospitalità.
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
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}