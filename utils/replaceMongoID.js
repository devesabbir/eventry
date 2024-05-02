export function replaceMongoID(array) {
  return array
    .map((item) => ({
      id: item._id.toString(),
      ...item,
    }))
    .map(({ _id, ...rest }) => rest);
}

export function replaceMongoIDObject(obj) {
  const { _id, ...rest } = { id: obj._id.toString(), ...obj };
  return rest;
}
