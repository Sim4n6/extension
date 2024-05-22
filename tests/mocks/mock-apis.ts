import { Page } from '@playwright/test';
import { json } from '@tests/utils';

import { mockStacksFeeRequests } from '@app/query/stacks/fees/fee.query.mocks';

export async function setupMockApis(page: Page) {
  await page.route(/chrome-extension/, route => route.continue());
  await page.route(/github/, route => route.fulfill(json({})));
  await mockStacksFeeRequests(page);
}
