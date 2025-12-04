export async function onRequestPost({ request, env }) {
  const { id, content } = await request.json();
  await env.TEXT_STORE.put(id, content);
  return new Response(JSON.stringify({ ok: true }),
    { headers: { "Content-Type": "application/json" } });
}
