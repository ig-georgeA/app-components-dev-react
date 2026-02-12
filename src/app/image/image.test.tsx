import { beforeAll, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Image from './image';
import 'element-internals-polyfill';
import { setupTestMocks } from '../../setupTests';

beforeAll(() => {
  setupTestMocks();
})

test('renders Image component', () => {
  const wrapper = render(<Image />);
  expect(wrapper).toBeTruthy();
});