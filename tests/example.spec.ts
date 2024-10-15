import { test, expect } from '@playwright/test';

test('animationend works as expected', async ({ page }) => {
  await page.goto('http://localhost:8080');
  
  await expect(page.getByTestId('my-testid')).toHaveAttribute('data-state', 'opened');
});
