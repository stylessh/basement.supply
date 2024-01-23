import { Metadata } from "next";

interface InputMetadata {
  title: string;
  description?: string;
  image?: string;
}

export const createMetadata = (input: InputMetadata): Metadata => {
  const { title, description, image } = input;

  if (!process.env.NEXT_PUBLIC_HOST_URL) {
    throw new Error("NEXT_PUBLIC_HOST_URL is not defined");
  }

  const DEFAULT_DESCRIPTION = "A man can’t have enough base­ment swag.";
  const DEFAULT_OG_IMAGE = "/OG.png";

  const images = [
    {
      url: `${process.env.NEXT_PUBLIC_HOST_URL}${image || DEFAULT_OG_IMAGE}`,
      width: 1200,
      height: 630,
      alt: title,
    },
  ];

  return {
    title: `${title} | Basement Supply`,
    description: description || DEFAULT_DESCRIPTION,

    metadataBase: new URL(process.env.NEXT_PUBLIC_HOST_URL),

    openGraph: {
      title,
      description,
      images,
    },

    alternates: {
      canonical: process.env.NEXT_PUBLIC_HOST_URL,
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | Basement Supply`,
      creator: "@basementstudio",
      siteId: "@basementstudio",
    },
  };
};
