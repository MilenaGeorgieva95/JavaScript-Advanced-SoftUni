function attachEventsListeners() {
  const button = document.getElementById("convert");
  const inputEl = document.getElementById("inputDistance");
  const outputArea = document.getElementById("outputDistance");
  const outputUnitsEl = document.querySelector("#outputUnits");
  const inputUnitsEl = document.querySelector("#inputUnits");

  button.addEventListener("click", convert);

  function convert() {
    const inputValue = Number(inputEl.value);
    const inputUnits = inputUnitsEl.value;

    const outputUnits = outputUnitsEl.value;

    let inputInMeters = inputToMeters[inputUnits](inputValue);
    let output = metersToOutput[outputUnits](inputInMeters);

    outputArea.value = output;
  }

  const inputToMeters = {
    km: (num) => (num *= 1000),
    m: (num) => num,
    cm: (num) => (num *= 0.01),
    mm: (num) => (num *= 0.001),
    mi: (num) => (num *= 1609.34),
    yrd: (num) => (num *= 0.9144),
    ft: (num) => (num *= 0.3048),
    in: (num) => (num *= 0.0254),
  };

  const metersToOutput = {
    km: (num) => (num /= 1000),
    m: (num) => num,
    cm: (num) => (num /= 0.01),
    mm: (num) => (num /= 0.001),
    mi: (num) => (num /= 1609.34),
    yrd: (num) => (num /= 0.9144),
    ft: (num) => (num /= 0.3048),
    in: (num) => (num /= 0.0254),
  };
}
