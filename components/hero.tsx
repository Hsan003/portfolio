"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1
            className={`text-4xl sm:text-6xl font-bold text-balance mb-6 font-serif transition-all duration-1000 ${isVisible ? "animate-slide-up opacity-100" : "opacity-0"}`}
          >
            <span className="text-foreground">Hsan</span> <span className="text-primary">Ellouze</span>
          </h1>
          <p
            className={`text-xl sm:text-2xl text-muted-foreground mb-4 transition-all duration-1000 delay-200 ${isVisible ? "animate-slide-up opacity-100" : "opacity-0"}`}
          >
            Software Engineering Student | Fullstack Developer
          </p>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto text-pretty transition-all duration-1000 delay-300 ${isVisible ? "animate-slide-up opacity-100" : "opacity-0"}`}
          >
            Passionate about technological innovation, I combine technical expertise in fullstack web development with
            experience in leadership and event organization.
          </p>
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-400 ${isVisible ? "animate-slide-up opacity-100" : "opacity-0"}`}
        >
          <Button
            size="lg"
            className="text-lg px-8"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Projects
            <ArrowDown className="w-5 h-5 ml-2" />
          </Button>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/Hsan003" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://linkedin.com/in/hsanellouze" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:hsanellouz@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-8 text-center transition-all duration-1000 delay-500 ${isVisible ? "animate-slide-up opacity-100" : "opacity-0"}`}
        >
          <div>
            <div className="text-3xl font-bold text-primary mb-2 font-serif">3+</div>
            <div className="text-muted-foreground">Years of Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2 font-serif">10+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
        </div>
      </div>
    </section>
  )
}
