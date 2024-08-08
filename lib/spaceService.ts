import Space from "@/db/space.model";

interface CreateSpaceInput {
  userId: string;
  spaceName: string;
  customMessage: string;
  heading: string;
  subHeading: string;
  image: string; // URL to the image stored on Cloudinary
}

export const createSpace = async (input: CreateSpaceInput) => {
  const { userId, spaceName, customMessage, heading, subHeading, image } = input;
  
  const newSpace = new Space({
    userId,
    spaceName,
    customMessage,
    heading,
    subHeading,
    image,
  });

  await newSpace.save();
  return newSpace;
};
