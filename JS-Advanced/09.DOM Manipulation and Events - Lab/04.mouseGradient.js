function attachGradientEvents() {
  let gradient = document.getElementById("gradient");
  gradient.addEventListener("mousemove", gradientMove);
  gradient.addEventListener("mouseout", gradientOut);

  function gradientMove(event) {
    //container width
    //clientHeigth=container heigth
    const gradientBoxWidth = event.target.clientWidth;

    //x mouse position in the container
    const x = event.offsetX;

    //convert to percentage
    const percentage = Math.floor((x / gradientBoxWidth) * 100);

    document.getElementById("result").textContent = percentage + "%";
  }

  function gradientOut() {
    document.getElementById("result").textContent = "";
  }
}
