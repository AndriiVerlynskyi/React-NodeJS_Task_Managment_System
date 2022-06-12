const createFilter = (req) => {
  const { query } = req;

  const filter = { $or: [] };
  const skipKeys = [
    'perPage',
    'page'
  ];

  Object.keys(query).forEach((key) => {
    if (!skipKeys.includes(key)) {
      filter.$or.push({ [key]: new RegExp(query[key], 'i') })
    }
  });

  if (filter.$or.length === 0) {
    delete filter.$or
  }

  // filter.userId = req.user._id;

  return filter;
};

module.exports = { createFilter };
