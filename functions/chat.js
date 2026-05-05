// Endpoint will automatically mount at: /chat
export async function onRequestPost(context) {
  try {
    const request = context.request;
    const env = context.env;
    const body = await request.json();

    const systemPrompt = "YOUR_SYSTEM_PROMPT";
    const payload = {
      contents: [{ parts: [{ text: body.prompt }] }],
      systemInstruction: { parts: [{ text: systemPrompt }] },
    };

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${env.GEMINI_API_KEY}`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Upstream API failed: ${response.status}`);
    }

    const data = await response.json();
    const replyText =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "[ERROR] Invalid Output.";

    return new Response(JSON.stringify({ reply: replyText }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Edge Function Runtime Error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
