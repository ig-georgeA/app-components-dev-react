import { beforeAll, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Carousel from './carousel';
import 'element-internals-polyfill';
import { setupTestMocks } from '../../setupTests';

beforeAll(() => {
  setupTestMocks();
})

test('renders Carousel component', () => {
  const wrapper = render(<Carousel />);
  expect(wrapper).toBeTruthy();
});