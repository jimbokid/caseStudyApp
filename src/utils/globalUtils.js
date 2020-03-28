/**
 * Reformat price number to string with dots and currency, example - 1000 => 1.000 kr
 *
 * @param {number} num
 * @returns {string}
 */
export const formatNumber = (num) => {
  return `${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} kr`
}
