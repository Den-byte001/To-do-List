"use strict";

const textInput = document.getElementById("inputText");
const addBtn = document.getElementById("addBtn");
// const deleteBtn = document.getElementById("delBtn");
const unorderList = document.getElementById("unorderList");
const eachList = document.getElementsByClassName("eachList");
const delBtn = document.getElementsByClassName("delBtn");
const textDiv = document.getElementsByClassName("textDiv");

addBtn.addEventListener("click", () => {
  const newList = document.createElement("li");
  newList.textContent = textInput.value;

  if (newList) {
    newList.className = eachList.className;
  }

  unorderList.appendChild(newList);

  textInput.value = "";
});
