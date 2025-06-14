import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface ContactCardProps {
    icon: LucideIcon
    title: string
    details: string[]
}

export function ContactCard({ icon: Icon, title, details }: ContactCardProps) {
    return (
        <Card className="text-center h-full">
            <CardHeader className="pb-6">
                <div className="flex justify-center mb-4">
                    <Icon className="h-8 w-8 text-reddy" />
                </div>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                {details.map((detail, index) => (
                    <p key={index} className={index === 0 ? "text-lg font-semibold" : "text-gray-600"}>
                        {detail}
                    </p>
                ))}
            </CardContent>
        </Card>
    )
}