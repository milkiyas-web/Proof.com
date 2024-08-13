

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import { Textarea } from "@/components/ui/textarea"
  import { Plus } from "lucide-react";
  import { createProject } from "@/actions/createProject";
  import { Button } from "@/components/ui/MovingBorders";
  import SubmitButton from "@/components/SubmitProjBtn";
  import { auth } from "@clerk/nextjs/server";
  import { db } from "@/db";
  import { projects } from "@/db/schema";
  import { eq } from "drizzle-orm";
  
  
  
  const Dashboard = async () => {
    const { userId } = auth();
    if(!userId) return null;
    const userProjects = await db.select().from(projects).where(eq(projects.userId, userId));
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button  className="rounded-full bg-black">
            <Plus className="w-4 h-4"/></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] rounded-md">
          <DialogHeader>
            <DialogTitle>New Project</DialogTitle>
            <DialogDescription>
              Create a new project to get started
            </DialogDescription>
          </DialogHeader>
          <form className="flex gap-4 flex-col" action={createProject}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Project Name" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="url">URL</Label>
                <Input id="url" name="url" placeholder="https://example.com" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea name="description" id="description" placeholder="Description (optional)" />
            </div>
            <SubmitButton />        
            </form>
        </DialogContent>
      </Dialog>
    )
  };
  
  export default Dashboard;