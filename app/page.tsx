import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Smartphone,
  Monitor,
  Laptop,
  Wrench,
  Clock,
  Shield,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { InstagramFeed } from "@/components/instagram-feed"


export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-cream sticky top-0 z-50">
        <div className="flex items-center justify-center">
        <a href="page.tsx">
        <img className="h-8" src="/logo.svg" alt="Logo"/>
        </a>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <a href="#about" className="text-l font-medium hover:text-reddy transition-colors">
            About
          </a>
          <a href="#team" className="text-l font-medium hover:text-reddy transition-colors">
            Team
          </a>
          <a href="#pricing" className="text-l font-medium hover:text-reddy transition-colors">
            Pricing
          </a>
          <a href="#contact" className="text-l font-medium hover:text-reddy transition-colors">
            Contact
          </a>
          <div className="flex items-center gap-2 ml-4 border-l pl-4">
            <a
              href="https://instagram.com/fixit.cz"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com/fixit.cz"
              className="text-gray-600 hover:text-reddy transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-cream sticky">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                    Professional IT Equipment Repair
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl leading-relaxed">
                    Expert repair services for phones, PCs, laptops, and all your IT equipment. Fast, reliable, and
                    affordable solutions you can trust.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button size="lg" className="bg-logoGreen hover:bg-blue-700">
                    Get Free Quote
                  </Button>
                  <Button variant="outline" size="lg">
                    View Services
                  </Button>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Same-day service</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span>90-day warranty</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-[600px] h-[400px] bg-gray-200 rounded-xl flex items-center justify-center">
                  <span className="text-gray-500">IT Repair Services Image</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
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
              <Card className="text-center h-full">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <Smartphone className="h-12 w-12 text-reddy" />
                  </div>
                  <CardTitle className="text-xl">Mobile Devices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Screen repairs, battery replacements, water damage recovery, and software troubleshooting for all
                    smartphone brands.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center h-full">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <Laptop className="h-12 w-12 text-reddy" />
                  </div>
                  <CardTitle className="text-xl">Laptops & Tablets</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Hardware upgrades, keyboard repairs, screen replacements, and performance optimization for portable
                    devices.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center h-full">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <Monitor className="h-12 w-12 text-reddy" />
                  </div>
                  <CardTitle className="text-xl">Desktop Computers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Component upgrades, virus removal, data recovery, and complete system builds and repairs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
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
              <Card className="text-center h-full">
                <CardHeader className="pb-6">
                  <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-500 font-semibold">Daniel</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl">Daniel</CardTitle>
                  <CardDescription className="text-lg">Co-Founder & Lead Technician</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    With over 8 years of experience in IT repair, Daniel specializes in complex hardware diagnostics and
                    motherboard-level repairs. He holds certifications in mobile device repair and has a passion for
                    bringing dead devices back to life.
                  </p>
                  <div className="flex justify-center gap-2 flex-wrap">
                    <Badge variant="outline">Hardware Expert</Badge>
                    <Badge variant="outline">Mobile Specialist</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="text-center h-full">
                <CardHeader className="pb-6">
                  <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-500 font-semibold">Jakub</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl">Jakub</CardTitle>
                  <CardDescription className="text-lg">Co-Founder & Software Specialist</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Jakub brings 6 years of software troubleshooting and system optimization expertise to FixIT. He
                    excels in data recovery, virus removal, and performance tuning, ensuring your devices run like new.
                  </p>
                  <div className="flex justify-center gap-2 flex-wrap">
                    <Badge variant="outline">Software Expert</Badge>
                    <Badge variant="outline">Data Recovery</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
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
              <Card className="text-center hover:shadow-lg transition-shadow h-full">
                <CardHeader className="pb-6">
                  <div className="flex justify-center mb-4">
                    <Instagram className="h-12 w-12 text-pink-600" />
                  </div>
                  <CardTitle className="text-xl">Instagram</CardTitle>
                  <CardDescription>@fixit.cz</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Daily before & after repair photos, quick tips, and stories from our workshop.
                  </p>
                  <Button variant="outline" className="w-full border-pink-200 hover:bg-pink-50">
                    <Instagram className="h-4 w-4 mr-2" />
                    Follow Us
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow h-full">
                <CardHeader className="pb-6">
                  <div className="flex justify-center mb-4">
                    <Facebook className="h-12 w-12 text-reddy" />
                  </div>
                  <CardTitle className="text-xl">Facebook</CardTitle>
                  <CardDescription>FixIT.cz</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Customer testimonials, repair updates, and community discussions about tech issues.
                  </p>
                  <Button variant="outline" className="w-full border-blue-200 hover:bg-blue-50">
                    <Facebook className="h-4 w-4 mr-2" />
                    Like Page
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Live Instagram Feed */}
            <div className="mx-auto max-w-6xl mt-12">
              <h3 className="text-2xl font-bold text-center mb-8">Live from Our Workshop</h3>
              <InstagramFeed />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                Pricing
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Transparent Pricing</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Fair and competitive prices with no hidden fees. All repairs include a 90-day warranty.
              </p>
            </div>
            
            <div className="grid max-w-6xl mx-auto gap-8 lg:grid-cols-3">
              <Card className="h-full">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl">Mobile Devices</CardTitle>
                  <CardDescription>Smartphones & Tablets</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Screen Repair</span>
                      <span className="font-semibold">$80 - $200</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Battery Replacement</span>
                      <span className="font-semibold">$50 - $120</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Water Damage Recovery</span>
                      <span className="font-semibold">$100 - $250</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Software Issues</span>
                      <span className="font-semibold">$40 - $80</span>
                    </div>
                    <div className="flex justify-between items-center border-t pt-3">
                      <span>Diagnostic Fee</span>
                      <span className="font-semibold text-green-600">FREE*</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">*Free if repair is completed</p>
                </CardContent>
              </Card>
              
              <Card className="h-full">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl">Laptops</CardTitle>
                  <CardDescription>All Laptop Brands</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Screen Replacement</span>
                      <span className="font-semibold">$150 - $400</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Keyboard Repair</span>
                      <span className="font-semibold">$80 - $180</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Hard Drive Upgrade</span>
                      <span className="font-semibold">$100 - $300</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>RAM Upgrade</span>
                      <span className="font-semibold">$60 - $200</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Virus Removal</span>
                      <span className="font-semibold">$60 - $120</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="h-full">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl">Desktop PCs</CardTitle>
                  <CardDescription>Custom & Pre-built Systems</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Component Upgrade</span>
                      <span className="font-semibold">$50 - $150</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>System Build</span>
                      <span className="font-semibold">$100 - $200</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Data Recovery</span>
                      <span className="font-semibold">$150 - $500</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Performance Tune-up</span>
                      <span className="font-semibold">$80 - $150</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Motherboard Repair</span>
                      <span className="font-semibold">$200 - $400</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Prices may vary based on device model and complexity. Contact us for an accurate quote.
              </p>
              <Button size="lg" className="bg-reddy hover:bg-blue-700">
                Get Free Estimate
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
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
              <Card className="text-center h-full">
                <CardHeader className="pb-6">
                  <div className="flex justify-center mb-4">
                    <Phone className="h-8 w-8 text-reddy" />
                  </div>
                  <CardTitle>Call Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-lg font-semibold">(555) 123-4567</p>
                  <p className="text-gray-600">Mon-Fri: 9AM-6PM</p>
                  <p className="text-gray-600">Sat: 10AM-4PM</p>
                </CardContent>
              </Card>
              
              <Card className="text-center h-full">
                <CardHeader className="pb-6">
                  <div className="flex justify-center mb-4">
                    <Mail className="h-8 w-8 text-reddy" />
                  </div>
                  <CardTitle>Email Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-lg font-semibold">info@fixit-repair.com</p>
                  <p className="text-gray-600">We respond within 2 hours</p>
                  <p className="text-gray-600">during business hours</p>
                </CardContent>
              </Card>
              
              <Card className="text-center h-full">
                <CardHeader className="pb-6">
                  <div className="flex justify-center mb-4">
                    <MapPin className="h-8 w-8 text-reddy" />
                  </div>
                  <CardTitle>Visit Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-lg font-semibold">123 Tech Street</p>
                  <p className="text-gray-600">Downtown District</p>
                  <p className="text-gray-600">City, State 12345</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <div className="flex items-center gap-2">
          <Wrench className="h-6 w-6 text-reddy" />
          <span className="text-lg font-bold text-gray-900">FixIT</span>
        </div>
        <p className="text-xs text-gray-600 sm:ml-4">&copy; 2025 FixIT. All rights reserved.</p>

        {/* Social Media Links */}
        <div className="flex items-center gap-4 sm:ml-auto">
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/fixit_repairs"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com/fixitrepairs"
              className="text-gray-600 hover:text-reddy transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        <nav className="flex gap-4 sm:gap-6">
          <a href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Terms of Service
          </a>
          <a href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Privacy Policy
          </a>
          <a href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Warranty Info
          </a>
        </nav>
      </footer>
    </div>
  )
}
