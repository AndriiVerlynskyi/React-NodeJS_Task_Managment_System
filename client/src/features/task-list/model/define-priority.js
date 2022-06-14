export const definePriority = priority => {
  switch(priority) {
    case 1:
      return 'low'
    case 2:
      return 'medium'
    case 3:
      return 'high'
    case 4:
      return 'hot'
  }
}
