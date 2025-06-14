import { Badge } from "@/components/ui/badge"
import { TeamMemberCard } from "@/components/cards/TeamMemberCard"
const teamMembers = [
    {
        name: "Daniel",
        role: "Co-Founder & Lead Technician",
        description: "With over 8 years of experience in IT repair, Daniel specializes in complex hardware diagnostics and motherboard-level repairs. He holds certifications in mobile device repair and has a passion for bringing dead devices back to life.",
        skills: ["Hardware Expert", "Mobile Specialist"]
    },
    {
        name: "Jakub",
        role: "Co-Founder & Software Specialist",
        description: "Jakub brings 6 years of software troubleshooting and system optimization expertise to FixIT. He excels in data recovery, virus removal, and performance tuning, ensuring your devices run like new.",
        skills: ["Software Expert", "Data Recovery"]
    }
]

export function Team() {
    return (
        <section id="team" className="w-full py-16 md:py-24 lg:py-32 bg-cream sticky">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <Badge variant="secondary" className="mb-4">
                        Our Team
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Experts</h2>
                    <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Our skilled technicians bring years of experience and passion for technology to every repair.
                    </p>
                </div>

                <div className="grid max-w-5xl mx-auto gap-8 lg:grid-cols-2">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard
                            key={index}
                            name={member.name}
                            role={member.role}
                            description={member.description}
                            skills={member.skills}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}