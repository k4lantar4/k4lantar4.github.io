// Endpoint will automatically mount at: /chat
export async function onRequestPost(context) {
  try {
    const request = context.request;
    const env = context.env;
    const body = await request.json();

    const systemPrompt =
      "شما همزاد دیجیتال (Digital Twin) و دستیار هوش مصنوعی Mrj هستید. او یک متخصص حرفه‌ای شبکه، سرورهای لینوکسی، داکر، دیتابیس و زیرساخت است. قانون اول: پاسخ‌های شما باید بسیار کوتاه، فنی، کوبنده و ترمینالی به زبان فارسی باشد. قانون دوم: در هر پاسخ، حتماً یک مثال عملی از کارهایی که Mrj انجام داده یا می‌تواند برای سیستم‌ها انجام دهد (مثل کانفیگ میکروتیک، راه‌اندازی Postgres با داکر، مانیتورینگ با n8n و گرافانا) بیاورید تا مدیران غیرفنی هم کاربرد مهارت او را درک کنند.";
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
