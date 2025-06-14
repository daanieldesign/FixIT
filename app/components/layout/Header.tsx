import { Instagram, Facebook } from "lucide-react"
import Link from "next/link"

export function Header() {
    return (
        <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-cream sticky top-0 z-50">
            <div className="flex items-center justify-center">
                <Link href="page.tsx">
                    <img className="h-8" src="/logo.svg" alt="Logo"/>
                </Link>
            </div>
            <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
                <a href="#about" className="text-l font-medium hover:text-reddy transition-colors">
                    About
                </a>
                <a href="#team" className="text-l font-medium hover:text-reddy transition-colors">
                    Team
                </a>
                <a href="#pricing" className="text-l font-medium hover:text-reddy transition-colors">
                    Pricing
                </a>
                <a href="#contact" className="text-l font-medium hover:text-reddy transition-colors">
                    Contact
                </a>
                <div className="flex items-center gap-2 ml-4 border-l pl-4">
                    <a
                        target="_blank"
                        href="https://instagram.com/fixit.cz"
                        className="text-gray-600 hover:text-pink-600 transition-colors"
                    >
                        <Instagram className="h-4 w-4" />
                    </a>
                    <a
                        target="_blank"
                        href="https://facebook.com/fixit.cz"
                        className="text-gray-600 hover:text-blue-900 transition-colors"
                    >
                        <Facebook className="h-4 w-4" />
                    </a>
                </div>
            </nav>
        </header>
    )
}