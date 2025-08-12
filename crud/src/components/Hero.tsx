"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import { Sprout, Leaf, Zap, Shield } from "lucide-react"

type HeroProps = {
  className?: string
}

export default function Hero({ className }: HeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!containerRef.current) return
    
    const ctx = gsap.context(() => {
      // Staggered entrance animation
      gsap.fromTo(
        ".hero-float",
        { y: 30, opacity: 0, scale: 0.95 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          duration: 1.2, 
          ease: "power3.out", 
          stagger: 0.2 
        }
      )
      
      // Floating animation for the badge
      gsap.to(".hero-badge", {
        y: -8,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      })
      
      // Pulse animation for CTA button
      gsap.to(".hero-pulse", {
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      })
      
      // Gradient background animation
      gsap.to(".hero-gradient", {
        rotation: 360,
        repeat: -1,
        duration: 20,
        ease: "none",
      })
    }, containerRef)
    
    return () => ctx.revert()
  }, [])

  const features = [
    {
      icon: <Zap className="size-5" />,
      title: "Lightning Fast",
      description: "Optimized performance with motion"
    },
    {
      icon: <Shield className="size-5" />,
      title: "Secure",
      description: "Production-grade authentication"
    },
    {
      icon: <Leaf className="size-5" />,
      title: "Eco-Friendly",
      description: "Digital plant management"
    }
  ]

  return (
    <section ref={containerRef} className={cn("relative w-full overflow-hidden", className)}>
      {/* Animated background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="hero-gradient absolute -top-40 -left-40 size-96 rounded-full bg-gradient-to-tr from-emerald-400/30 via-blue-500/20 to-fuchsia-500/20 blur-3xl" />
        <div className="hero-gradient absolute -bottom-20 -right-20 size-80 rounded-full bg-gradient-to-tr from-fuchsia-400/25 via-amber-400/15 to-emerald-400/20 blur-3xl" />
        <div className="hero-gradient absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-64 rounded-full bg-gradient-to-tr from-blue-400/15 via-purple-400/10 to-pink-400/15 blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 sm:pt-20 lg:pt-28 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left content */}
          <div className="hero-float space-y-6">
            {/* Badge */}
            <motion.span 
              className="hero-badge inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sprout className="size-4 text-emerald-500" />
              Plant care, organized
            </motion.span>
            
            {/* Main heading */}
            <motion.h1 
              className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              A chic inventory for your{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-fuchsia-600 bg-clip-text text-transparent">
                plants
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              className="max-w-prose text-pretty text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Track, nurture, and celebrate your green space. Beautiful UI, smooth authentication, 
              and a delightful experience from seed to sprout.
            </motion.p>
            
            {/* CTA buttons */}
            <motion.div 
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button asChild size="lg" className="hero-pulse bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white shadow-lg">
                <Link href="/plants">Explore plants</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 hover:bg-muted/50">
                <Link href="/handler/signup">Create account</Link>
              </Button>
            </motion.div>
            
            {/* Features grid */}
            <motion.div 
              className="grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-gradient-to-br from-emerald-500/20 to-blue-500/20 p-2 text-emerald-600">
                    {feature.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{feature.title}</p>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right visual */}
          <div className="relative hero-float">
            <motion.div
              className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-emerald-500/20 via-blue-500/15 to-fuchsia-500/20 blur-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            />
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-card/50 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="size-full"
              >
                <div className="grid size-full place-items-center bg-gradient-to-br from-background/80 to-muted/50">
                  <div className="grid gap-4 p-8 text-center">
                    <Skeleton className="h-10 w-64 rounded-lg" />
                    <Skeleton className="h-4 w-96 rounded" />
                    <Skeleton className="h-4 w-80 rounded" />
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      <Skeleton className="h-28 rounded-lg" />
                      <Skeleton className="h-28 rounded-lg" />
                      <Skeleton className="h-28 rounded-lg" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

