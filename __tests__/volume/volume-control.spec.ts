import {
  VolumeController,
  Volume,
} from '../../src/lib/volume/volume-control.js';
jest.spyOn(global.console, 'log');

describe('VolumeController', () => {
  it('should have a default value of Low', () => {
    const volumeController = new VolumeController(Volume.Low);
    expect(volumeController.value).toEqual(1);
  });
  it('should increase volume', () => {
    const volumeController = new VolumeController(Volume.Low);
    expect(volumeController.increaseVolume()).toEqual(3);
    expect(console.log).toHaveBeenCalledWith(3);
  });
  it('should decrease volume', () => {
    const volumeController = new VolumeController(Volume.High);
    expect(volumeController.decreaseVolume()).toEqual(1);
    expect(console.log).toHaveBeenCalledWith(1);
  });
});
