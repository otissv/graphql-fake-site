export default function titleize (str) {
  if (!str) return '';
  return `${str.charAt(0).toLocaleUpperCase()}${str.substr(1, str.length - 1)}`;
};
