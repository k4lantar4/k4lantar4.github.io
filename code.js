/**
 * * MRJ Digital Twin Backend
 * Environment: Google Apps Script
 */

function callGemini(userPrompt) {
  try {
    const scriptProperties = PropertiesService.getScriptProperties();
    const apiKey = scriptProperties.getProperty("GEMINI_API_KEY");

    if (!apiKey) throw new Error("API Key Missing");

    // استک فنی با فرمت درخواستی (یک خط برای هر مورد)
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
    3. تخصص‌ها: هنگام صحبت از مهارت‌ها، دقیقاً از این منطق استفاده کنید: ${myStack}
    4. مثال عملی: در هر پاسخ، یک مثال واقعی از کارهایی که برای صنایع یا شبکه انجام داده‌اید بیاورید.
    5. پیشنهادات: در انتهای هر پاسخ، حتماً 3 سوال هوشمندانه که کاربر ممکن است بخواهد بپرسد را با این فرمت دقیق اضافه کنید:
       [SUGGESTIONS]: سوال اول؟ | سوال دوم؟ | سوال سوم؟
    6. کوتاهی: پاسخ‌ها را در حد یک پاراگراف فنی و کوبنده نگه دارید.
    `;

    const payload = {
      contents: [{ parts: [{ text: userPrompt }] }],
      systemInstruction: { parts: [{ text: systemPrompt }] },
    };

    const fetchModel = (modelId) => {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelId}:generateContent?key=${apiKey}`;
      return UrlFetchApp.fetch(url, {
        method: "post",
        contentType: "application/json",
        payload: JSON.stringify(payload),
        muteHttpExceptions: true,
      });
    };

    // Active Node (Primary)
    let response = fetchModel("gemini-1.5-flash");

    // Failover Node (Fallback)
    if (response.getResponseCode() !== 200) {
      response = fetchModel("gemini-flash-latest");
    }

    // Circuit Breaker (Total Failure)
    if (response.getResponseCode() !== 200) {
      throw new Error(
        `All upstream models failed: ${response.getContentText()}`,
      );
    }

    const data = JSON.parse(response.getContentText());
    const replyText =
      data.candidates?.[0]?.content?.parts?.[0]?.text || "خطا در پردازش.";

    return { reply: replyText };
  } catch (error) {
    return { error: error.toString() };
  }
}
