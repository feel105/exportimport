import Image from 'next/image'
import type { HeroSlide } from './heroSlides'

type HeroBackgroundSliderProps = {
  slides: HeroSlide[]
  index: number
}

export default function HeroBackgroundSlider({ slides, index }: HeroBackgroundSliderProps) {
  return (
    <div className="hero-slider absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {slides.map((slide, slideIndex) => {
        const isActive = slideIndex === index
        return (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
              isActive ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              priority={slideIndex === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        )
      })}

      {/* Left-weighted scrim — readable copy on left, produce visible on right */}
      <div className="hero-scrim-side absolute inset-0 bg-gradient-to-r from-[#0A0F18] via-[#0A0F18]/85 to-[#0A0F18]/40 lg:to-[#0A0F18]/10" />
      <div className="hero-scrim-y absolute inset-0 bg-gradient-to-b from-[#0A0F18]/60 via-transparent to-[#0A0F18]/70" />
      <div className="absolute inset-0 bg-grid opacity-20" />
    </div>
  )
}
