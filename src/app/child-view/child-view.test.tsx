import { beforeAll, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import ChildView from './child-view';
import 'element-internals-polyfill';
import { setupTestMocks } from '../../setupTests';

beforeAll(() => {
  setupTestMocks();
})

test('renders ChildView component', () => {
  const wrapper = render(<ChildView />);
  expect(wrapper).toBeTruthy();
});