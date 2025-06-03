"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Instagram, Heart, MessageCircle, Share, ExternalLink } from "lucide-react"
import Image from "next/image"

interface InstagramPost {
  id: string
  caption: string
  media_url: string
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"
  timestamp: string
  permalink: string
  like_count: number
  comments_count: number
}

// Mock Instagram posts - In a real app, this would come from Instagram API
const mockInstagramPosts: InstagramPost[] = [
  {
    id: "1",
    caption:
      "Another successful iPhone 14 Pro screen replacement! 📱✨ Customer said it looks better than new! #PhoneRepair #FixIT #iPhone14Pro #ScreenRepair #TechRepair",
    media_url: "/placeholder.svg?height=400&width=400",
    media_type: "IMAGE",
    timestamp: "2024-01-15T10:30:00Z",
    permalink: "https://instagram.com/p/example1",
    like_count: 127,
    comments_count: 8,
  },
  {
    id: "2",
    caption:
      "Water damage recovery in progress! 💧➡️💻 This MacBook took a coffee bath but we're bringing it back to life. Never give up on your devices! #WaterDamage #MacBookRepair #DataRecovery",
    media_url: "/placeholder.svg?height=400&width=400",
    media_type: "IMAGE",
    timestamp: "2024-01-14T15:45:00Z",
    permalink: "https://instagram.com/p/example2",
    like_count: 89,
    comments_count: 12,
  },
  {
    id: "3",
    caption:
      "Before & After: Gaming PC upgrade! 🎮⚡ Added 32GB RAM and RTX 4070 - this beast is ready for anything! Swipe to see the transformation ➡️ #PCUpgrade #Gaming #TechUpgrade",
    media_url: "/placeholder.svg?height=400&width=400",
    media_type: "CAROUSEL_ALBUM",
    timestamp: "2024-01-13T09:15:00Z",
    permalink: "https://instagram.com/p/example3",
    like_count: 203,
    comments_count: 15,
  },
  {
    id: "4",
    caption:
      "Quick tip Tuesday! 💡 Always backup your data before bringing your device for repair. Here's how to do it properly... Link in bio for full tutorial! #TechTips #DataBackup #TuesdayTip",
    media_url: "/placeholder.svg?height=400&width=400",
    media_type: "VIDEO",
    timestamp: "2024-01-12T14:20:00Z",
    permalink: "https://instagram.com/p/example4",
    like_count: 156,
    comments_count: 6,
  },
  {
    id: "5",
    caption:
      "Customer appreciation post! 🙏 Sarah's laptop is running like new after our SSD upgrade. Thanks for trusting FixIT with your tech! #CustomerLove #SSDUpgrade #LaptopRepair",
    media_url: "/placeholder.svg?height=400&width=400",
    media_type: "IMAGE",
    timestamp: "2024-01-11T11:00:00Z",
    permalink: "https://instagram.com/p/example5",
    like_count: 94,
    comments_count: 11,
  },
  {
    id: "6",
    caption:
      "Behind the scenes at FixIT! 🔧 Daniel working his magic on a complex motherboard repair. This is why we love what we do! #BehindTheScenes #MotherboardRepair #TechMagic",
    media_url: "/placeholder.svg?height=400&width=400",
    media_type: "IMAGE",
    timestamp: "2024-01-10T16:30:00Z",
    permalink: "https://instagram.com/p/example6",
    like_count: 178,
    comments_count: 9,
  },
]

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Simulate API call delay
    const fetchInstagramPosts = async () => {
      try {
        setLoading(true)
        // In a real implementation, you would call Instagram API here
        // const response = await fetch('/api/instagram-feed')
        // const data = await response.json()

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1500))

        setPosts(mockInstagramPosts)
        setError(null)
      } catch (err) {
        setError("Failed to load Instagram posts")
        console.error("Instagram API Error:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchInstagramPosts()
  }, [])

  const formatTimeAgo = (timestamp: string) => {
    const now = new Date()
    const postDate = new Date(timestamp)
    const diffInHours = Math.floor((now.getTime() - postDate.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 24) {
      return `${diffInHours}h ago`
    } else {
      const diffInDays = Math.floor(diffInHours / 24)
      return `${diffInDays}d ago`
    }
  }

  const truncateCaption = (caption: string, maxLength = 100) => {
    if (caption.length <= maxLength) return caption
    return caption.substring(0, maxLength) + "..."
  }

  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="overflow-hidden animate-pulse">
            <div className="aspect-square bg-gray-200"></div>
            <CardContent className="p-4">
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <Card className="text-center p-8">
        <Instagram className="h-12 w-12 mx-auto text-gray-400 mb-4" />
        <h3 className="text-lg font-semibold mb-2">Unable to load Instagram feed</h3>
        <p className="text-gray-600 mb-4">{error}</p>
        <Button variant="outline" onClick={() => window.location.reload()} className="border-pink-200 hover:bg-pink-50">
          <Instagram className="h-4 w-4 mr-2" />
          Try Again
        </Button>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Instagram className="h-6 w-6 text-pink-600" />
          <div>
            <h3 className="text-lg font-semibold">@fixit_repairs</h3>
            <p className="text-sm text-gray-600">Latest from our Instagram</p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="border-pink-200 hover:bg-pink-50"
          onClick={() => window.open("https://instagram.com/fixit_repairs", "_blank")}
        >
          <Instagram className="h-4 w-4 mr-2" />
          Follow Us
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={post.media_url || "/placeholder.svg"}
                alt="Instagram post"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {post.media_type === "VIDEO" && (
                <Badge className="absolute top-2 right-2 bg-black/70 text-white">VIDEO</Badge>
              )}
              {post.media_type === "CAROUSEL_ALBUM" && (
                <Badge className="absolute top-2 right-2 bg-black/70 text-white">ALBUM</Badge>
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex items-center gap-4 text-white">
                  <div className="flex items-center gap-1">
                    <Heart className="h-5 w-5" />
                    <span className="font-semibold">{post.like_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-5 w-5" />
                    <span className="font-semibold">{post.comments_count}</span>
                  </div>
                </div>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500">{formatTimeAgo(post.timestamp)}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open(post.permalink, "_blank")}
                  className="h-auto p-1 text-gray-400 hover:text-pink-600"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{truncateCaption(post.caption)}</p>
              <div className="flex items-center gap-4 mt-3 pt-3 border-t">
                <button className="flex items-center gap-1 text-gray-600 hover:text-red-500 transition-colors">
                  <Heart className="h-4 w-4" />
                  <span className="text-sm">{post.like_count}</span>
                </button>
                <button className="flex items-center gap-1 text-gray-600 hover:text-blue-500 transition-colors">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-sm">{post.comments_count}</span>
                </button>
                <button className="flex items-center gap-1 text-gray-600 hover:text-green-500 transition-colors ml-auto">
                  <Share className="h-4 w-4" />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button
          variant="outline"
          className="border-pink-200 hover:bg-pink-50"
          onClick={() => window.open("https://instagram.com/fixit_repairs", "_blank")}
        >
          <Instagram className="h-4 w-4 mr-2" />
          View More on Instagram
        </Button>
      </div>
    </div>
  )
}
