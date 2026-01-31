import { test, expect } from '@playwright/test';

test.describe('Singlish to Sinhala Translation – Assignment Test Suite', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    await page.waitForSelector('#inputText', { state: 'visible', timeout: 20000 });
  });


  test('TC_POS_01 Simple present tense', async ({ page }) => {
    await page.fill('#inputText', 'man gedara yanawa');
    await expect(page.locator('#outputText')).toHaveText('මං ගෙදර යනවා');
  });

  test('TC_POS_02 Past tense', async ({ page }) => {
    await page.fill('#inputText', 'man gedara giya');
    await expect(page.locator('#outputText')).toContainText('ගියා');
  });

  test('TC_POS_03 Future tense', async ({ page }) => {
    await page.fill('#inputText', 'man heta enawa');
    await expect(page.locator('#outputText')).toContainText('හෙට');
  });

  test('TC_POS_04 Negative sentence', async ({ page }) => {
    await page.fill('#inputText', 'man gedara yanne ne');
    await expect(page.locator('#outputText')).toContainText('නෑ');
  });

  test('TC_POS_05 Question form', async ({ page }) => {
    await page.fill('#inputText', 'oya kohomada inne');
    await expect(page.locator('#outputText')).toContainText('කොහොමද');
  });

  test('TC_POS_06 Command sentence', async ({ page }) => {
    await page.fill('#inputText', 'enna ikmanata');
    await expect(page.locator('#outputText')).toContainText('ඉක්මනට');
  });

  test('TC_POS_07 Greeting', async ({ page }) => {
    await page.fill('#inputText', 'ayubowan');
    await expect(page.locator('#outputText')).toHaveText('ආයුබෝවන්');
  });

  test('TC_POS_08 Polite request', async ({ page }) => {
    await page.fill('#inputText', 'karunakarala mata help ekak denna');
    await expect(page.locator('#outputText')).toContainText('කරුණාකර');
  });

  test('TC_POS_09 Informal phrasing', async ({ page }) => {
    await page.fill('#inputText', 'mokada karanne');
    await expect(page.locator('#outputText')).toContainText('කරන්නේ');
  });

  test('TC_POS_10 Daily conversation', async ({ page }) => {
    await page.fill('#inputText', 'man bath kanne');
    await expect(page.locator('#outputText')).toContainText('බත්');
  });

  test('TC_POS_11 Repeated words emphasis', async ({ page }) => {
    await page.fill('#inputText', 'hondatama hondatama');
    await expect(page.locator('#outputText')).toContainText('හොඳටම');
  });

  test('TC_POS_12 Joined words', async ({ page }) => {
    await page.fill('#inputText', 'mageamma gedara inne');
    await expect(page.locator('#outputText')).toContainText('අම්මා');
  });

  test('TC_POS_13 Segmented words', async ({ page }) => {
    await page.fill('#inputText', 'mage amma gedara inne');
    await expect(page.locator('#outputText')).toContainText('අම්මා');
  });

  test('TC_POS_14 Singular noun', async ({ page }) => {
    await page.fill('#inputText', 'lamaya enawa');
    await expect(page.locator('#outputText')).toContainText('ළමයා');
  });

  test('TC_POS_15 Plural noun', async ({ page }) => {
    await page.fill('#inputText', 'lamai enawa');
    await expect(page.locator('#outputText')).toContainText('ළමයි');
  });

  test('TC_POS_16 Pronoun variation', async ({ page }) => {
    await page.fill('#inputText', 'oya monawada karanne');
    await expect(page.locator('#outputText')).toContainText('ඔයා');
  });

  test('TC_POS_17 English technical term', async ({ page }) => {
    await page.fill('#inputText', 'man laptop eka repair karanawa');
    await expect(page.locator('#outputText')).toContainText('laptop');
  });

  test('TC_POS_18 Place name preservation', async ({ page }) => {
    await page.fill('#inputText', 'man Colombo yanawa');
    await expect(page.locator('#outputText')).toContainText('Colombo');
  });

  test('TC_POS_19 Short input (≤30 chars)', async ({ page }) => {
    await page.fill('#inputText', 'hari lassanai');
    await expect(page.locator('#outputText')).toHaveText('හරි ලස්සනයි');
  });

  test('TC_POS_20 Medium input', async ({ page }) => {
    await page.fill('#inputText', 'man gedara awilla bath kanna inne');
    await expect(page.locator('#outputText')).toContainText('ගෙදර');
  });

  test('TC_POS_21 Long input (≥300 chars)', async ({ page }) => {
    const longText = 'man gedara awilla ...'.repeat(20);
    await page.fill('#inputText', longText);
    await expect(page.locator('#outputText')).not.toBeEmpty();
  });

  test('TC_POS_22 Punctuation handling', async ({ page }) => {
    await page.fill('#inputText', 'oya kohomada? hari hondada!');
    await expect(page.locator('#outputText')).toContainText('?');
  });

  test('TC_POS_23 Numbers and currency', async ({ page }) => {
    await page.fill('#inputText', 'mata rs 500 oni');
    await expect(page.locator('#outputText')).toContainText('500');
  });

  test('TC_POS_24 Multiple spaces', async ({ page }) => {
    await page.fill('#inputText', 'man   gedara   yanawa');
    await expect(page.locator('#outputText')).toContainText('ගෙදර');
  });


  test('TC_NEG_01 Invalid grammar', async ({ page }) => {
    await page.fill('#inputText', 'man going gedara');
    await expect(page.locator('#outputText')).not.toHaveText('මං ගෙදර යනවා');
  });

  test('TC_NEG_02 Random symbols', async ({ page }) => {
    await page.fill('#inputText', '###@@@');
    await expect(page.locator('#outputText')).toBeEmpty();
  });

  test('TC_NEG_03 Unsupported language', async ({ page }) => {
    await page.fill('#inputText', 'こんにちは');
    await expect(page.locator('#outputText')).toBeEmpty();
  });

  test('TC_NEG_04 Only English sentence', async ({ page }) => {
    await page.fill('#inputText', 'This is a test');
    await expect(page.locator('#outputText')).toContainText('This');
  });

  test('TC_NEG_05 Mixed nonsense input', async ({ page }) => {
    await page.fill('#inputText', 'man $$$ gedara');
    await expect(page.locator('#outputText')).not.toContainText('ගෙදර');
  });

  test('TC_NEG_06 Empty input', async ({ page }) => {
    await page.fill('#inputText', '');
    await expect(page.locator('#outputText')).toBeEmpty();
  });

  test('TC_NEG_07 Only numbers', async ({ page }) => {
    await page.fill('#inputText', '12345');
    await expect(page.locator('#outputText')).toBeEmpty();
  });

  test('TC_NEG_08 Excessive repetition', async ({ page }) => {
    await page.fill('#inputText', 'man man man man');
    await expect(page.locator('#outputText')).not.toBeEmpty();
  });

  test('TC_NEG_09 Broken sentence structure', async ({ page }) => {
    await page.fill('#inputText', 'yanawa man gedara');
    await expect(page.locator('#outputText')).not.toHaveText('මං ගෙදර යනවා');
  });

  test('TC_NEG_10 Unsupported emoji input', async ({ page }) => {
    await page.fill('#inputText', '😊😊');
    await expect(page.locator('#outputText')).toBeEmpty();
  });


  test('TC_UI_01 Clear button clears input and output', async ({ page }) => {
    await page.fill('#inputText', 'man gedara yanawa');
    await page.click('#clearBtn');
    await expect(page.locator('#inputText')).toHaveValue('');
    await expect(page.locator('#outputText')).toBeEmpty();
  });

});
