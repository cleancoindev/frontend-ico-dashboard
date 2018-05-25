import config from '../config';

export const shortAddress = (address) =>
  `${address.substring(0, 6)}...${address.substring(address.length - 6)}`;


export const bigNum = (num, limit = 6) => {
  const string = String(num);
  const array = string.split('.');

  if (num === '' || num === 0) {
    return '';
  }

  if (string.includes('.')) {
    const afterDot = array[1].substr(0, limit);
    return limit ? `${array[0]}.${afterDot}` : array[0];
  }

  return array[0];
};

export const etherscanLink = (type, hash) => `${config.etherscanUrl}/${type}/${hash}`;
