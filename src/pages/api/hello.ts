import type { APIRoute } from "astro";
import "dotenv/config";

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      greeting: "Hello",
      key: process.env.SECRET_KEY,
    })
  );
};
