import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"

interface PricingService {
    name: string
    price: string
    isSpecial?: boolean
}

interface PricingCardProps {
    title: string
    description: string
    services: PricingService[]
}

export function PricingCard({ title, description, services }: PricingCardProps) {
    return (
        <Card className="h-full">
            <CardHeader className="pb-6">
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-3">
                    {services.map((service, index) => (
                        <div key={index} className={`flex justify-between items-center ${
                            service.isSpecial ? 'border-t pt-3' : ''
                        }`}>
                            <span>{service.name}</span>
                            <span className={`font-semibold ${
                                service.isSpecial ? 'text-green-600' : ''
                            }`}>
                {service.price}
              </span>
                        </div>
                    ))}
                </div>
                {services.some(s => s.isSpecial) && (
                    <p className="text-xs text-gray-500">*Free if repair is completed</p>
                )}
            </CardContent>
        </Card>
    )
}