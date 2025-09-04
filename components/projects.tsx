import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "PPP - Plateforme NFT avec IA",
      description: "Plateforme de génération et commerce de NFT via IA avec système d'enchères en temps réel",
      technologies: ["Vue.js", "NestJS", "WebSocket", "GraphQL", "API Rest", "SSE"],
      category: "Projet Personnel",
      image: "/nft-marketplace-platform-with-ai-generation.jpg",
    },
    {
      title: "CP Coach",
      description: "Plateforme de coaching pour compétiteurs en programmation avec suivi de progression personnalisé",
      technologies: ["PHP Native", "MySQL", "JavaScript", "HTML/CSS"],
      category: "Projet Académique",
      image: "/programming-coaching-platform-dashboard.jpg",
    },
    {
      title: "Takwira",
      description: "Application de réservation de terrains de football avec tableau de bord administratif complet",
      technologies: ["Symfony 6", "Doctrine ORM", "Twig", "MySQL", "API Platform"],
      category: "Projet Académique",
      image: "/football-field-booking-app-interface.jpg",
    },
    {
      title: "Uptime Monitoring",
      description: "Système de monitoring d'URLs en temps réel avec tableaux de bord analytiques et alertes",
      technologies: ["ASP.NET Core", "Entity Framework", "SQL Server", "C#"],
      category: "Projet Académique",
      image: "/uptime-monitoring-dashboard-analytics.jpg",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">Projets Réalisés</h2>
          <p className="text-lg text-muted-foreground">Une sélection de mes projets académiques et personnels</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <Badge variant="secondary" className="mb-3">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="icon" variant="outline">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="outline">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
