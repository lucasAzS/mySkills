/* eslint-disable no-undef */
describe('Primeiro Test', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('check regiter of new skill', async () => {
    const inputNewSkill = await element(by.id('input-new'));
    const btnAdd = await element(by.id('btn-add'));

    await inputNewSkill.tap();
    await inputNewSkill.typeText('React Native');

    await btnAdd.tap();
  });
});
