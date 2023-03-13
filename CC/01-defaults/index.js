// Fill in undefined properties in object with the first value present in the following list of defaults objects.
// defaults(object, *defaults);
//
// const aws = {compute: "ec2"};
// defaults(aws, {compute: "lambda", storage: "s3"});
// => {compute: "ec2", storage: "s3"}
const defaults = (obj, ...objArray) => {
  for (let i = 0; i < objArray.length; i++) {
    for (const key in objArray[i]) {
      if (!Object.prototype.hasOwnProperty.call(obj, key)) {
        obj[key] = objArray[i][key];
      }
    }
  }
  return obj;
};

module.exports = { defaults };
