function isEqual(a, b) {
  let m = new Map()
  let akeys = Object.keys(a);
  let bkeys = Object.keys(b);
  if (akeys.length != bkeys.length) return false
  for (let key of akeys) {
    m.set(key, a[key])
  }
  for (let key of bkeys) {
    if (!m.get(key) || b[key] !== m.get(key)) {
      return false
    }
  }
  return true
}

console.log(isEqual({ a: 1, b: 2, c: 3,d:0 }, { b: 2, a: 1, c: 3,e:0 }));