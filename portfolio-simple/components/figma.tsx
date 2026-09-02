"use client"

export function Figma() {
  return (
    <div className="relative flex h-[400px] flex-col items-center justify-center overflow-hidden">
      <div className="w-full overflow-hidden border shadow-2xl">
        <iframe
          className="h-[800px] w-full"
          src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/U1DOlVERUhmkEKjQ8LSy68/Portfolio?node-id=73-4369&t=MpNKwRJeJOBN6XIV-1"
          allowFullScreen
        />
      </div>
    </div>
  )
}
