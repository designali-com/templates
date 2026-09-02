export function NameTransition() {
  return (
    <h1 className="transition-element w-34 text-3xl font-bold">
      <span className="sr-only">Ali Imam</span>
      <span aria-hidden="true" className="group relative block overflow-hidden">
        <span className="inline-block transition-all duration-300 ease-in-out group-hover:-translate-y-full">
          {"Ali Imam".split("").map((letter, index) => (
            <span
              key={index}
              className="inline-block"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
        <span className="absolute top-0 left-0 inline-block w-full translate-y-full transition-all duration-300 ease-in-out group-hover:translate-y-0">
          {"Designali".split("").map((letter, index) => (
            <span
              key={index}
              className="inline-block text-blue-500"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {letter}
            </span>
          ))}
        </span>
      </span>
    </h1>
  )
}
