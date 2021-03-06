module.exports = (data, date) => {
  if (!data.length) throw new Error('The required JSON data does not exist');

  return data.filter((x) => x.Date === date);
};
