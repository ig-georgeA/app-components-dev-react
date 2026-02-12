import { beforeAll, expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import PivotGrid from './pivot-grid';
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

test('renders PivotGrid component', () => {
  const wrapper = render(<PivotGrid />);
  expect(wrapper).toBeTruthy();
});