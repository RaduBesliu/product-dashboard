module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["<rootDir>/jest.setup.js"], // Load the setup file
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy", // Mock CSS imports
    "\\.(gif|ttf|eot|svg|png|jpg|jpeg|webp)$":
      "<rootDir>/__mocks__/fileMock.js", // Mock assets
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
};
