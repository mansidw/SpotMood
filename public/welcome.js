/*global chrome*/
const query = document.querySelector.bind(document);

const removeComma = (string) => string.slice(0, string.length - 1).trim();

const isInvalid = (stringInput) => {
  const inputs = Array.from(query(".tags").children).map(
    (input) => input.firstElementChild.textContent
  );

  return (
    !/^[A-Za-z0-9]{3,}/.test(stringInput) ||
    inputs.some((name) => name === removeComma(stringInput)) ||
    query(".tags").children.length >= 10
  );
};

function modifyTags(e) {
  if (e.key === ",") {
    if (isInvalid(e.target.value)) {
      e.target.value = "";
      return;
    }

    addTag(e.target.value);
    e.target.value = "";
  }

  if (e.key === "Backspace" && !e.target.value.length) {
    deleteTag(null, query(".tags").children.length - 1);
  }

  query(".tags-count").textContent = `${10 - query(".tags").children.length}`;
}

function addTag(textValue) {
  const tag = document.createElement("div"),
    tagName = document.createElement("label"),
    remove = document.createElement("span");

  tagName.setAttribute("class", "tag-name");
  tagName.textContent = removeComma(textValue);

  remove.setAttribute("class", "remove");
  remove.textContent = "X";
  remove.addEventListener("click", deleteTag);

  tag.setAttribute("class", "tag");
  tag.appendChild(tagName);
  tag.appendChild(remove);

  query(".tags").appendChild(tag);
}

function deleteTag(
  e,
  i = Array.from(query(".tags").children).indexOf(e.target.parentElement)
) {
  const index = query(".tags").getElementsByClassName("tag")[i];

  query(".tags").removeChild(index);
  query(".tags-count").textContent = `${10 - query(".tags").children.length}`;
}

function focus() {
  query("#tag").focus();
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function getText(num) {
  return num.innerText;
}

async function saveValues(event) {
  event.preventDefault();
  const val = document.querySelector(".form__input").value;
  const val2 = Array.from(document.querySelector(".tags").children);
  const finalNames = val2.map(getText);
  chrome.storage.local.set({ name: val }).then(() => {});
  chrome.storage.local.set({ artists: finalNames }).then(() => {});
  alert("Thanks for filling out the details!Happy SpotMood :)");
  await sleep(3000);
  window.close();
}

query(".input").addEventListener("click", focus);
query("#tag").addEventListener("keyup", modifyTags);
query(".form__content").addEventListener("submit", saveValues);
