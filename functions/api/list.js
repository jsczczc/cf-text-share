export async function onRequestGet({ env }) {
  const list = await env.TEXT_STORE.list({ limit: 1000 });

  const keys = list.keys.map(item => item.name);

  return new Response(JSON.stringify(keys), {
    headers: { "Content-Type": "application/json" }
  });
}
