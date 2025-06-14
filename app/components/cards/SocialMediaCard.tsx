import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LucideIcon } from "lucide-react"

interface SocialMediaCardProps {
    icon: LucideIcon
    title: string
    description: string
    content: string
    link: string
    iconColor: string
    buttonClassName: string
}

export function SocialMediaCard({
                                    icon: Icon,
                                    title,
                                    description,
                                    content,
                                    link,
                                    iconColor,
                                    buttonClassName
                                }: SocialMediaCardProps) {
    return (
        <Card className="text-center hover:shadow-lg transition-shadow h-full">
            <CardHeader className="pb-6">
                <div className="flex justify-center mb-4">
                    <Icon className={`h-12 w-12 ${iconColor}`} />
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">{content}</p>
                <a href={link}>
                    <Button variant="outline" className={`w-full ${buttonClassName}`}>
                        <Icon className="h-4 w-4 mr-2" />
                        Follow Us
                    </Button>
                </a>
            </CardContent>
        </Card>
    )
}