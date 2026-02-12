import { beforeAll, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import TypescalePalettes from './typescale-palettes';
import 'element-internals-polyfill';
import { setupTestMocks } from '../../setupTests';

beforeAll(() => {
  setupTestMocks();
})

test('renders TypescalePalettes component', () => {
  const wrapper = render(<TypescalePalettes />);
  expect(wrapper).toBeTruthy();
});