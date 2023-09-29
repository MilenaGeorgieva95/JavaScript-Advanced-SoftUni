function generateReport() {
  const headers = Array.from(document.querySelectorAll("thead tr th"));
  let rowsTr = document.querySelectorAll("tbody tr");
  let result = [];
  let headersInfo = [];
  let textarea = document.querySelector("#output");

  for (let header of headers) {
    let headerInput = header.querySelector("input");
    if (headerInput.checked === true) {
      let index = headers.indexOf(header);
      let formatedHeader = header.textContent.toLowerCase().trim();
      headersInfo.push([index, formatedHeader]);
    }
  }
  for (let tr of rowsTr) {
    let trsArr = Array.from(tr.querySelectorAll("td"));
    let tempObj = {};

    for (let [index, header] of headersInfo) {
      tempObj[header] = trsArr[index].textContent;
    }
    result.push(tempObj);
  }
  let resultAsJson = JSON.stringify(result);
  textarea.textContent = resultAsJson;
}

//list=[ (include only selected headers)
//            {
//         header1:Row1;
//         header2:Row1;
//         },
//            {
//         header1:Row2;
//         header2:Row2;
//         },
//            {
//         header1:Row3;
//         header2:Row3;
//         },
//]
//output JSON string in output
