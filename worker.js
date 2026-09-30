import puppeteer from "@cloudflare/puppeteer";

export default {
  async fetch(request, env) {
    const browser = await puppeteer.launch(env.BROWSER);

    const page = await browser.newPage();

    await page.goto("https://example.com", {
      waitUntil: "domcontentloaded"
    });

    const title = await page.title();

    await browser.close();

    return Response.json({
      success: true,
      title
    });
  }
};
