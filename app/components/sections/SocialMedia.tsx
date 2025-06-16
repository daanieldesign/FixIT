import { Badge } from "@/components/ui/badge"
import { SocialMediaCard } from "@/components/cards/SocialMediaCard"
import { InstagramFeed } from "@/components/instagram-feed"
import { Instagram, Facebook } from "lucide-react"

export function SocialMedia() {
    return (
        
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br bg-mint sticky">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-800">
                        Follow Our Work
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">See Our Repairs in Action</h2>
                    <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Follow us on social media to see before & after photos, repair tips, and behind-the-scenes content
                        from Daniel and Jakub!
                    </p>
                </div>

                <div className="grid max-w-4xl mx-auto gap-8 lg:grid-cols-2">
                    <SocialMediaCard
                        icon={Instagram}
                        title="Instagram"
                        description="@fixit.cz"
                        content="Daily before & after repair photos, quick tips, and stories from our workshop."
                        link="https://instagram.com/fixit.cz"
                        iconColor="text-pink-600"
                        buttonClassName="border-pink-200 hover:bg-pink-50"
                    />
                    <SocialMediaCard
                        icon={Facebook}
                        title="Facebook"
                        description="FixIT.cz"
                        content="Customer testimonials, repair updates, and community discussions about tech issues."
                        link="https://facebook.com/fixit.cz"
                        iconColor="text-blue-900"
                        buttonClassName="border-blue-200 hover:bg-blue-50"
                    />
                </div>

                <div className="mx-auto max-w-6xl mt-12">
                    <h3 className="text-2xl font-bold text-center mb-8">Live from Our Workshop</h3>
                    <InstagramFeed />
                </div>
            </div>
        </section>
    )
}
