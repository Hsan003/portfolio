import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function Skills() {
  const skillCategories = [
    {
      title: "Développement Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "JavaScript/TypeScript", level: 88 },
        { name: "HTML5/CSS3", level: 92 },
        { name: "Bootstrap/Tailwind", level: 85 },
      ],
    },
    {
      title: "Développement Backend",
      skills: [
        { name: "PHP/Symfony", level: 85 },
        { name: "NestJS", level: 80 },
        { name: "ASP.NET Core", level: 75 },
        { name: "FastAPI", level: 82 },
        { name: "GraphQL/REST API", level: 88 },
      ],
    },
    {
      title: "Bases de données & Outils",
      skills: [
        { name: "MySQL/PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Docker", level: 75 },
        { name: "Git/GitHub", level: 90 },
        { name: "Python/IA", level: 70 },
      ],
    },
    {
      title: "Compétences Transversales",
      skills: [
        { name: "Leadership", level: 90 },
        { name: "Gestion de projet", level: 85 },
        { name: "Organisation d'événements", level: 95 },
        { name: "Résolution de problèmes", level: 88 },
        { name: "Méthodes Agiles", level: 80 },
      ],
    },
  ]

  const languages = [
    { name: "Arabe", level: "Natif", flag: "🇹🇳" },
    { name: "Français", level: "Courant", flag: "🇫🇷" },
    { name: "Anglais", level: "Cambridge FCE", flag: "🇬🇧" },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">Compétences</h2>
          <p className="text-lg text-muted-foreground">Mes expertises techniques et compétences transversales</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg">Langues</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {languages.map((lang, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{lang.flag}</div>
                  <div className="font-medium">{lang.name}</div>
                  <div className="text-sm text-muted-foreground">{lang.level}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
