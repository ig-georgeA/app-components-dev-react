import { beforeAll, expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import GridWithTemplates from './grid-with-templates';
import 'element-internals-polyfill';
import { setupTestMocks } from '../../setupTests';

beforeAll(() => {
  setupTestMocks();
})

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
globalThis.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders GridWithTemplates component', () => {
  const wrapper = render(<GridWithTemplates />);
  expect(wrapper).toBeTruthy();
});