"use client"

import Link from "next/link"
import { Plus } from "lucide-react"

import { IndiaFlag, Verified } from "./logos"
import { NameTransition } from "./name"

export function AboutMe() {
  return (
    <div className="">
      <div className="relative mx-auto flex h-full flex-col items-center justify-center overflow-hidden">
        <div className="relative mx-auto flex w-full flex-col items-center md:flex-row md:items-end">
          <Link
            target="_blank"
            href="https://maps.app.goo.gl/Moig1JVFAWpVCbbA7"
            className="absolute top-2 right-3 z-20"
          >
            <IndiaFlag className="h-10" />
          </Link>

          <div className="relative flex w-full flex-col border md:flex-row md:items-end">
            <div className="aspect-square h-60 w-60 border-r hover:cursor-progress md:border-x-0 md:border-r">
              <img
                src="/ali.jpg"
                alt="Your Image"
                height={700}
                width={700}
                className="aspect-square h-60 w-60 rounded-full border-4 object-cover p-1"
              />
            </div>
            <div className="flex h-full w-full flex-col items-end">
              <div className="flex w-full items-center gap-2 border-t px-4 pt-3 pb-2">
                <NameTransition />
                <Verified className="h-7" />
              </div>
              <div className="flex w-full items-center justify-between border-t px-4 py-2">
                Design Engineer
                <Link target="_blank" href={"https://x.com/designali_com"}>
                  <p className="text-xs text-muted-foreground duration-200 hover:text-primary">
                    Know More about AI
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
