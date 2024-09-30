export const HandleDarkMode = (mode) => {
  const htmlTag = document.getElementsByTagName("html");
  const bodyTag = document.getElementsByTagName("body");
  if (mode == "on") {
    htmlTag[0].classList.add("dark");
    htmlTag[0].style.backgroundColor = "#272727";
  } else if (mode == "off") {
    htmlTag[0].classList.remove("dark");
    htmlTag[0].style.backgroundColor = "#FEFDFF";
  }
};
