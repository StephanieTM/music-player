module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
  ],
  rules: {
    'value-keyword-case': ['lower', {
      ignoreProperties: ['/^.*$/'],
    }],
  },
};
