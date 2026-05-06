/**
 *  * poc_chat_backend
 * Architect: k4lantar4
 * Environment: Google Apps Script (V8 Runtime)
 */

function callGemini(userPrompt) {
  try {
    const scriptProperties = PropertiesService.getScriptProperties();
    const apiKey = scriptProperties.getProperty("GEMINI_API_KEY");

    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not defined in Script Properties.");
    }

    const systemPrompt =
      "شما همزاد دیجیتال (Digital Twin) و دستیار هوش مصنوعی Mrj هستید. او یک متخصص حرفه‌ای شبکه، سرورهای لینوکسی، داکر، دیتابیس و زیرساخت است. قانون اول: پاسخ‌های شما باید بسیار کوتاه، فنی، کوبنده و ترمینالی به زبان فارسی باشد. قانون دوم: در هر پاسخ، حتماً یک مثال عملی از کارهایی که Mrj انجام داده یا می‌تواند برای سیستم‌ها انجام دهد (مثل کانفیگ میکروتیک، راه‌اندازی Postgres با داکر، مانیتورینگ با n8n و گرافانا) بیاورید تا مدیران غیرفنی هم کاربرد مهارت او را درک کنند.";

    const payload = {
      contents: [{ parts: [{ text: userPrompt }] }],
      systemInstruction: { parts: [{ text: systemPrompt }] },
    };

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`;

    const options = {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(payload),
      muteHttpExceptions: true,
    };

    const response = UrlFetchApp.fetch(apiUrl, options);
    const responseCode = response.getResponseCode();
    const responseText = response.getContentText();

    if (responseCode !== 200) {
      throw new Error(
        `Upstream API failed with status ${responseCode}: ${responseText}`,
      );
    }

    const data = JSON.parse(responseText);
    const replyText =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "[ERROR] Invalid Output.";

    // Return plain object for google.script.run
    return { reply: replyText };
  } catch (error) {
    console.error(error.toString());
    return { error: "Server-side Runtime Error", details: error.toString() };
  }
}
