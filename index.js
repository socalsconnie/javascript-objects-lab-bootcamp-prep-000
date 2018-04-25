var recipes = {
  toast: 'bread, butter',
  omelet: 'eggs, onion, peppers'
};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, object, {[key]:value});
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, object, {[key]:value});
  return object;
}