/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(s) {
  const resArr = s.match(/([@])(?!.*\1)(.*)$/);
  return resArr[resArr.length - 1];
}

module.exports = getEmailDomain;
