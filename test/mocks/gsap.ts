// const gsapMock = {
//   fromTo: jest.fn(),
//   to: jest.fn(),
//   from: jest.fn(),
//   set: jest.fn(),
//   kill: jest.fn(),
//   timeline: jest.fn(() => ({
//     to: jest.fn(),
//     fromTo: jest.fn(),
//     play: jest.fn(),
//   })),
// };

// export default gsapMock;

const timelineInstance = {
  to: jest.fn().mockReturnThis(),
  fromTo: jest.fn().mockReturnThis(),
  from: jest.fn().mockReturnThis(),
  play: jest.fn().mockReturnThis(),
  kill: jest.fn(),
};

const gsapMock = {
  fromTo: jest.fn(),
  to: jest.fn(),
  from: jest.fn(),
  set: jest.fn(),
  kill: jest.fn(),

  timeline: jest.fn(() => timelineInstance),

  context: jest.fn((callback: () => void) => {
    callback();
    return { revert: jest.fn() };
  }),

  matchMedia: jest.fn(() => ({
    add: jest.fn(),
    revert: jest.fn(),
  })),
};

export default gsapMock;
