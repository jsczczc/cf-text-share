export async function onRequestPost({ request, env }) {
  const { password } = await request.json();

  if (password === env.SITE_PASSWORD) {
    return new Response(JSON.stringify({ ok: true }));
  } else {
    return new Response(JSON.stringify({ ok: false }), { status: 403 });
  }
}
