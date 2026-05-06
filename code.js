/**
 * poc_gas_rest_api (GET Method Architecture)
 */

function doGet(e) {
  try {
    const userPrompt = e.parameter.prompt;

    if (!userPrompt) {
      return ContentService.createTextOutput(
        JSON.stringify({ error: "No prompt provided." }),
      ).setMimeType(ContentService.MimeType.JSON);
    }

    const result = processGemini(userPrompt);

    const output = ContentService.createTextOutput(JSON.stringify(result));
    output.setMimeType(ContentService.MimeType.JSON);

    return output;
  } catch (error) {
    const errorOutput = ContentService.createTextOutput(
      JSON.stringify({ error: error.toString() }),
    );
    errorOutput.setMimeType(ContentService.MimeType.JSON);

    return errorOutput;
  }
}

function processGemini(userPrompt) {
  const apiKey =
    PropertiesService.getScriptProperties().getProperty("GEMINI_API_KEY");

  if (!apiKey) {
    throw new Error("API Key Missing. Check Script Properties.");
  }

  const myStack = `
  - Docker: من تمام اپلیکیشن‌ها و دیتابیس‌ها را برای پایداری ۱۰۰٪ و ایزولاسیون کامل کانتینرایز می‌کنم.
  - MikroTik: طراحی و کانفیگ شبکه‌های صنعتی با مسیریابی پیچیده و تونل‌های امن تخصص من است.
  - PostgreSQL: مدیریت دیتابیس‌های سنگین و بهینه‌سازی کوئری‌ها برای جلوگیری از کندی سیستم.
  - Grafana & Prometheus: راه‌اندازی داشبوردهای مانیتورینگ برای دیدن وضعیت لحظه‌ای تمام سرورها.
  - n8n: اتوماتیک کردن تسک‌های تکراری و اتصال APIهای مختلف به هم برای حذف خطای انسانی.
  - Linux (Arch/Debian): مدیریت کلاسترها و امنیت سطح سیستم‌عامل خانه اصلی من است.
  `;

  const systemPrompt = `
  شما "محمدرضا" هستید (نام کامل: محمدرضا جنگی اشکنانی). شما یک متخصص ارشد زیرساخت و شبکه هستید.
  
  قوانین پاسخگویی:
  1. اول شخص: همیشه از "من" استفاده کنید (مثلاً: "من این پروژه را با داکر پیاده کردم").
  2. لحن: رسمی، اداری و مقتدر، اما ساده و بدون تکلف.
  3. در مورد تحصیلات بگو: "دانشگاه من محیط Production است. من مدرک جمع نمی‌کنم، زیرساخت پایدار می‌سازم."
  4. تخصص‌ها: هنگام صحبت از مهارت‌ها، دقیقاً از این منطق استفاده کنید: ${myStack}
  5. مثال عملی: در هر پاسخ، یک مثال واقعی از کارهایی که برای صنایع یا شبکه انجام داده‌اید بیاورید.
  6. پیشنهادات: در انتهای هر پاسخ، حتماً 3 سوال هوشمندانه که کاربر ممکن است بخواهد بپرسد را با این فرمت دقیق اضافه کنید:
     [SUGGESTIONS]: سوال اول؟ | سوال دوم؟ | سوال سوم؟
  7. کوتاهی: پاسخ‌ها را در حد یک پاراگراف فنی و کوبنده نگه دارید.
  `;

  const payload = {
    contents: [{ parts: [{ text: userPrompt }] }],
    systemInstruction: { parts: [{ text: systemPrompt }] },
  };

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`;

  const response = UrlFetchApp.fetch(url, {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
    muteHttpExceptions: true,
  });

  if (response.getResponseCode() !== 200) {
    throw new Error(`Upstream API failed: ${response.getContentText()}`);
  }

  const data = JSON.parse(response.getContentText());
  const replyText =
    data.candidates?.[0]?.content?.parts?.[0]?.text || "خطا در پردازش.";

  return { reply: replyText };
}
