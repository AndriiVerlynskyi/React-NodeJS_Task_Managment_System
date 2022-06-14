import { isEmpty } from "lodash"

export const createQueryString = (filter, sorter, page) => {
  let queryString = '';
  if (!isEmpty(filter)) {
    Object.keys(filter).forEach( key => {
      queryString = `${queryString}&${key}=${filter[key]}`
    }) 
  }
  if (!isEmpty(sorter)) {
    let sortingString = '';
    sorter.forEach( sortStr => {
      sortingString = `${!isEmpty(sortingString) ? ',' : ''}`;
      sortingString = `${sortingString}${sortStr}`;
    })

    if (!isEmpty(queryString)) {
      queryString = `${queryString}&sort=${sortingString}`
    } else {
      queryString = `sort=${sortingString}`
    }
  }
  if (!isEmpty(filter) && !isEmpty(sorter)) {
    return ''
  } else {
    return `?${queryString}`
  }
}
