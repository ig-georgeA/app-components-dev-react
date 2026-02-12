import { beforeAll, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import CardCalendar from './card-calendar';
import 'element-internals-polyfill';
import { setupTestMocks } from '../../setupTests';

beforeAll(() => {
  setupTestMocks();
})

test('renders CardCalendar component', () => {
  const wrapper = render(<CardCalendar />);
  expect(wrapper).toBeTruthy();
});