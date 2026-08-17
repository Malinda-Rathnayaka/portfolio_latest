import { Code2, Palette, Server, Database, Cpu, Layers } from "lucide-react";

export const NAV = ["About", "Skills", "Projects", "JOURNEY", "Contact"] as const;

export const SKILLS = [
  { name: "Frontend Engineering", icon: Code2, items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { name: "Interface Design", icon: Palette, items: ["Figma", "Motion Design", "Design Systems"] },
  { name: "Backend Systems", icon: Server, items: ["Node.js", "Postgres", "GraphQL", "Edge Functions"] },
  { name: "Data & Infra", icon: Database, items: ["Redis", "AWS", "Docker", "CI/CD"] },
  { name: "3D & Motion", icon: Cpu, items: ["Three.js", "WebGL", "Framer Motion", "GSAP"] },
  { name: "Architecture", icon: Layers, items: ["System Design", "Microservices", "Performance"] },
];


