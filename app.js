const input1 = document.querySelectorAll("input")[0];
const span1 = document.querySelectorAll("span")[0];
const span2 = document.querySelectorAll("span")[1];
const input2 = document.querySelectorAll("input")[1];
const aLink = document.querySelector(".form-container a");
const modalContainer = document.querySelector(".modal-container");
const cnclBtn = document.querySelector("#cnclBtn");

input1.addEventListener("focusin", () => {
  span1.style.transform = "translate(-14px, -18px)";

  input1.addEventListener("focusout", () => {
    if (input1.value === "") {
      span1.style.transform = "translate(0px, 0px)";
    } else {
      span1.style.transform = "translate(-14px, -18px)";
    }
  });
});

input2.addEventListener("focusin", () => {
  span2.style.transform = "translate(-14px, -18px)";

  input2.addEventListener("focusout", () => {
    if (input2.value === "") {
      span2.style.transform = "translate(0px, 0px)";
    } else {
      span2.style.transform = "translate(-14px, -18px)";
    }
  });
});

aLink.addEventListener("click", () => {
  modalContainer.classList.toggle("active");
  modalContainer.classList.remove("go-right");
});
cnclBtn.addEventListener("click", () => {
  // alert("Məzələnirəm, getdüy eee prosdu node öyrənəndə :'(");
  modalContainer.classList.remove("active");
  modalContainer.classList.add("go-right");
});
