import * as React from "react"
import { motion, PanInfo } from "framer-motion"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number | string
  name: string
  avatar: string
  description: string
}

interface TestimonialCarouselProps
  extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: Testimonial[]
  showArrows?: boolean
  showDots?: boolean
}

const TestimonialCarousel = React.forwardRef<
  HTMLDivElement,
  TestimonialCarouselProps
>(
  (
    { className, testimonials, showArrows = true, showDots = true, ...props },
    ref,
  ) => {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [exitX, setExitX] = React.useState<number>(0)
    const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
    const [showTooltip, setShowTooltip] = React.useState(false)

    const handleDragEnd = (
      event: MouseEvent | TouchEvent | PointerEvent,
      info: PanInfo,
    ) => {
      if (Math.abs(info.offset.x) > 100) {
        setExitX(info.offset.x)
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % testimonials.length)
          setExitX(0)
        }, 200)
      }
    }

    const goToPrevious = () => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const goToNext = () => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const handleMouseMove = (e: React.MouseEvent) => {
      const rect = e.currentTarget.getBoundingClientRect()
      setMousePos({ 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      })
    }

    return (
      <div
        ref={ref}
        className={cn(
          "h-80 lg:h-96 w-full flex items-center justify-center px-4",
          className
        )}
        {...props}
      >
        <div className="relative w-full max-w-md lg:max-w-2xl h-80 lg:h-96">
          {testimonials.map((testimonial, index) => {
            const isCurrentCard = index === currentIndex
            const isPrevCard =
              index === (currentIndex + 1) % testimonials.length
            const isNextCard =
              index === (currentIndex + 2) % testimonials.length

            if (!isCurrentCard && !isPrevCard && !isNextCard) return null

            return (
              <motion.div
                key={testimonial.id}
                className={cn(
                  "absolute w-full h-full rounded-2xl cursor-grab active:cursor-grabbing",
                  "bg-brand-cyan  shadow-xl",
                  "dark:bg-card dark:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-1px_-1px_3px_rgba(255,255,255,0.1)] border-2 border-brand-orange",
                )}
                onMouseMove={isCurrentCard ? handleMouseMove : undefined}
                onMouseEnter={() => isCurrentCard && setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                style={{
                  zIndex: isCurrentCard ? 3 : isPrevCard ? 2 : 1,
                }}
                drag={isCurrentCard ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={isCurrentCard ? handleDragEnd : undefined}
                initial={{
                  scale: 0.95,
                  opacity: 0,
                  y: isCurrentCard ? 0 : isPrevCard ? 8 : 16,
                  rotate: isCurrentCard ? 0 : isPrevCard ? -2 : -4,
                }}
                animate={{
                  scale: isCurrentCard ? 1 : 0.95,
                  opacity: isCurrentCard ? 1 : isPrevCard ? 0.6 : 0.3,
                  x: isCurrentCard ? exitX : 0,
                  y: isCurrentCard ? 0 : isPrevCard ? 8 : 16,
                  rotate: isCurrentCard ? exitX / 20 : isPrevCard ? -2 : -4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                {showArrows && isCurrentCard && (
                  <div className="absolute inset-x-0 top-2 flex justify-between px-4">
                    <span 
                      onClick={goToPrevious}
                      className="text-2xl select-none cursor-pointer text-gray-300 hover:text-gray-400 dark:text-muted-foreground dark:hover:text-primary transition-colors"
                    >
                      &larr;
                    </span>
                    <span 
                      onClick={goToNext}
                      className="text-2xl select-none cursor-pointer text-gray-300 hover:text-gray-400 dark:text-muted-foreground dark:hover:text-primary transition-colors"
                    >
                      &rarr;
                    </span>
                  </div>
                )}

                <div className="p-6 lg:p-12 flex flex-col items-center justify-center h-full gap-4 lg:gap-8">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 lg:w-28 lg:h-28 rounded-full object-cover flex-shrink-0"
                  />
                  <h3 className="text-lg lg:text-3xl font-semibold text-white dark:text-foreground text-center">
                    {testimonial.name}
                  </h3>
                  <p className="text-center text-sm lg:text-xl text-white dark:text-muted-foreground leading-relaxed lg:leading-loose px-4 lg:px-8">
                    {testimonial.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
          {/* {showDots && (
            <div className="absolute -bottom-10 lg:-bottom-12 left-0 right-0 flex justify-center gap-3">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-colors",
                    index === currentIndex
                      ? "bg-blue-500 dark:bg-primary"
                      : "bg-gray-300 dark:bg-muted-foreground/30",
                  )}
                />
              ))}
            </div>
          )} */}
          
          {/* Custom Tooltip */}
          {showTooltip && (
            <div 
              className="absolute pointer-events-none z-50 px-3 py-2 text-sm font-medium text-white bg-brand-orange rounded-lg shadow-lg backdrop-blur-sm border border-white/20 hidden md:block"
              style={{
                left: mousePos.x + 15,
                top: mousePos.y - 45
              }}
            >
              <div className="flex items-center gap-2">
                
                <span>Drag to explore more testimonials</span>
              </div>
              <div className="absolute -bottom-1 left-4 w-2 h-2 bg-brand-orange rotate-45"></div>
            </div>
          )}
        </div>
      </div>
    )
  },
)
TestimonialCarousel.displayName = "TestimonialCarousel"

export { TestimonialCarousel, type Testimonial }