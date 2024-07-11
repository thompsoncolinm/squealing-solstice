import { test, expect } from '@playwright/test'
import { SITE_TITLE } from '../src/consts'

test('meta is correct', async ({ page }) => {
  await page.goto('http://localhost:4321/')
  await expect(page).toHaveTitle(SITE_TITLE)
})
