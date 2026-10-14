const logos = [
    { name: "21st", image: "/logos/logo-1-10.png" },
    { name: "JKtype", image: "/logos/c3-2.png" },
    { name: "LG", image: "/logos/c10-2.png" },
    { name: "TeaValley", image: "/logos/c5-2.png" },
    { name: "Apollo", image: "/logos/c4-2.png" },
    { name: "DB", image: "/logos/c18-2.png" },
    { name: "SC", image: "/logos/c8-2.png" },
    { name: "PB", image: "/logos/c1-2.png" },
    { name: "TV", image: "/logos/c2-2.png" },
    { name: "FM", image: "/logos/logo-1.png" },
    { name: "TV", image: "/logos/logo-1-1.png" },
    { name: "TV", image: "/logos/logo-1-2.png" },
    { name: "TV", image: "/logos/logo-1-3.png" },
    { name: "TV", image: "/logos/logo-1-4.png" },
    { name: "TV", image: "/logos/logo-1-5.png" },
    { name: "TV", image: "/logos/logo-1-6.png" },
    { name: "TV", image: "/logos/logo-1-7.png" },
    { name: "TV", image: "/logos/logo-1-8.png" },
    { name: "TV", image: "/logos/logo-1-9.png" },
]

export function Clients() {
    return (
        <div className="relative mx-auto w-full border-x-2 max-w-6xl border-t-0 border-dotted">
            <h1 className="text-md text-center text-primary border-b-2 border-dotted p-4">
                Trusted by the world’s most creative companies.
            </h1>

            <div className="p-2">
                <div className="mx-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5">
                    {logos.map((tech, index) => (
                        <div key={`${tech.name}-${index}`} className="px-6 ring ring-primary/20 py-4 flex items-center justify-center">
                            <img
                                className="mx-auto h-12 w-auto grayscale dark:invert"
                                src={tech.image}
                                alt={tech.name}
                            />
                        </div>
                    ))} 
                    <div className="px-6 ring ring-primary/20 py-4 flex items-center justify-center">
                        <span className="text-md text-center text-primary">
                            & many more...
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
