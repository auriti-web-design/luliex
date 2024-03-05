/**
 * Image grid component that displays a grid of image tiles
 * with captions. Uses CSS grid layout and relative/absolute
 * positioning to overlay captions on images.
 *
 * Displays 6 images in responsive grid columns.
 */
import Image from "next/image";
import VilleDiLusso from "@/assets/ville_di_lusso.webp";
import Hotel from "@/assets/hotel.jpg";
import Cantine from "@/assets/cantine_vitivinicole.webp";
import Resort from "@/assets/2793.webp";
import Dimore from "@/assets/dimore_storiche.webp";
import Chalet from "@/assets/chalet.webp";
import Bg from '@/assets/bg-element.svg'
import * as React from "react";

export default function ImgGrid() {
    return (
        <section className='py-4 px-2 lg:px-48 w-full bg-contain bg-no-repeat bg-right overflow-x-hidden'>
            <div className="relative">
                <Image src={Bg} alt="" layout="fill" objectFit="cover"/> 
            </div>
            <div className='py-6 lg:py-24 relative z-10'>
                    <div className='flex gap-4 lg:items-center lg:mt-6 lg:mb-24'>
                        <div
                            className='before:content-[] h-16 w-0 lg:h-0 lg:w-28 border-2 lg:border border-gold'></div>
                        <h2 className='font-serif text-2xl lg:text-7xl'>Immobili</h2>
                    </div>
                <div className='flex gap-4 lg:items-stretch relative z-10 top-0'>
                    <div className='lg:grid lg:grid-cols-12 lg:gap-8 w-full flex flex-col gap-6 items-stretch'>
                        {/* col-3 */}
                        <div className='lg:col-span-3 w-full relative self-auto'>
                            <div className='flex flex-col  relative -z-10 h-full'>
                                <Image
                                    src={VilleDiLusso}
                                    alt="hero img"
                                    height={120}
                                    width={1280}
                                    className='object-cover w-full h-full' />
                            </div>
                            <div className='lg:container absolute z-10 top-0 h-full lg:py-8'>
                                <h3 className='font-serif text-4xl m-4 lg:m-0 font-normal text-white'>
                                    Ville di Lusso
                                </h3>
                            </div>
                        </div>
                        {/* col-7 */}
                        <div className='lg:col-span-9 h-[650px] relative'>
                            <div className='flex flex-col  relative -z-10 h-full'>
                                <Image
                                    src={Hotel}
                                    alt="hero img"
                                    height={2000}
                                    width={2000}
                                    className='object-cover object-fille w-full h-full'
                                />
                            </div>
                            <div
                                className='lg:container absolute z-10 top-0 h-full lg:py-8'>
                                <h3
                                    className='font-serif text-4xl m-4 lg:m-0 font-normal text-white'>
                                    Hotel
                                </h3>
                            </div>
                        </div>

                        {/* col-7 */}
                        <div className='lg:col-span-9 h-[650px] relative'>
                            <div className='flex flex-col  relative -z-10 h-full'>
                                <Image
                                    src={Cantine} alt="hero img"
                                    height={2000} width={2000}
                                    className='object-cover object-fille w-full h-full' />
                            </div>
                            <div className='lg:container absolute z-10 top-0 h-full lg:py-8'>
                                <h3
                                    className='font-serif text-4xl m-4 lg:m-0 font-normal text-white w-1/2'
                                >
                                    Catine Vitivinicole
                                </h3>
                            </div>
                        </div>
                        {/* col-3 */}
                        <div className='lg:col-span-3 w-full relative self-auto'>
                            <div className='flex flex-col  relative -z-10 h-full'>
                                <Image
                                    src={Resort}
                                    alt="hero img"
                                    height={3000}
                                    width={3000}
                                    className='object-cover w-full h-full' />
                            </div>
                            <div className='lg:container absolute z-10 top-0 h-full lg:py-8'>
                                <h3 className='font-serif text-4xl m-4 lg:m-0 font-normal text-white'>Resort</h3>
                            </div>
                        </div>
                        {/* col-3 */}
                        <div className='lg:col-span-3 w-full relative self-auto'>
                            <div className='flex flex-col  relative -z-10 h-full'>
                                <Image
                                    src={Dimore}
                                    alt="hero img"
                                    height={120}
                                    width={1280}
                                    className='object-cover w-full h-full' />
                            </div>
                            <div className='lg:container absolute z-10 top-0 h-full lg:py-8'>
                                <h3 className='font-serif text-4xl m-4 lg:m-0 font-normal text-white w-1/2'>Dimore storiche</h3>
                            </div>
                        </div>

                        {/* col-7 */}
                        <div className='lg:col-span-9 h-[650px] relative'>
                            <div className='flex flex-col  relative -z-10 h-full'>
                                <Image
                                    src={Chalet} alt="hero img"
                                    height={1250} width={1500}
                                    className='object-cover object-fille w-full h-full' />
                            </div>
                            <div className='lg:container absolute z-10 top-0 h-full lg:py-8'>
                                <h3 className='font-serif text-4xl m-4 lg:m-0 font-normal text-white'>Chalet</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}