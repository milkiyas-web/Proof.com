"use server";
import { db } from "@/db"
import { projects } from "@/db/schema"
import { auth, currentUser } from "@clerk/nextjs/server"
import { Description } from "@radix-ui/react-dialog";
import { redirect } from "next/navigation";
export async function createProject(formData: FormData) {
  const { userId } = auth();
  const project = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    url: formData.get("url") as string,
    userId,
  }
  const [newProject] = await db.insert(projects).values(project).returning({ insertedId: projects.id })
  const shareableLink = `${process.env.NEXT_PUBLIC_BASE_URL}/reviews/${newProject.insertedId}`;
  console.log(shareableLink);
  redirect(`/projects/${newProject.insertedId}`);
  return { newProject, shareableLink }

}

