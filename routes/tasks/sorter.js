const createSorter = (sortString) => {
  let sort = {};
  if ( !!sortString ) {
    let sortingParams = sortString.replace(':',',').split(',');

    for (let i = 0; i < sortingParams.length; i=i+2 ) {
      const sortKey = sortingParams[i];
      const sortValue = isNaN(+sortingParams[i+1]) ?
        sortingParams[i+1] : +sortingParams[i+1]
  
      sort[sortKey] = sortValue;
    }
  }
  return sort
}

module.exports = { createSorter };
