"use client"

import * as React from "react"
import Link from "next/link"
import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { cn } from "@/lib/utils"

interface ButtonStoryProps {
  className?: string
  backHref?: string
  previousHref?: string
  nextHref?: string
}

export function ButtonStory({
  className = "",
  backHref = "/story",
  previousHref,
  nextHref,
}: ButtonStoryProps) {
  return (
    <div className={cn("flex justify-center w-full gap-2", className)}>
      {/* Navigation Buttons */}
      <ButtonGroup>
        {/* All Story / Back Button */}
        <Button
          variant="outline"
          nativeButton={false}
          aria-label="Go Back"
          render={<Link href={backHref} />}
        >
          <ArrowLeftIcon className="h-4 w-4 mr-1" />
          All Story
        </Button>

        {/* Previous Story Button */}
        {previousHref ? (
          <Button
            variant="outline"
            nativeButton={false}
            aria-label="Previous Story"
            render={<Link href={previousHref} />}
          >
            <ChevronLeftIcon className="h-4 w-4 mr-1" />
            Previous
          </Button>
        ) : (
          <Button  nativeButton={false} variant="outline" aria-label="Previous Story" disabled>
            <ChevronLeftIcon className="h-4 w-4 mr-1" />
            Previous
          </Button>
        )}

        {/* Next Story Button */}
        {nextHref ? (
          <Button
            variant="outline"
            nativeButton={false}
            aria-label="Next Story"
            render={<Link href={nextHref} />}
          >
            Next
            <ChevronRightIcon className="h-4 w-4 ml-1" />
          </Button>
        ) : (
          <Button  variant="outline" aria-label="Next Story" disabled>
            Next
            <ChevronRightIcon className="h-4 w-4 ml-1" />
          </Button>
        )}
      </ButtonGroup>
    </div>
  )
}