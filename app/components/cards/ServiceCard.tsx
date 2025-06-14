import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface ServiceCardProps {
    icon: LucideIcon
    title: string
    description: string
    iconColor?: string
}

export function ServiceCard({ icon: Icon, title, description, iconColor = "text-reddy" }: ServiceCardProps) {
    return (
        <Card className="text-center h-full">
            <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                    <Icon className={`h-12 w-12 ${iconColor}`} />
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-gray-600 leading-relaxed">
                    {description}
                </p>
            </CardContent>
        </Card>
    )
}