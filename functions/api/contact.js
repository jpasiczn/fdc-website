// [[CONFIGURE: wire up email / CRM routing here before going live.]]
// Recommended options: Cloudflare Email Workers, Resend, Mailgun, or post to your CRM webhook.
// Until this handler is configured, form submissions are logged but not delivered.

export async function onRequestPost(context) {
  let body;
  try {
    body = await context.request.formData();
  } catch {
    return json({ ok: false, error: "Invalid form data" }, 400);
  }

  const name = (body.get("name") ?? "").trim();
  const phone = (body.get("phone") ?? "").trim();
  const inquiryType = (body.get("inquiryType") ?? "").trim();
  const message = (body.get("message") ?? "").trim();

  if (!name || !phone) {
    return json({ ok: false, error: "Name and phone are required" }, 422);
  }

  // [[TODO: send email or POST to CRM]]
  // Example with Resend:
  //   const resend = new Resend(context.env.RESEND_API_KEY);
  //   await resend.emails.send({ from: "site@fdcbonita.com", to: "welcome@fdcbonita.com", ... });
  console.log("Lead form submission:", { name, phone, inquiryType, message });

  return json({ ok: true }, 200);
}

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
