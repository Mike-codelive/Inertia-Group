import '@testing-library/jest-dom';
import { TextDecoder, TextEncoder } from 'util';
import gsapMock from './mocks/gsap';

Object.defineProperty(globalThis, 'TextEncoder', {
  writable: true,
  value: TextEncoder,
});

Object.defineProperty(globalThis, 'TextDecoder', {
  writable: true,
  value: TextDecoder,
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }),
});

jest.mock('gsap', () => ({
  __esModule: true,
  default: gsapMock,
  gsap: gsapMock,
}));

class ResizeObserverMock {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
}

class IntersectionObserverMock {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
}

Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: ResizeObserverMock,
});

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: IntersectionObserverMock,
});

Object.defineProperty(globalThis, 'ResizeObserver', {
  writable: true,
  value: ResizeObserverMock,
});

Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  value: IntersectionObserverMock,
});

Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: jest.fn(),
});

Object.defineProperty(window, 'print', {
  writable: true,
  value: jest.fn(),
});

Element.prototype.scrollIntoView = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});
