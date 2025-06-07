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
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <Wrench className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">FixIT</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link href="#team" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Team
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Pricing
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Contact
          </Link>
          <div className="flex items-center gap-2 ml-4 border-l pl-4">
            <Link
              href="https://instagram.com/fixit.cz"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </Link>
            <Link
              href="https://facebook.com/fixit.cz"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                    Professional IT Equipment Repair
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Expert repair services for phones, PCs, laptops, and all your IT equipment. Fast, reliable, and
                    affordable solutions you can trust.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Get Free Quote
                  </Button>
                  <Button variant="outline" size="lg">
                    View Services
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Same-day service</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="h-4 w-4" />
                    <span>90-day warranty</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                  height="400"
                  alt="IT Repair Services"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="mb-4">
                  About FixIT
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What We Do</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  FixIT specializes in comprehensive IT equipment repair services. From smartphones to desktop
                  computers, we diagnose and fix hardware and software issues with precision and care.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="text-center">
                <CardHeader>
                  <Smartphone className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                  <CardTitle>Mobile Devices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Screen repairs, battery replacements, water damage recovery, and software troubleshooting for all
                    smartphone brands.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Laptop className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                  <CardTitle>Laptops & Tablets</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Hardware upgrades, keyboard repairs, screen replacements, and performance optimization for portable
                    devices.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Monitor className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                  <CardTitle>Desktop Computers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Component upgrades, virus removal, data recovery, and complete system builds and repairs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="mb-4">
                  Our Team
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Experts</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our skilled technicians bring years of experience and passion for technology to every repair.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl items-center gap-8 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="text-center">
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    width="200"
                    height="200"
                    alt="Daniel"
                    className="mx-auto rounded-full object-cover mb-4"
                  />
                  <CardTitle className="text-2xl">Daniel</CardTitle>
                  <CardDescription className="text-lg">Co-Founder & Lead Technician</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    With over 8 years of experience in IT repair, Daniel specializes in complex hardware diagnostics and
                    motherboard-level repairs. He holds certifications in mobile device repair and has a passion for
                    bringing dead devices back to life.
                  </p>
                  <div className="flex justify-center gap-2">
                    <Badge variant="outline">Hardware Expert</Badge>
                    <Badge variant="outline">Mobile Specialist</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    width="200"
                    height="200"
                    alt="Jakub"
                    className="mx-auto rounded-full object-cover mb-4"
                  />
                  <CardTitle className="text-2xl">Jakub</CardTitle>
                  <CardDescription className="text-lg">Co-Founder & Software Specialist</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Jakub brings 6 years of software troubleshooting and system optimization expertise to FixIT. He
                    excels in data recovery, virus removal, and performance tuning, ensuring your devices run like new.
                  </p>
                  <div className="flex justify-center gap-2">
                    <Badge variant="outline">Software Expert</Badge>
                    <Badge variant="outline">Data Recovery</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-800">
                  Follow Our Work
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">See Our Repairs in Action</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Follow us on social media to see before & after photos, repair tips, and behind-the-scenes content
                  from Daniel and Jakub!
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-6xl items-start gap-6 py-12 lg:grid-cols-4 lg:gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Instagram className="h-12 w-12 mx-auto text-pink-600 mb-4" />
                  <CardTitle className="text-xl">Instagram</CardTitle>
                  <CardDescription>@fixit.cz</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Daily before & after repair photos, quick tips, and stories from our workshop.
                  </p>
                  <Button variant="outline" className="w-full border-pink-200 hover:bg-pink-50">
                    <Instagram className="h-4 w-4 mr-2" />
                    Follow Us
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Facebook className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                  <CardTitle className="text-xl">Facebook</CardTitle>
                  <CardDescription>FixIT.cz</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
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
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="mb-4">
                  Pricing
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Transparent Pricing</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Fair and competitive prices with no hidden fees. All repairs include a 90-day warranty.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Mobile Devices</CardTitle>
                  <CardDescription>Smartphones & Tablets</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Screen Repair</span>
                      <span className="font-semibold">$80 - $200</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Battery Replacement</span>
                      <span className="font-semibold">$50 - $120</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Water Damage Recovery</span>
                      <span className="font-semibold">$100 - $250</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Software Issues</span>
                      <span className="font-semibold">$40 - $80</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Diagnostic Fee</span>
                      <span className="font-semibold text-green-600">FREE*</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">*Free if repair is completed</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Laptops</CardTitle>
                  <CardDescription>All Laptop Brands</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Screen Replacement</span>
                      <span className="font-semibold">$150 - $400</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Keyboard Repair</span>
                      <span className="font-semibold">$80 - $180</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hard Drive Upgrade</span>
                      <span className="font-semibold">$100 - $300</span>
                    </div>
                    <div className="flex justify-between">
                      <span>RAM Upgrade</span>
                      <span className="font-semibold">$60 - $200</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Virus Removal</span>
                      <span className="font-semibold">$60 - $120</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Desktop PCs</CardTitle>
                  <CardDescription>Custom & Pre-built Systems</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Component Upgrade</span>
                      <span className="font-semibold">$50 - $150</span>
                    </div>
                    <div className="flex justify-between">
                      <span>System Build</span>
                      <span className="font-semibold">$100 - $200</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Data Recovery</span>
                      <span className="font-semibold">$150 - $500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Performance Tune-up</span>
                      <span className="font-semibold">$80 - $150</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Motherboard Repair</span>
                      <span className="font-semibold">$200 - $400</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Prices may vary based on device model and complexity. Contact us for an accurate quote.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Free Estimate
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="mb-4">
                  Contact Us
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get Your Device Fixed Today</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to get your device repaired? Contact us for a free diagnostic and quote.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl items-start gap-8 py-12 lg:grid-cols-3">
              <Card className="text-center">
                <CardHeader>
                  <Phone className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                  <CardTitle>Call Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">(555) 123-4567</p>
                  <p className="text-gray-600">Mon-Fri: 9AM-6PM</p>
                  <p className="text-gray-600">Sat: 10AM-4PM</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Mail className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                  <CardTitle>Email Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">info@fixit-repair.com</p>
                  <p className="text-gray-600">We respond within 2 hours</p>
                  <p className="text-gray-600">during business hours</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <MapPin className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                  <CardTitle>Visit Us</CardTitle>
                </CardHeader>
                <CardContent>
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
          <Wrench className="h-6 w-6 text-blue-600" />
          <span className="text-lg font-bold text-gray-900">FixIT</span>
        </div>
        <p className="text-xs text-gray-600 sm:ml-4">&copy; {new Date().getFullYear()} FixIT. All rights reserved.</p>

        {/* Social Media Links */}
        <div className="flex items-center gap-4 sm:ml-auto">
          <div className="flex items-center gap-3">
            <Link
              href="https://instagram.com/fixit_repairs"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://facebook.com/fixitrepairs"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Warranty Info
          </Link>
        </nav>
      </footer>
    </div>
  )
}
