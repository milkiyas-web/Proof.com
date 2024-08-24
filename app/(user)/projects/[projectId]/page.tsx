import { db } from "@/db/index";
import { desc, eq } from "drizzle-orm";
import { projects, reviews } from "@/db/schema";
import * as schema from "@/db/schema";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { index } from "drizzle-orm/mysql-core";
import Image from "next/image";
import logo from "../../../../public/proof-logo.png";
import { Briefcase, BriefcaseIcon, HomeIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const page = async ({
  params,
}: {
  params: {
    projectId: string;
  };
}) => {
  if (!params.projectId) return <div>Invalid Project ID</div>;
  const project = await db.query.projects.findMany({
    where: eq(projects.id, parseInt(params.projectId)),
    with: {
      reviews: true,
    },
  });

  console.log(project);

  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden flex-col border-r bg-background p-4 md:flex">
        <Image src={logo} alt="logo" width={80} height={80} />
        <nav className="hidden">
          <Link
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
            prefetch={false}
          >
            <HomeIcon className="h-4 w-4" />
            Reviews
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
            prefetch={false}
          >
            <BriefcaseIcon className="h-4 w-4" />
            Projects
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
            prefetch={false}
          >
            Videos
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
            prefetch={false}
          >
            Settings
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
            prefetch={false}
          >
            Logout
          </Link>
        </nav>
      </div>
      <div className="flex-1">
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">
            Here are the reviews for {project[0].name}
          </h2>
          <p className="text-muted-foreground">
            To get your reviews, send this{" "}
            {/* <Link
              //href="#"
              href={`${process.env.NEXT_PUBLIC_BASE_URL}/reviews/${newProject[0].id}`}
              className="text-blue-600 underline"
              prefetch={false}
            >
              Link{" "}
            </Link>{" "} */}
            to your customers
          </p>
        </div>

        {project.map((project, index) => {
          return (
            <div key={index} className="container">
              <h3>Reviews</h3>
              {project.reviews.map((review, index) => {
                return (
                  <Card
                    key={index}
                    className="w-full max-w-lg p-6 bg-white border border-muted rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12 border">
                        <AvatarImage
                          src="../../public/user.jpg"
                          alt="user"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <div className="font-semibold">
                          {review.customerName}

                        </div>
                        <div className="grid gap-1">
                          {review.customerEmail}
                        </div>
                        <div>
                          {review.review}
                        </div>
                        <div className="ml-auto hidden sm:flex items-center gap-0.5">
                          <StarIcon className="w-5 h-5 fill-primary" />
                          <StarIcon className="w-5 h-5 fill-primary" />
                          <StarIcon className="w-5 h-5 fill-primary" />
                          <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                          <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default page;














