import { beforeAll, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Reveal from './reveal';
import 'element-internals-polyfill';
import { setupTestMocks } from '../../setupTests';
import {vi} from 'vitest'

// TODO: This mock should be removed when reveal is fixed
(globalThis as any).$ = {
  ig: {
    RevealSdkSettings: {
      setBaseUrl: vi.fn(),
      theme: {}
    },
    RevealTheme: vi.fn(),
    RVDashboard: {
      loadDashboard: vi.fn()
    },
    RevealView: vi.fn()
  }
};

beforeAll(() => {
  setupTestMocks();
})

test('renders Reveal component', () => {
  const wrapper = render(<Reveal />);
  expect(wrapper).toBeTruthy();
});