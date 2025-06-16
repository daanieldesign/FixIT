import { Instagram, Facebook } from "lucide-react"
import Link from "next/link"

export function Footer() {
    return (
        <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-cream">
            <div className="flex items-center justify-center">
                <Link href="/public">
                    <img className="h-6" src="/logo.svg" alt="Logo"/>
                </Link>
            </div>
            <p className="text-xs text-gray-600 sm:ml-4">&copy; 2025 FixIT. All rights reserved.</p>

            <div className="flex items-center gap-4 sm:ml-auto">
                <div className="flex items-center gap-3">
                    <a
                        target="_blank"
                        href="https://instagram.com/fixit.cz"
                        className="text-gray-600 hover:text-pink-600 transition-colors"
                    >
                        <Instagram className="h-5 w-5" />
                    </a>
                    <a
                        target="_blank"
                        href="https://facebook.com/fixit.cz"
                        className="text-gray-600 hover:text-blue-900 transition-colors"
                    >
                        <Facebook className="h-5 w-5" />
                    </a>
                </div>
            </div>

            <nav className="flex gap-4 sm:gap-6">
                <a href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
                    Terms of Service
                </a>
                <a href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
                    Privacy Policy
                </a>
                <a href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
                    Warranty Info
                </a>
            </nav>
        </footer>
    )
}
