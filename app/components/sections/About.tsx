import { Badge } from "@/components/ui/badge"
import { ServiceCard } from "@/components/cards/ServiceCard"
import { Smartphone, Monitor, Laptop } from "lucide-react"

export function About() {
    return (
        <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-cream sticky">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <Badge variant="secondary" className="mb-4">
                        About FixIT
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What We Do</h2>
                    <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        FixIT specializes in comprehensive IT equipment repair services. From smartphones to desktop
                        computers, we diagnose and fix hardware and software issues with precision and care.
                    </p>
                </div>

                <div className="grid max-w-6xl mx-auto gap-8 lg:grid-cols-3">
                    <ServiceCard
                        icon={Smartphone}
                        title="Mobile Devices"
                        description="Screen repairs, battery replacements, water damage recovery, and software troubleshooting for all smartphone brands."
                    />
                    <ServiceCard
                        icon={Laptop}
                        title="Laptops & Tablets"
                        description="Hardware upgrades, keyboard repairs, screen replacements, and performance optimization for portable devices."
                    />
                    <ServiceCard
                        icon={Monitor}
                        title="Desktop Computers"
                        description="Component upgrades, virus removal, data recovery, and complete system builds and repairs."
                    />
                </div>
            </div>
        </section>
    )
}