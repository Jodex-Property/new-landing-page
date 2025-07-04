import { Particles } from "../magicui/particles"
import { HeroContent } from "./hero-content"


export const Hero = () => {
    return (
        <section className="min-h-screen bg-muted flex items-center justify-center px-6">
         
           <HeroContent />
            <Particles 
                className="absolute inset-0 z-0"
                quantity={100}
                ease={80}
                refresh
            />
        </section>
    )
}