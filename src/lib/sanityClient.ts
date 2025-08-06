import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "rgbwb8zg",
  dataset: "production",
  apiVersion: "2024-05-20",
  useCdn: false,
});