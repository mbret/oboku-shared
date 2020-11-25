import * as sha256 from 'crypto-js/sha256';
import * as Base64 from 'crypto-js/enc-base64'

/**
 * The contentPassword is for user content protection. It is made to work
 * offline and therefore is not secured yet. This is not intended for
 * fully secured solution
 */
export const hashContentPassword = (password: string) => {
  return sha256(password).toString();
}