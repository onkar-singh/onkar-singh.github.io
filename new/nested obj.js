
//  https://stackoverflow.com/questions/18936915/dynamically-set-property-of-nested-object?noredirect=1&lq=1
/////////////////////////////////////////////////////////////////////////////////
good
const setNestedProp = (obj = {}, [first, ...rest] , value) => ({
  ...obj,
  [first]: rest.length
    ? setNestedProp(obj[first], rest, value)
    : value
});

const result = setNestedProp({}, ["first", "second", "a"], "foo");
const result2 = setNestedProp(result, ["first", "second", "b"], "bar");

console.log(result);
console.log(result2);

/////////////////////////////////////////

const obj = {
  levelOne: {
    levelTwo: {
      levelThree: "Set this one!"
    }
  }
}

const updatedObj = {
  ...obj,
  levelOne: {
    ...obj.levelOne,
    levelTwo: {
      ...obj.levelOne.levelTwo,
      levelThree: "I am now updated!"
    }
  }
}

//////////////////////////////////////////
good
function set(obj = {}, key, val) {
  const keys = key.split('.')
  const last = keys.pop()
  keys.reduce((o, k) => o[k] ??= {}, obj)[last] = val;
    
}

let objf={};
set(objf,'db.mongodb.user', 'root');

//////////////////////////////////////////

function set(obj = {}, k, l, v) {
  k.reduce((o, k) => o[k] ??= {}, obj)[l] = v;
}

let objf={};
set(objf,['db','mongodb'],'user','value');
console.log(objf)
// save in objf 
// ['db','mongodb'] keys without last key
// 'user' last key
// 'value' a value

// set(obj to save,key array(remove last key),last key, value need to save)

var len = arr.length;
while (len--) {
    // blah blah
}