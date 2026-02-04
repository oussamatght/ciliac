"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

interface SplashScreenProps {
  onComplete: () => void
}

// Generate particles data once
const generateParticles = () => {
  return [...Array(20)].map((_, i) => ({
    id: i,
    xPercent: Math.random() * 100,
    scale: Math.random() * 0.5 + 0.5,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }))
}

const particles = generateParticles()

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 500),
      setTimeout(() => setStage(2), 1500),
      setTimeout(() => setStage(3), 2500),
      setTimeout(() => onComplete(), 3500),
    ]
    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[oklch(0.25_0.08_145)] via-[oklch(0.35_0.1_145)] to-[oklch(0.25_0.08_145)]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute w-2 h-2 rounded-full bg-white/10"
              style={{ left: `${p.xPercent}%` }}
              initial={{
                y: "100vh",
                scale: p.scale,
              }}
              animate={{
                y: -20,
                transition: {
                  duration: p.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: p.delay,
                }
              }}
            />
          ))}
        </div>

        {/* Glowing circles */}
        <motion.div
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, oklch(0.65 0.15 80 / 0.3) 0%, transparent 70%)"
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative z-10 flex flex-col items-center">
          {/* Logo container */}
          <motion.div
            className="relative"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ 
              scale: stage >= 1 ? 1 : 0, 
              rotate: stage >= 1 ? 0 : -180 
            }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 15,
              duration: 0.8 
            }}
          >
            {/* Outer ring */}
            <motion.div
              className="absolute -inset-4 rounded-full border-4 border-dashed"
              style={{ borderColor: "oklch(0.65 0.15 80 / 0.5)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Inner ring */}
            <motion.div
              className="absolute -inset-8 rounded-full border-2"
              style={{ borderColor: "oklch(0.65 0.2 145 / 0.3)" }}
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            {/* Logo background */}
            <motion.div
              className="relative w-32 h-32 rounded-full flex items-center justify-center shadow-2xl"
              style={{
                background: "linear-gradient(135deg, oklch(0.55 0.2 145) 0%, oklch(0.45 0.18 145) 100%)"
              }}
              animate={{
                boxShadow: [
                  "0 0 30px oklch(0.65 0.15 80 / 0.4)",
                  "0 0 60px oklch(0.65 0.15 80 / 0.6)",
                  "0 0 30px oklch(0.65 0.15 80 / 0.4)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {/* Wheat icon */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: stage >= 1 ? 1 : 0, y: stage >= 1 ? 0 : 20 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Image src="/favicon.ico" alt="Logo" width={128} height={128} className="rounded-full" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* App name */}
          <motion.div
            className="mt-8 flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: stage >= 2 ? 1 : 0, 
              y: stage >= 2 ? 0 : 30 
            }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-5xl font-bold text-white tracking-wider"
              style={{ textShadow: "0 0 30px oklch(0.65 0.15 80 / 0.5)" }}
            >
              CILIAC
            </motion.h1>
            <motion.div
              className="h-1 rounded-full mt-3"
              style={{ background: "linear-gradient(90deg, transparent, oklch(0.65 0.15 80), transparent)" }}
              initial={{ width: 0 }}
              animate={{ width: stage >= 2 ? 200 : 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="mt-4 text-lg text-white/80 font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: stage >= 3 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            دليلك الشامل لحياة خالية من الغلوتين
          </motion.p>

          {/* Loading dots */}
          <motion.div
            className="mt-8 flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: stage >= 2 ? 1 : 0 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full"
                style={{ background: "oklch(0.65 0.15 80)" }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
