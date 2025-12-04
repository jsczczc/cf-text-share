export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  const value = await env.TEXT_STORE.get(id);
  if (!value) {
    return new Response("未找到该文本", { status: 404 });
  }

  return new Response(value);
}
