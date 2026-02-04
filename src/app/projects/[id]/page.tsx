import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetailClient from "@/components/ProjectDetailClient";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}

// Generate static params for SSG
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
