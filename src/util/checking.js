/**
 * @param {string} k
 * @param {object} o
 */
function isKeyExists(k, o) { return (typeof o !== "undefined" && Object.keys(o).includes(k)) ? true : false; }

/**
 * 
 * @param {HTMLElement} elm 
 * @returns {boolean}
 */
function isOverflown(elm) { return elm.scrollWidth > elm.clientWidth; }

export { isKeyExists, isOverflown };