const cleanSet = (set, startString) => {
  const strings = [];

  if (startString === '' || typeof startString !== 'String') return '';
  set.forEach((s) => {
    if (typeof s === 'String' && s.startsWith(startString)) {
      strings.push(s.slice(startString.length));
    }
  });
  return strings.join('-');
};

export default cleanSet;
