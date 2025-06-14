import { Badge } from "@/components/ui/badge"
import { ContactCard } from "@/components/cards/ContactCard"
import { Phone, Mail, MapPin } from "lucide-react"

export function Contact() {
    return (
        <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-cream sticky">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <Badge variant="secondary" className="mb-4">
                        Contact Us
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get Your Device Fixed Today</h2>
                    <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Ready to get your device repaired? Contact us for a free diagnostic and quote.
                    </p>
                </div>

                <div className="grid max-w-4xl mx-auto gap-8 lg:grid-cols-3">
                    <ContactCard
                        icon={Phone}
                        title="Call Us"
                        details={[
                            "(555) 123-4567",
                            "Mon-Fri: 9AM-6PM",
                            "Sat: 10AM-4PM"
                        ]}
                    />
                    <ContactCard
                        icon={Mail}
                        title="Email Us"
                        details={[
                            "info@fixit-repair.com",
                            "We respond within 2 hours",
                            "during business hours"
                        ]}
                    />
                    <ContactCard
                        icon={MapPin}
                        title="Visit Us"
                        details={[
                            "123 Tech Street",
                            "Downtown District",
                            "City, State 12345"
                        ]}
                    />
                </div>
            </div>
        </section>
    )
}