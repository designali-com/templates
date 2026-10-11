"use client";

const images = [ 
  "/img/hero-1.jpg",
  "/img/login-1.jpg",
  "/img/hero-2.jpg",
  "/img/dashboard-1-dark.jpg",
  "/img/ask/ask4.jpg", 
  "/img/chat-1-dark.jpg",
  "/img/ask/ask1.jpg",
  "/img/ask/ask2.jpg",
  "/img/ask/ask3.jpg", 
];

export function GallerySection() {
  return (
    <div className="p-2 border-y-2 border-dotted">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {images.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className=""
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full border h-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}