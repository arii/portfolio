import { describe, it, expect } from 'vitest';
import { RESEARCH_TOOLS } from '../data/researchTools';
import { RESEARCH_AUTONOMOUS } from '../data/research-papers';

describe('PhD Research Data Layer Entries', () => {
  it('contains the Conformant Planning PhD research entry with correct description and tags', () => {
    const entry = RESEARCH_TOOLS.find((t) => t.id === 'conformant-planning-manipulation');
    expect(entry).toBeDefined();
    expect(entry?.title).toBe('Reliably Arranging Objects: Conformant Planning for Robot Manipulation');
    expect(entry?.description).toBe(
      'Willow Garage PR2 robot manipulation under uncertainty, fixture optimization for push/assembly reliability (increasing Tetris reliability from 1.9% to 80.7%), and belief-state planning without external sensing.'
    );
    expect(entry?.tags).toEqual(['Robotics', 'Planning', 'PhD Thesis']);
    expect(entry?.image).toBe('/assets/research/phd/tetris1.png');
  });

  it('contains the Belief State Visualization PhD research entry with correct description and tags', () => {
    const entry = RESEARCH_TOOLS.find((t) => t.id === 'belief-state-visualization');
    expect(entry).toBeDefined();
    expect(entry?.title).toBe('Belief State Visualization & Action Noise Characterization');
    expect(entry?.description).toBe(
      'Experimental noise characterization of grasping/placing actions and algorithm belief-state overlays.'
    );
    expect(entry?.tags).toEqual(['Robotics', 'Research']);
    expect(entry?.image).toBe('/assets/research/phd/beliefoverlay.png');
  });

  it('exports both PhD entries in RESEARCH_AUTONOMOUS array', () => {
    const conformantEntry = RESEARCH_AUTONOMOUS.find((t) => t.id === 'conformant-planning-manipulation');
    const beliefEntry = RESEARCH_AUTONOMOUS.find((t) => t.id === 'belief-state-visualization');

    expect(conformantEntry).toBeDefined();
    expect(beliefEntry).toBeDefined();
  });
});
