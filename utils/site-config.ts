function getCurrentYear(): number {
  const date: Date = new Date();
  return date.getFullYear();
}

export {getCurrentYear};
