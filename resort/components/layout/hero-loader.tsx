"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { SparaLogo } from "../logo"
import { Progress } from "../ui/progress"
import { MusicPlayer } from "./music"

export function Loader() {
  const [exit, setExit] = useState(false)
  const [shouldShow, setShouldShow] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("spara-loader-shown")

    if (hasLoaded) {
      setShouldShow(false)
      return
    }

    const duration = 3000 // Adjust duration as needed
    const startTime = performance.now()

    let animationFrame: number

    const animateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const value = Math.min((elapsed / duration) * 100, 100)

      setProgress(value)

      if (value < 100) {
        animationFrame = requestAnimationFrame(animateProgress)
      } else {
        setIsFinished(true)
      }
    }

    animationFrame = requestAnimationFrame(animateProgress)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  const handleStart = () => {
    sessionStorage.setItem("spara-loader-shown", "true")
    setExit(true)
  }

  if (!shouldShow) return null

  return (
    <div
      className={`
        fixed inset-0 w-full h-full z-[9999]
        bg-primary text-white
        transition-transform
        duration-[1200ms]
        ease-[cubic-bezier(0.76,0,0.24,1)]
        ${exit ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      {/* Background Text */}
      <h1
        className="
          absolute inset-0
          flex items-center justify-center
          font-slight
          -rotate-20
          text-[20vw]
          md:text-[30vw]
          leading-none
          opacity-2
          pointer-events-none
          select-none
        "
      >
        Spara
      </h1>

      {/* Frame */}
      <div className="absolute inset-5 border border-white/10">

        {/* Flower */}
        <div
          className="
            absolute
            left-1/2 top-8
            z-20
            flex
            -translate-x-1/2
            items-center
            justify-center
            rounded-full
            border border-dashed border-white/20
            p-2
          "
        >
          <Image
            src="/flower.png"
            alt="Flower"
            width={80}
            height={80}
            priority
            className="h-20 w-20 object-contain"
          />
        </div>

        {/* Left */}
        <div
          className="
            absolute
            left-[8%]
            top-1/2
            hidden
            -translate-y-1/2
            md:block
          "
        >
          <p className="font-dastin text-2xl uppercase tracking-[0.25em]">
            Pushpanjali Farms
          </p>
        </div>

        {/* Right */}
        <div
          className="
            absolute
            right-[15%]
            top-1/2
            hidden
            -translate-y-1/2
            md:block
          "
        >
          <p className="font-dastin text-2xl uppercase tracking-[0.25em]">
            New Delhi
          </p>
        </div>

        {/* Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center">

            <SparaLogo
              fill="white"
              className="h-12 md:h-20 w-auto"
            />

            <h1
              className="
                mt-3
                text-center
                font-dastin
                text-3xl
                uppercase
                text-white
              "
            >
              Boutique Resort
            </h1>

          </div>
        </div>

        {/* Bottom Section: Progress Bar OR Start Button */}
        <div
          className="
            absolute
            bottom-40
            left-1/2
            -translate-x-1/2
            flex flex-col items-center justify-center
            z-30
          "
        >
          {!isFinished ? (
            <div className="relative h-16 w-[2px] overflow-hidden bg-white/20">
              <Progress
                value={progress}
                className="
                  h-full
                  w-full
                  rotate-180
                  rounded-none
                  border-0
                  bg-transparent
                  p-0
                  [&>div]:rounded-none
                  [&>div]:bg-white
                  [&>div]:transition-none
                "
              />
            </div>
          ) : (
            <button
              onClick={handleStart}
              className="
                px-8 py-3
                border border-white/40
                bg-white/10 backdrop-blur-sm
                text-white uppercase tracking-[0.25em] text-xs md:text-sm
                transition-all duration-300 ease-out
                hover:bg-white hover:text-black hover:border-white
                active:scale-95
                cursor-pointer
                animate-fade-in
              "
            >
              Enter Experience
            </button>
          )}
        </div>

        {/* Bottom */}
        <div
          className="
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2
            text-center
          "
        >
          <p className="text-md leading-5 uppercase tracking-[0.25em]">
            Spara Resort
            <br />
            A legacy since 1995
          </p>
        </div>
        <MusicPlayer />
      </div>
    </div>
  )
}