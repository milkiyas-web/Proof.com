import { db } from "@/db"
import { eq } from "drizzle-orm"
import { projects as dbProjects, projects, reviews } from "@/db/schema";
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/Button"
const page = async ({ params }: {
    params: {
        projectId: string
    }
}) => {
    if (!params.projectId) {
        return <div>Project ID is required</div>
    }
    // Example using Drizzle ORM
    // const project = await db.select().from(reviews).where
    // (eq(projects.id, parseInt(params.projectId)));
    const project = await db.select()
  .from(projects)
  .where(eq(projects.id, parseInt(params.projectId)))
  .with({ feedbacks: true });

    console.log(project)
    return (
        <div>

        </div>
    )
}
export default page