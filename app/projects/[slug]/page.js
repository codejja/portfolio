import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "../projectsData";
import ProjectDetailContent from "./ProjectDetailContent";

export function generateStaticParams() {
  return projects.filter((p) => p.hasDetail).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || !project.hasDetail) {
    return { title: "Projekti | Janne Kujala" };
  }
  return {
    title: `${project.title.fi} | Janne Kujala`,
    description: project.summary.fi,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.hasDetail) {
    notFound();
  }

  return <ProjectDetailContent project={project} />;
}
