function arrayDiff(a, b){

  bItems = new Set(b);
  return a.filter(x => ! bItems.has(x))
}