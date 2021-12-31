export const stringToBinary = function (string, maxBytes) {
  //for BINARY maxBytes = 255
  //for VARBINARY maxBytes = 65535
  let binaryOutput = "";
  if (string.length > maxBytes) {
    string = string.substring(0, maxBytes);
  }

  for (var i = 0; i < string.length; i++) {
    binaryOutput += string[i].charCodeAt(0).toString(2) + " ";
  }

  return binaryOutput;
};
export const binaryToString = function (binary) {
  const arrayOfBytes = binary.split(" ");

  let stringOutput = "";

  for (let i = 0; i < arrayOfBytes.length; i++) {
    stringOutput += String.fromCharCode(parseInt(arrayOfBytes[i], 2));
  }

  return stringOutput;
};
