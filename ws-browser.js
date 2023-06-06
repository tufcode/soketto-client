// This replaces the ws module in the browser, which is not supported.
export default function () {
  throw new Error("ws does not work in the browser");
};
