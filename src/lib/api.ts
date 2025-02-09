import { ApiData } from "./type";

export async function fetchData(): Promise<ApiData> {
  const res = await fetch("/data/data.json"); // Fetch from the public folder
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}