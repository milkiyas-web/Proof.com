import { Divide } from "lucide-react";

export interface TimelineData {
  tittle: string;
  image: string;
  text: string;
}

export const TimelineData: TimelineData[] = [
  {
    tittle: "Step 1: Sign up",
    image: "../public/demo.gif",
    text: "Start by signing up on our platform to create your account and access the dashboard where you can manage your reviews and widgets.",
  },
  {
    tittle: "Step 2: Go to Dashboard",
    image: "../public/demo.gif",
    text: "Once signed up, navigate to the dashboard where you can view your projects and manage your review collection strategies.",
  },
  {
    tittle: "Step 3: Choose Your Review Collection Method",
    image: "../public/demo.gif",
    text: "Decide whether you want to embed a review widget on your site or share a unique link with your customers to gather feedback directly.",
  },
  {
    tittle: "Step 4: View and manage your reviews",
    image: "../public/demo.gif",
    text: "Access all collected reviews in one place. Manage and leverage customer feedback to enhance your services.",
  },
  // Add more events here
];
