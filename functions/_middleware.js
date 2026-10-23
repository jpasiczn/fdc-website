// Adds X-Robots-Tag: noindex, nofollow on the staging workers.dev domain.
// fdcbonita.com is unaffected and remains indexable.
export async function onRequest(context) {
  const url = new URL(context.request.url);
  const response = await context.next();

  if (url.hostname.endsWith(".workers.dev")) {
    const headers = new Headers(response.headers);
    headers.set("X-Robots-Tag", "noindex, nofollow");
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }

  return response;
}
