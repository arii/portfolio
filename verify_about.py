import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        # Set viewport size to a high-resolution desktop view
        context = await browser.new_context(
            viewport={'width': 1280, 'height': 1600},
            record_video_dir="/home/jules/verification/videos"
        )
        page = await context.new_page()

        # Navigate to the About page (hash routing is used in main.tsx)
        print("Navigating to http://localhost:3000/#/about...")
        await page.goto("http://localhost:3000/#/about")

        # Wait for the image/fonts to load
        await page.wait_for_timeout(2000)

        # Take screenshot of the entire page
        screenshot_path = "/home/jules/verification/screenshots/about_redesigned.png"
        await page.screenshot(path=screenshot_path, full_page=True)
        print(f"Screenshot captured at: {screenshot_path}")

        await context.close()
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
