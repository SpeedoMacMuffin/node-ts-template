import * as main from '../src/main.js';
jest.spyOn(global.console, 'log');

describe('main', () => {
  it('should run', () => {
    main.main();
    expect(console.log).toHaveBeenCalledWith(3);
    expect(console.log).toHaveBeenCalledWith(1);
  });
});
