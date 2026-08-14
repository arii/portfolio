import os
from playwright.sync_api import sync_playwright

def main():
    os.makedirs('/home/jules/verification/screenshots', exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1280, "height": 1600})

        # Capture Home page
        print("Navigating to http://localhost:3000/#/...")
        page.goto("http://localhost:3000/#/")
        page.wait_for_timeout(1000)
        page.screenshot(path="/home/jules/verification/screenshots/home_redesigned.png", full_page=True)
        print("Home screenshot captured!")

        # Capture Research page
        print("Navigating to http://localhost:3000/#/research...")
        page.goto("http://localhost:3000/#/research")
        page.wait_for_timeout(1000)
        page.screenshot(path="/home/jules/verification/screenshots/research_redesigned.png", full_page=True)
        print("Research screenshot captured!")

        browser.close()

if __name__ == "__main__":
    main()
