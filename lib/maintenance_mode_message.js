var warning = [
  'We are formalizing our plans to enter AWS SDK for JavaScript (v2) into maintenance mode in 2023.\n',
  'Please migrate your code to use AWS SDK for JavaScript (v3).',
  'For more information, check the migration guide at https://a.co/7PzMCcy'
].join('\n');

module.exports = {
  suppress: false
};

/**
 * To suppress this message:
 * @example
 * require('aws-sdk/lib/maintenance_mode_message').suppress = true;
 */
function emitWarning() {
  if (
    typeof process !== 'undefined' &&
    typeof process.emitWarning === 'function'
  ) {
    process.emitWarning(warning, {
      type: 'NOTE'
    });
  }
}

setTimeout(function () {
  if (!module.exports.suppress) {
    emitWarning();
  }
}, 0);
