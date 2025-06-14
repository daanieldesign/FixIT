import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TeamMemberCardProps {
    name: string
    role: string
    description: string
    skills: string[]
}

export function TeamMemberCard({ name, role, description, skills }: TeamMemberCardProps) {
    return (
        <Card className="text-center h-full">
            <CardHeader className="pb-6">
                <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-500 font-semibold">{name}</span>
                    </div>
                </div>
                <CardTitle className="text-2xl">{name}</CardTitle>
                <CardDescription className="text-lg">{role}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                    {description}
                </p>
                <div className="flex justify-center gap-2 flex-wrap">
                    {skills.map((skill, index) => (
                        <Badge key={index} variant="outline">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}