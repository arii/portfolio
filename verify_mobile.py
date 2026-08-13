import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        # Set viewport size to an iPhone 12/13 mobile viewport size (390 x 844)
        context = await browser.new_context(
            viewport={'width': 390, 'height': 844},
            record_video_dir="/home/jules/verification/videos"
        )
        page = await context.new_page()

        # Navigate to the About page on mobile
        print("Navigating to http://localhost:3000/#/about on mobile view...")
        await page.goto("http://localhost:3000/#/about")
        await page.wait_for_timeout(2000)
        screenshot_path_about = "/home/jules/verification/screenshots/about_mobile.png"
        await page.screenshot(path=screenshot_path_about, full_page=True)
        print(f"About Mobile Screenshot captured at: {screenshot_path_about}")

        # Navigate to the Home page on mobile
        print("Navigating to http://localhost:3000/#/ on mobile view...")
        await page.goto("http://localhost:3000/#/")
        await page.wait_for_timeout(2000)
        screenshot_path_home = "/home/jules/verification/screenshots/home_mobile.png"
        await page.screenshot(path=screenshot_path_home, full_page=True)
        print(f"Home Mobile Screenshot captured at: {screenshot_path_home}")

        await context.close()
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
