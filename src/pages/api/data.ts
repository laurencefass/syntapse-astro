import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  console.log("params", params);
  return new Response(
    JSON.stringify({
      name: "Astro",
      path: new URL(request.url).pathname,
      url: "https://astro.build/",
    })
  );
};
