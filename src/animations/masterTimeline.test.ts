import gsapMock from '../../test/mocks/gsap';
import { masterTimeline } from './masterTimeline';

describe('masterTimeline', () => {
  it('creates a paused timeline with the expected labels', () => {
    expect(gsapMock.timeline).toHaveBeenCalledWith({ paused: true });
    expect(masterTimeline.addLabel).toHaveBeenCalledWith('introStart');
    expect(masterTimeline.addLabel).toHaveBeenCalledWith('introEnd');
    expect(masterTimeline.addLabel).toHaveBeenCalledWith('heroStart');
    expect(masterTimeline.addLabel).toHaveBeenCalledWith('heroEnd');
  });
});
