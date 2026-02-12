import { beforeAll, expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './app';
import 'element-internals-polyfill';
import { setupTestMocks } from '../setupTests';

beforeAll(() => {
  setupTestMocks();
})

test('renders App component', () => {
  const wrapper = render(<App />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});