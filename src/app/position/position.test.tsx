import { beforeAll, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Position from './position';
import 'element-internals-polyfill';
import { setupTestMocks } from '../../setupTests';

beforeAll(() => {
  setupTestMocks();
})

test('renders Position component', () => {
  const wrapper = render(<Position />);
  expect(wrapper).toBeTruthy();
});