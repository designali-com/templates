

export default function Page() {
  return (
    <div className="relative flex h-screen max-w-7xl border-x mx-auto items-center justify-center w-full flex-col">
      <h1 className="mx-auto mb-10 max-w-xs px-6 text-center text-xl md:max-w-full md:text-3xl">
        Works
      </h1>
      <div className="relative p-2 md:p-10 w-full flex flex-col h-[600px] items-center justify-center overflow-hidden">

        <div className="w-full overflow-hidden border">
          <iframe
            className="h-[800px]  w-full"
            src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/U1DOlVERUhmkEKjQ8LSy68/Portfolio?node-id=73-4369&t=MpNKwRJeJOBN6XIV-1"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}