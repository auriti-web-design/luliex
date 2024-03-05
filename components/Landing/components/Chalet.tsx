'use client'
import Image from "next/image";
import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay"
import test1 from '@/assets/223.webp'
import test2 from '@/assets/375.webp'
import test3 from '@/assets/2793.webp'
import test4 from '@/assets/chalet.webp'
import test5 from '@/assets/dimore_storiche.webp'
import { AspectRatio } from "@/components/ui/aspect-ratio";


export default function Chalet() {
    return (
        <section className='py-4 px-2 lg:px-48 w-full'>
            <div className='py-6'>
                <div className="p-8 lg:p-40">
                    <div className='flex gap-4 lg:items-center items-center'>
                        <div
                            className='before:content-[] h-10 w-0 lg:h-0 lg:w-28 border-2 lg:border border-gold'></div>
                        <h2 className='font-serif text-2xl lg:text-7xl text-primary'>Chalet</h2>
                    </div>

                    <div className="text-lg lg:text-xl text-primary leading-normal my-12">
                        <p>
                            Il flusso turistico delle <strong className="text-gold">località di montagna</strong> è in costante crescita e le più rinomate stazioni sciistiche sono espressione di uno sport che attira sempre maggiori presenze e con dei costi in crescita. </p>
                        <br></br>

                        <p>
                            Per queste ragioni il Trentino Alto Adige, la Valle d&#39;Aosta, il Veneto e il Piemonte sono mete ambite e i tipici chalet e baite di montagna si configurano come un <strong className="text-gold">asset di sicuro successo</strong> per un redditizio investimento che non si limita al solo periodo invernale.
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