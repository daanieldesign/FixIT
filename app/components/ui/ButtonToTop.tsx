"use client"

import { useState, useEffect } from 'react'
import { Button } from "app/components/ui/button"
import { ArrowUp } from "lucide-react"
import { cn } from "/lib/utils"

export function ButtonToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Button
            variant="secondary"
            size="icon"
            className={cn(
                'fixed bottom-20 right-12 z-50 h-14 w-14 rounded-full shadow-lg transition-all duration-300',
                'bg-logoGreen hover:bg-reddy text-white',
                'opacity-0 translate-y-16',
                isVisible && 'opacity-100 translate-y-0'
            )}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <ArrowUp className="h-5 w-5" />
        </Button>
    )
}