import { Button } from "@/components/ui/button"
import { Clock, Shield } from "lucide-react"

export function Hero() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-cream sticky">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                                Professional IT Equipment Repair
                            </h1>
                            <p className="max-w-[600px] text-gray-600 md:text-xl leading-relaxed">
                                Expert repair services for phones, PCs, laptops, and all your IT equipment. Fast, reliable, and
                                affordable solutions you can trust.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 min-[400px]:flex-row">
                            <Button size="lg" className="bg-logoGreen hover:bg-reddy">
                                Get Free Quote
                            </Button>
                            <Button variant="outline" size="lg">
                                View Services
                            </Button>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>Same-day service</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Shield className="h-4 w-4" />
                                <span>90-day warranty</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-full max-w-[600px] h-[400px] bg-gray-200 rounded-xl flex items-center justify-center">
                            <span className="text-gray-500">IT Repair Services Image</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}