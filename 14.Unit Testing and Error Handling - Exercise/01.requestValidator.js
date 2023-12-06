function requestValidator(requestObj) {
  const paramsObj = {
    method: ["GET", "POST", "DELETE", "CONNECT"],
    version: ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"],
    uriPattern: /^[A-Za-z0-9\.]+$/,
    messagePattern: /^[^\<\>\\\&\'\"]+$/,
  };

  if (!paramsObj.method.includes(requestObj.method)) {
    throw new Error("Invalid request header: Invalid Method");
  }
  if (requestObj.uri === "" || !requestObj.hasOwnProperty("uri")) {
    throw new Error("Invalid request header: Invalid URI");
  }
  const uriMatch = requestObj.uri.match(paramsObj.uriPattern);
  if (!uriMatch && uriMatch !== "*") {
    throw new Error("Invalid request header: Invalid URI");
  }

  if (!paramsObj.version.includes(requestObj.version)) {
    throw new Error("Invalid request header: Invalid Version");
  }

  if (!requestObj.hasOwnProperty("message")) {
    throw new Error("Invalid request header: Invalid Message");
  }
  if (requestObj.message === "") {
    return requestObj;
  }

  const messageMatch = requestObj.message.match(paramsObj.messagePattern);
  if (!messageMatch) {
    throw new Error("Invalid request header: Invalid Message");
  }

  return requestObj;
}

console.table(
  requestValidator({
    method: "GET",
    uri: "svn.public.catalog",
    version: "HTTP/1.1",
    message: "",
  })
);
