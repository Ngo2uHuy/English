import { describe, it, expect } from 'vitest';
import { SoundService } from '../src/services/sound-service.js';

describe('SoundService Suite', () => {
  it('should toggle sound mute state', () => {
    const initialMute = SoundService.isMuted();
    const toggled = SoundService.toggleMute();
    expect(toggled).toBe(!initialMute);
    expect(SoundService.isMuted()).toBe(toggled);
    
    // Reset back
    SoundService.toggleMute();
  });

  it('should call sound effect triggers without throwing errors', () => {
    expect(() => SoundService.playCorrect()).not.toThrow();
    expect(() => SoundService.playError()).not.toThrow();
    expect(() => SoundService.playCombo()).not.toThrow();
    expect(() => SoundService.playTick()).not.toThrow();
  });
});
