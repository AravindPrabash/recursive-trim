/**
 * Recursively trims all string values within an object or array.
 *
 * @param {any} val - The input value to trim.
 * @returns {any} The trimmed value.
 */
function recursiveTrim(val) {
  if (Array.isArray(val)) {
    return val.map(recursiveTrim);
  }
  if (val !== null && typeof val === 'object') {
    const newObj = {};
    for (const key in val) {
      if (Object.prototype.hasOwnProperty.call(val, key)) {
        newObj[key] = recursiveTrim(val[key]);
      }
    }
    return newObj;
  }
  if (typeof val === 'string') {
    return val.trim();
  }
  return val;
}

export default recursiveTrim;
