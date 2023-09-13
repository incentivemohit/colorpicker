document.getElementById("check").style.display = "none";
let pickColor = document.getElementById("pick-color");
let eye = new EyeDropper();

pickColor.addEventListener("click", async () => {
  document.getElementById("pick-color").style.backgroundColor = "grey";
  let color = await eye.open();
  document.getElementById("color-value").value = color.sRGBHex;
});

let copy = document.getElementById("copy-value");

copy.addEventListener("click", () => {
  let text = document.getElementById("color-value");
  text.select();
  navigator.clipboard.writeText(text.value);
  document.getElementById("copy-value").style.backgroundColor = "green";
  document.getElementById("check").style.display = "inline-block";
});
