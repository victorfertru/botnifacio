exports.codeMessage = (is_code, commandFound) => {
  let code;
  is_code ? (code = "```") : (code = "");
  let resul;
  return commandFound.message
    ? (resul = code + commandFound.message + code)
    : (resul = "");
};
