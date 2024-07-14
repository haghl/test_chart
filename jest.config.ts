export default {
  roots: ["<rootDir>/src/test/"],
  preset: "ts-jest",
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  transform: { "^.+\\.(ts|tsx)$": ["ts-jest"] },
  moduleNameMapper: {
    "\\.(css|less|svg)$": "identity-obj-proxy",
    "@/(.*)$": "<rootDir>/src/$1", // @ <= alias path
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
