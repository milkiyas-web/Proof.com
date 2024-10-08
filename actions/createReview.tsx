"use server";
import { db } from "@/db"
import { projects, reviews } from "@/db/schema"
import { auth, currentUser } from "@clerk/nextjs/server"
import { Description } from "@radix-ui/react-dialog";
import { redirect } from "next/navigation";
export async function createReview(formData: FormData) {
    //const allProjects = await db.select().from(projects);
    //const { userId } = auth();
    const review = {
        customerName: formData.get("customerName") as string,
        customerEmail: formData.get("customerEmail") as string,
        review: formData.get("review") as string,
        rating: parseInt(formData.get("rating") as string, 10)
    }
    const [newReview] = await db.insert(reviews).values(review).returning({ id: reviews.id })
    console.log(newReview);
    alert("Review created successfully. Thank you for your feedback!");
    //redirect(`/projects/${newProject.insertedId}/instructions`);
    return new Response(JSON.stringify(newReview), { status: 200 });

}

