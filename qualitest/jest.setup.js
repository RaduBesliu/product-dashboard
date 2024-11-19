// jest.setup.js
const { configure } = require("@testing-library/react");
const Modal = require("react-modal");

// Extend expect with jest-dom matchers
require("@testing-library/jest-dom/matchers");

// Create a #root element for react-modal
const root = document.createElement("div");
root.setAttribute("id", "root");
document.body.appendChild(root);

Modal.setAppElement("#root");

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    };
  };
