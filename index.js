var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = [value];
  object[key] = value;
  return newObj;
}
