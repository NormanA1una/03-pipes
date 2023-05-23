import { SafepasswordPipe } from './safepassword.pipe';

describe('SafepasswordPipe', () => {
  it('create an instance', () => {
    const pipe = new SafepasswordPipe();
    expect(pipe).toBeTruthy();
  });
});
