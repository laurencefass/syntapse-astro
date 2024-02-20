import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  console.log("dynamic page: params", params);
  return new Response(
    JSON.stringify({
      name: "Astro",
      params: params,
      path: new URL(request.url).pathname,
      url: "https://astro.build/",
    })
  );
};

export const POST: APIRoute = ({ request }) => {
  return new Response(
    JSON.stringify({
      message: "This was a POST!",
    })
  );
};

export const DELETE: APIRoute = ({ request }) => {
  return new Response(
    JSON.stringify({
      message: "This was a DELETE!",
    })
  );
};

export const ALL: APIRoute = ({ request }) => {
  return new Response(
    JSON.stringify({
      message: `This was a ${request.method}!`,
    })
  );
};
