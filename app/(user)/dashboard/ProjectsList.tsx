import React from 'react'
import { InferSelectModel } from 'drizzle-orm'
import { projects } from '@/db/schema';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import { Button } from '@/components/ui/MovingBorders';


type Project = InferSelectModel<typeof projects>;
type Props = {
    projects: Project[];
}
const projectList = (props: Props) => {
  return (
    <div>
        <ul className='grid grid-cols-1 md:grid-cols-3 m-5 p-4 gap-4'>
            {props.projects.map((project: Project )=> (
                <li key={project.id}>
                    <Card className='max-w-[350px] flex flex-col h-full'>
                        <CardHeader className="flex-1">
                            <CardTitle>
                                {project.name}
                            </CardTitle>
                            <CardDescription>
                                {project.description}
                            </CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Link href={`/projects/${project.id}`}>
                                <Button className='p-3 rounded-sm bg-black'>View Project</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default projectList