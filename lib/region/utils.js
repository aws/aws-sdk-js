function isFipsRegion(region) {
  return region && (region.startsWith('fips-') || region.endsWith('-fips'));
}

function getRealRegion(region) {
  return ['fips-aws-global', 'aws-fips'].includes(region)
      ? 'us-east-1'
      : region === 'fips-aws-us-gov-global'
      ? 'us-gov-west-1'
      : region.replace(/fips-(dkr-|prod-)?|-fips/, '');
}

module.exports = {
  isFipsRegion: isFipsRegion,
  getRealRegion: getRealRegion
};
