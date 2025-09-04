import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Développeur FullStack",
      company: "Mazdev",
      type: "Temps Partiel",
      period: "Mars 2023 - Présent",
      location: "Tunis, Tunisie",
      description: [
        "Développement d'une plateforme d'assistance à la révision de contrats juridiques avec IA",
        "Implémentation d'outils d'analyse et de détection de risques contractuels",
      ],
      technologies: ["FastAPI", "React", "MongoDB", "Docker", "Git"],
    },
    {
      title: "Stagiaire Développeur Web",
      company: "Steros Sfax",
      type: "Stage",
      period: "Août 2024 (1 mois)",
      location: "Sfax, Tunisie",
      description: [
        "Création d'un site vitrine responsive pour un nouveau service de l'entreprise",
        "Intégration de fonctionnalités interactives pour une meilleure expérience utilisateur",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "Bootstrap", "MySQL"],
    },
  ]

  const associativeExperience = [
    {
      title: "Chargé de mission événementiel",
      organization: "Junior Entreprise INSAT",
      description: "Organisation du Forum INSAT Entreprise 6.0 (30+ entreprises, 1500+ participants)",
      achievements: ["Pilotage logistique", "Coordination de l'équipe organisatrice"],
    },
    {
      title: "Responsable Opérationnel WinterCup 7.0",
      organization: "ACM INSAT",
      description: "Gestion de la compétition de programmation (150+ participants)",
      achievements: ["Gestion complète de l'événement", "Coordination technique"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">Expérience Professionnelle</h2>
          <p className="text-lg text-muted-foreground">Mon parcours professionnel et associatif</p>
        </div>

        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <span>{exp.company}</span>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Expériences Associatives</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {associativeExperience.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">{exp.title}</h4>
                  <p className="text-primary font-medium mb-3">{exp.organization}</p>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
