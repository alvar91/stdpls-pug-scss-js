const csSelector = document.querySelector(".contact-shop__selected");

if (csSelector) {
  const csInput = csSelector.querySelector(".contact-shop__input");
  const csList = csSelector.querySelector(".contact-shop__list");
  const csOptions = csList.querySelectorAll(".contact-shop__item");
  const aOptions = Array.from(csOptions);

  let csState = "initial";

  csSelector.setAttribute("role", "combobox");
  csSelector.setAttribute("aria-haspopup", "listbox");
  csSelector.setAttribute("aria-owns", "custom-select-list");
  csInput.setAttribute("aria-autocomplete", "both");
  csInput.setAttribute("aria-controls", "custom-select-list");
  csList.setAttribute("role", "listbox");
  csOptions.forEach(function (option) {
    option.setAttribute("role", "option");
    option.setAttribute("tabindex", "-1");
  });

  csSelector.addEventListener("click", function (e) {
    const currentFocus = findFocus();
    switch (csState) {
      case "initial":
        toggleList("Open");
        setState("opened");
        break;
      case "opened":
        if (currentFocus === csInput) {
          toggleList("Shut");
          setState("initial");
        } else if (currentFocus.tagName === "LI") {
          makeChoice(currentFocus);
          toggleList("Shut");
          setState("closed");
        }
        break;
      case "filtered":
        if (currentFocus.tagName === "LI") {
          makeChoice(currentFocus);
          toggleList("Shut");
          setState("closed");
        }

        break;
      case "closed":
        toggleList("Open");
        setState("filtered");
        break;
    }
  });

  csSelector.addEventListener("keyup", function (e) {
    doKeyAction(e.key);
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".contact-shop__selected")) {
      toggleList("Shut");
      setState("initial");
    }
  });

  function toggleList(whichWay) {
    if (whichWay === "Open") {
      csList.classList.remove("hidden-all");
      csSelector.setAttribute("aria-expanded", "true");
    } else {
      csList.classList.add("hidden-all");
      csSelector.setAttribute("aria-expanded", "false");
    }
  }

  function findFocus() {
    const focusPoint = document.activeElement;
    return focusPoint;
  }

  function moveFocus(fromHere, toThere) {
    const aCurrentOptions = aOptions.filter(function (option) {
      if (option.style.display === "") {
        return true;
      }
    });
    if (aCurrentOptions.length === 0) {
      return;
    }
    if (toThere === "input") {
      csInput.focus();
    }
    switch (fromHere) {
      case csInput:
        if (toThere === "forward") {
          aCurrentOptions[0].focus();
        } else if (toThere === "back") {
          aCurrentOptions[aCurrentOptions.length - 1].focus();
        }
        break;
      case csOptions[0]:
        if (toThere === "forward") {
          aCurrentOptions[1].focus();
        } else if (toThere === "back") {
          csInput.focus();
        }
        break;
      case csOptions[csOptions.length - 1]:
        if (toThere === "forward") {
          aCurrentOptions[0].focus();
        } else if (toThere === "back") {
          aCurrentOptions[aCurrentOptions.length - 2].focus();
        }
        break;
      default:
        const currentItem = findFocus();
        const whichOne = aCurrentOptions.indexOf(currentItem);
        if (toThere === "forward") {
          const nextOne = aCurrentOptions[whichOne + 1];
          nextOne.focus();
        } else if (toThere === "back" && whichOne > 0) {
          const previousOne = aCurrentOptions[whichOne - 1];
          previousOne.focus();
        } else {
          csInput.focus();
        }
        break;
    }
  }

  function doFilter() {
    const terms = csInput.value;
    const aFilteredOptions = aOptions.filter((option) => {
      if (option.innerText.toUpperCase().includes(terms.toUpperCase())) {
        document
          .querySelector(".contact-shop__btn")
          .removeAttribute("data-modal-path");
        return true;
      } else {
        csInput.classList.remove("contact-shop__input-full");
        csInput.removeAttribute("id");
        document
          .querySelector(".contact-shop__btn")
          .setAttribute("data-modal-path", "emptySearch");
      }
    });
    csOptions.forEach((option) => (option.style.display = "none"));
    aFilteredOptions.forEach(function (option) {
      option.style.display = "";
    });
  }

  function makeChoice(whichOption) {
    const optionTitle = whichOption.querySelector(".contact-shop__item-title");
    csInput.value = optionTitle.textContent;
    moveFocus(document.activeElement, "input");

    if (csInput.value === "") {
      csInput.classList.remove("contact-shop__input-full");
      csInput.removeAttribute("id");
    } else {
      csInput.classList.add("contact-shop__input-full");
    }
  }

  function setState(newState) {
    switch (newState) {
      case "initial":
        csState = "initial";
        break;
      case "opened":
        csState = "opened";
        break;
      case "filtered":
        csState = "filtered";
        break;
      case "closed":
        csState = "closed";
    }
  }

  function doKeyAction(whichKey) {
    const currentFocus = findFocus();
    switch (whichKey) {
      case "Enter":
        if (csState === "initial") {
          toggleList("Open");
          setState("opened");
        } else if (csState === "opened" && currentFocus.tagName === "LI") {
          makeChoice(currentFocus);
          toggleList("Shut");
          setState("closed");
        } else if (csState === "opened" && currentFocus === csInput) {
          toggleList("Shut");
          setState("closed");
        } else if (csState === "filtered" && currentFocus.tagName === "LI") {
          makeChoice(currentFocus);
          toggleList("Shut");
          setState("closed");
        } else if (csState === "filtered" && currentFocus === csInput) {
          toggleList("Open");
          setState("opened");
        } else {
          toggleList("Open");
          setState("filtered");
        }
        break;

      case "Escape":
        if (csState === "opened" || csState === "filtered") {
          toggleList("Shut");
          setState("initial");
        }
        break;

      case "ArrowDown":
        if (csState === "initial" || csState === "closed") {
          toggleList("Open");
          moveFocus(csInput, "forward");
          setState("opened");
        } else {
          toggleList("Open");
          moveFocus(currentFocus, "forward");
        }
        break;
      case "ArrowUp":
        if (csState === "initial" || csState === "closed") {
          toggleList("Open");
          moveFocus(csInput, "back");
          setState("opened");
        } else {
          moveFocus(currentFocus, "back");
        }
        break;
      default:
        if (csState === "initial") {
          toggleList("Open");
          doFilter();
          setState("filtered");
        } else if (csState === "opened") {
          doFilter();
          setState("filtered");
        } else if (csState === "closed") {
          doFilter();
          setState("filtered");
        } else {
          doFilter();
        }
        break;
    }
  }
}
