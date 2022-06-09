const createFilter = (req) => {
  const { query } = req;
  const filter = { $or: [] };
  const skipKeys = [];

  Object.keys(query).forEach((key) => {
    if (!skipKeys.includes(key)) {
      filter.$or.push({ [key]: new RegExp(query[key], 'i') })
    }
  });

  if (filter.$or.length === 0) {
    delete filter.$or
  }

  return filter;
};

module.exports = { createFilter };
