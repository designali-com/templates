"use client"

export function FigmaShowcase() {
  return (
    <div className="w-full border-y-2 border-dotted flex justify-center items-center">
    <div className="relative flex w-full xl:border-x-2 border-dotted p-6 h-[800px] max-w-6xl flex-col items-center justify-center overflow-hidden">
      <div className="w-full overflow-hidden border">
        <iframe
          className="h-[800px] w-full"
          src="https://embed.figma.com/design/j46kBSrJFRPyD95HGPEpjk/Portfolio?node-id=0-1&embed-host=share"
          allowFullScreen
        />
      </div>
    </div>
    </div>
  )
}
