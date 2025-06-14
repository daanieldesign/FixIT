import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PricingCard } from "@/components/cards/PricingCard"

const mobilePricing = {
    title: "Mobile Devices",
    description: "Smartphones & Tablets",
    services: [
        { name: "Screen Repair", price: "$80 - $200" },
        { name: "Battery Replacement", price: "$50 - $120" },
        { name: "Water Damage Recovery", price: "$100 - $250" },
        { name: "Software Issues", price: "$40 - $80" },
        { name: "Diagnostic Fee", price: "FREE*", isSpecial: true }
    ]
}

const laptopPricing = {
    title: "Laptops",
    description: "All Laptop Brands",
    services: [
        { name: "Screen Replacement", price: "$150 - $400" },
        { name: "Keyboard Repair", price: "$80 - $180" },
        { name: "Hard Drive Upgrade", price: "$100 - $300" },
        { name: "RAM Upgrade", price: "$60 - $200" },
        { name: "Virus Removal", price: "$60 - $120" }
    ]
}

const desktopPricing = {
    title: "Desktop PCs",
    description: "Custom & Pre-built Systems",
    services: [
        { name: "Component Upgrade", price: "$50 - $150" },
        { name: "System Build", price: "$100 - $200" },
        { name: "Data Recovery", price: "$150 - $500" },
        { name: "Performance Tune-up", price: "$80 - $150" },
        { name: "Motherboard Repair", price: "$200 - $400" }
    ]
}

export function Pricing() {
    return (
        <section id="pricing" className="w-full py-16 md:py-24 lg:py-32 bg-cream sticky">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <Badge variant="secondary" className="mb-4">Pricing</Badge>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Transparent Pricing</h2>
                    <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Fair and competitive prices with no hidden fees. All repairs include a 90-day warranty.
                    </p>
                </div>

                <div className="grid max-w-6xl mx-auto gap-8 lg:grid-cols-3">
                    <PricingCard {...mobilePricing} />
                    <PricingCard {...laptopPricing} />
                    <PricingCard {...desktopPricing} />
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Prices may vary based on device model and complexity. Contact us for an accurate quote.
                    </p>
                    <Button size="lg" className="bg-logoGreen hover:bg-reddy">
                        Get Free Estimate
                    </Button>
                </div>
            </div>
        </section>
    )
}