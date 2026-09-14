import { expect, test } from '@playwright/test';

test('renders the complete gallery without broken images', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('#food-gallery-title')).toHaveText('Food Photo Gallery');
  await expect(page.locator('#food-grid-main article')).toHaveCount(9);

  const images = page.locator('#food-grid-main img');
  await expect(images).toHaveCount(9);

  for (const image of await images.all()) {
    await image.scrollIntoViewIfNeeded();
    await expect(image).toBeVisible();
    await expect.poll(async () => image.evaluate((element) => {
      const imageElement = element as HTMLImageElement;
      return imageElement.complete && imageElement.naturalWidth > 0;
    })).toBe(true);
  }
});

test('uses three columns on desktop and one column on mobile', async ({ page }, testInfo) => {
  await page.goto('/');

  const firstRowGrid = page.locator('#food-row-1-dessert > div.grid');
  const computedColumns = await firstRowGrid.evaluate((element) => (
    getComputedStyle(element).gridTemplateColumns.split(' ').length
  ));

  if (testInfo.project.name === 'desktop') {
    expect(computedColumns).toBe(3);
  } else {
    expect(computedColumns).toBe(1);
  }

  const cards = page.locator('#food-row-1-dessert article');
  const cardBoxes = await cards.evaluateAll((elements) => (
    elements.map((element) => {
      const { x, y, width } = element.getBoundingClientRect();
      return { x, y, width };
    })
  ));

  expect(new Set(cardBoxes.map(({ width }) => Math.round(width))).size).toBe(1);
  if (testInfo.project.name === 'desktop') {
    expect(new Set(cardBoxes.map(({ y }) => Math.round(y))).size).toBe(1);
    expect(new Set(cardBoxes.map(({ x }) => Math.round(x))).size).toBe(3);
  } else {
    expect(new Set(cardBoxes.map(({ y }) => Math.round(y))).size).toBe(3);
  }
});