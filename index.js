const items = document.querySelectorAll(".item");
const indicator = document.getElementById("indicator");
const activeItem = document.querySelector(".item.active");
const root = document.querySelector(":root");

indicator.style.width = `${activeItem.offsetWidth}px`;
indicator.style.left = `${activeItem.offsetLeft}px`;

let preLeft = 0;
let left = 0;

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    const preActive = document.querySelector(".item.active");

    if (item !== preActive) {
      preLeft = preActive.offsetLeft;

      items.forEach((item) => {
        item.classList.remove("active");
      });

      item.classList.add("active");

      left = item.offsetLeft;

      indicator.animate(
        [
          { left: `${preLeft}px`, height: "100%" },
          { left: `${preLeft}px`, height: "4px" },
          {
            left: `${left}px`,
            height: "4px",
            width: `${item.offsetWidth}px`,
          },
          {
            left: `${left}px`,
            height: "100%",
            width: `${item.offsetWidth}px`,
          },
        ],
        {
          duration: 600,
          fill: "forwards",
        }
      );
    }
  });
});
