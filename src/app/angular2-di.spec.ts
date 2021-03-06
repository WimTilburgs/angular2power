import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Angular2DiApp} from '../app/angular2-di';

beforeEachProviders(() => [Angular2DiApp]);

describe('App: Angular2Di', () => {
  it('should have the `defaultMeaning` as 42', inject([Angular2DiApp], (app) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Angular2DiApp], (app) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

