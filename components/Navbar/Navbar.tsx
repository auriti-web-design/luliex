'use client'

import * as React from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

import { useTheme } from 'next-themes'

import {Button } from "@/components/ui/button"

import Logo from '@/assets/logo-luliex.svg'
import LogoW from '@/assets/logo-luliex-w.svg'

import Image from "next/image";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export default function Navbar() {

    const { setTheme } = useTheme()
    return (
        <nav className="w-full flex justify-between lg:px-48 px-4 py-8 items-center">
            <div className="flex lg:text-3xl text-2xl font-bold text-primary light:hidden">
                <span className="dark:hidden">
                    <Image src={Logo} width={250} height={50} alt=""/>
                </span>
            </div>
            <div className="flex">

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <HiOutlineSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 light:bg-red-500 dark:text-white" />
                            <HiOutlineMoon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:text-white" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}