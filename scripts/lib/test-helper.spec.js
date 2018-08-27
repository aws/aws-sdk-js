const {execute, executeLongProcess} = require('./test-helper');
const {expect} = require('chai');

describe('execute command', (done) => {
  it('doesn\'t retry if succeed', async() => {
    let error;
    try {
      await execute(['exit 0'], {}, 2);
    } catch (e) {
     error = e;
    } finally {
      expect(error).eql(undefined);
    }
  });

  it('can retry command', async () => {
    let error;
    try {
      await execute(['exit 1'], {}, 2);
    } catch (e) {
     error = e;
    } finally {
      expect(error).not.undefined;
      expect(typeof error.message).eql('string');
    }
  })
});

describe('executeLongProcess command', (done) => {
  it('doesn\'t retry if succeed', async() => {
    let error;
    try {
      await executeLongProcess(['exit 0'], {shell: true}, 2);
    } catch (e) {
     error = e;
    } finally {
      expect(error).eql(undefined);
    }
  });

  it('can retry command', async () => {
    let error;
    try {
      await executeLongProcess(['echo \'a\' && exit 1'], {shell: true}, 2);
    } catch (e) {
     error = e;
    } finally {
      expect(error).not.undefined;
    }
  })
});
