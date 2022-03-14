/**
 * @param {string} s 
 * @param {number} start 
 * @param {number} end 
 * @returns 
 */
function Preview(s, start = 0, end = 300) { return (s.length !== 0) ? s.slice(start, end) : ""; }

export { Preview };