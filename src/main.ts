import { VolumeController } from './lib/volume/volume-control.js';

export const main = (): void => {
  const volumeController = new VolumeController();
  volumeController.increaseVolume();
  volumeController.decreaseVolume();
};

main();
