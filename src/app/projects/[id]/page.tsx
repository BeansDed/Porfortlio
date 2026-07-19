import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetailClient from "@/components/ProjectDetailClient";
import type { Metadata } from "next";

export const dynamicParams = false;

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const project = projects.find((item) => item.id === params.id);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
