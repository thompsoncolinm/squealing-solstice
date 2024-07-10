import { test, expect } from '@playwright/test'
import { SITE_TITLE } from '../src/consts'

test('meta is correct', async ({ page }) => {
  await page.goto('http://localhost:4321/')
  await expect(page).toHaveTitle(SITE_TITLE)
})

test('pow', async ({ page }) => {
  await page.goto('http://localhost:4321/')

  const result = await page.evaluate(() => {
    // Assuming pow is now attached to the window object or otherwise made global
    return pow(2, 3)
  })

  // Assert the expected result, considering the function might not be found
  if (result !== undefined) {
    expect(result).toBe(8)
  } else {
    throw new Error('pow function is not defined on the page')
  }
})
