require('../helpers');

var region_utils = require('../../lib/region/utils');

var isFipsRegion = region_utils.isFipsRegion;
var isGlobalRegion = region_utils.isGlobalRegion;
var getRealRegion = region_utils.getRealRegion;

describe(isFipsRegion.name, () => {
  [
    [true, 'fips-us-east-1'],
    [true, 'us-east-1-fips'],
    [false, 'us-east-1'],
  ].forEach(([output, input]) => {
    it('returns "' + output + '" for region "' + input + '"', () => {
      expect(isFipsRegion(input)).to.equal(output);
    });
  });

  [undefined, null].forEach((input) => {
    it('returns false for ' + input, () => {
      expect(isFipsRegion(input)).to.equal(false);
    });
  });
});

describe(isGlobalRegion.name, () => {
  [
    [true, 'aws-global'],
    [true, 'aws-us-gov-global'],
    [false, 'us-east-1'],
  ].forEach(([output, input]) => {
    it('returns "' + output + '" for region "' + input + '"', () => {
      expect(isGlobalRegion(input)).to.equal(output);
    });
  });

  [undefined, null].forEach((input) => {
    it('returns false for ' + input, () => {
      expect(isGlobalRegion(input)).to.equal(false);
    });
  });
});

describe(getRealRegion.name, () => {
  describe('returns real region if is pseudo region', () => {
    describe('special cases', () => {
      const cases = [
        ['fips-aws-global', 'us-east-1'],
        ['aws-fips', 'us-east-1'],
        ['aws-global', 'us-east-1'],
        ['fips-aws-us-gov-global', 'us-gov-west-1'],
        ['aws-us-gov-global', 'us-gov-west-1'],
      ];
      for (const [input, output] of cases) {
        it(`returns "${output}" for "${input}"`, () => {
          expect(getRealRegion(input)).to.equal(output);
        });
      }
    });

    describe('removes fips and optional dkr/prod from provided region', () => {
      const cases = [
        ['fips-us-east-1', 'us-east-1'],
        ['us-east-1-fips', 'us-east-1'],
        ['fips-dkr-us-east-1', 'us-east-1'],
        ['fips-prod-us-east-1', 'us-east-1'],
        ['fips-cn-north-1', 'cn-north-1'],
      ];
      for (const [input, output] of cases) {
        it(`returns "${output}" for "${input}"`, () => {
          expect(getRealRegion(input)).to.equal(output);
        });
      }
    });
  });

  it('returns passed region if it is real', () => {
    const cases = ['us-east-1', 'sa-east-1', 'me-south-1', 'eu-central-1', 'cn-north-1'];
    for (const region of cases) {
      expect(getRealRegion(region)).to.equal(region);
    }
  });
});
