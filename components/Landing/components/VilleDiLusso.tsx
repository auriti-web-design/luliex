'use client'
import Image from "next/image";
import * as React from "react";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay"
import test1 from '@/assets/223.webp'
import test2 from '@/assets/375.webp'
import test3 from '@/assets/2793.webp'
import test4 from '@/assets/chalet.webp'
import test5 from '@/assets/dimore_storiche.webp'
import {AspectRatio} from "@/components/ui/aspect-ratio";


export default function VilleDiLusso() {
    return (
        <section className='py-4 px-2 lg:px-48 w-full'>
            <div className='py-6'>
                <div className="p-8 lg:p-40 bg-accent">
                    <div className='flex gap-4 lg:items-center'>
                        <div
                            className='before:content-[] h-16 w-0 lg:h-0 lg:w-28 border-2 lg:border border-primary'></div>
                        <h2 className='font-serif text-2xl lg:text-5xl'>Ville di Lusso</h2>
                    </div>

                    <div className="text-lg lg:text-xl text-primary leading-normal my-12">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus alias atque blanditiis commodi cumque delectus doloribus dolorum est eum expedita explicabo harum iste itaque iusto nihil nisi nobis numquam, officia perferendis possimus quae quia ratione recusandae rem sequi similique.</p>
                    </div>

                    <div className="p-4">
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
                                <CarouselItem  className="md:basis-1/2 lg:basis-1/3">
                                    <AspectRatio ratio={16 / 9}>
                                        <Image src={test1} alt="Test 1" width={1080} height={450}/>
                                    </AspectRatio>
                                </CarouselItem>
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                    <AspectRatio ratio={16 / 9}>
                                    <Image src={test2} alt="Test 2" width={1080} height={450} />
                                    </AspectRatio>
                                </CarouselItem>
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                    <AspectRatio ratio={16 / 9}>
                                    <Image src={test3} alt="Test 3" width={1080} height={450} />
                                    </AspectRatio>
                                </CarouselItem>

                                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                    <AspectRatio ratio={16 / 9}>
                                    <Image src={test4} alt="Test 4" width={1080} height={450}  />
                                    </AspectRatio>
                                </CarouselItem>
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
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