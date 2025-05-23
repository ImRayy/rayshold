export interface Project {
  title: string;
  description: string;
  image: string;
  status: "PLANNING" | "WIP" | "COMPLETE";
  stack: string[];
  createdAt: Date;
}
