export function sortNumbers(i: number, j: number, sortOrder: 'asc' | 'desc') {
  return sortOrder === 'asc' ? i - j : j - i
}

export function sortString(i: string, j: string, sortOrder: 'asc' | 'desc') {
  if (i < j) {
    return sortOrder === 'asc' ? -1 : 1;
  } else {
    if (i > j) {
      return sortOrder === 'asc' ? 1 : -1;
    }
  }
}
