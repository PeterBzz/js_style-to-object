'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .filter((val) => {
      return val.includes(':');
    })
    .forEach((val) => {
      const [key, value] = val.split(':').map((val2) => {
        return val2.trim();
      });

      result[key] = value;
    });

  return result;
}

module.exports = convertToObject;
