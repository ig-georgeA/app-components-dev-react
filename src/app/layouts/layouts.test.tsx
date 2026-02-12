import { beforeAll, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Layouts from './layouts';
import 'element-internals-polyfill';
import { setupTestMocks } from '../../setupTests';

beforeAll(() => {
  setupTestMocks();
})

test('renders Layouts component', () => {
  const wrapper = render(<Layouts />);
  expect(wrapper).toBeTruthy();
});