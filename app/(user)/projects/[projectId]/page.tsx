import { db } from "@/db/index"
import { eq } from "drizzle-orm"
import {  projects, reviews } from "@/db/schema";
import * as schema from "@/db/schema";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { index } from "drizzle-orm/mysql-core";


const page = async ({ params }: {
    params: {
      projectId: string
    }
  }) => {
     
    
    if (!params.projectId) return (<div>Invalid Project ID</div>);
    const project = await db.query.projects.findMany({
              where: (eq(projects.id, parseInt(params.projectId))),
              with: {
                   reviews: true
               }
           });

    console.log(project)
    
    return (
        <div>
            Reviews page
            {project.map((project, index) => {
              return (
                <div className="container" key={index}>
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                  <h3>Reviews</h3>
                  {project.reviews.map((review, index) => {
                    return (
                      <div key={index}>
                        <p>{review.review}</p>
                        <p>{review.customerName}</p>
                        <p>{review.customerEmail}</p>
                      </div>
                    )
                  })}
                </div>
              )
            })}
        </div>
    )
}
export default page