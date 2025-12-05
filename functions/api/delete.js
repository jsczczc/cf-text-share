export async function onRequestPost({ request, env }) {
  const { id } = await request.json();
  await env.TEXT_STORE.delete(id);
  return new Response(JSON.stringify({ ok: true }), {
    headers: { "Content-Type": "application/json" }
  });
}
