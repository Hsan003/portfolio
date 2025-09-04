import { Card, CardContent } from "@/components/ui/card"
import { Code, Users, Lightbulb, Target } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Technical Development",
      description: "Expertise in fullstack development with React, Vue, NestJS, and FastAPI",
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Organizing major events and leading development teams",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "AI integration in contract review solutions and modern web applications",
    },
    {
      icon: Target,
      title: "Goals",
      description: "Seeking internship opportunities in software development, AI, DevOps and blockchain",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Passionate Software Engineering student at INSAT, I combine technical skills in fullstack web development
            with experience in event organization. Rigorous and attracted to innovation, I am seeking an internship to
            enrich my expertise in software development, AI, DevOps and blockchain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
