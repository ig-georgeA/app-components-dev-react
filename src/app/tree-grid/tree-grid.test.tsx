import { beforeAll, expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import TreeGrid from './tree-grid';
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

test('renders TreeGrid component', () => {
  const wrapper = render(<TreeGrid />);
  expect(wrapper).toBeTruthy();
});