import controller from "./controller";

const getRouteInfo = () => {
  return location.hash ? location.hash.slice(1) : "";
};

const handleHash = () => {
  const info = getRouteInfo();

  if (info) {
    controller.handleModal(info);
  }
};

export default {
  init() {
    addEventListener("hashchange", handleHash);
    handleHash();
  },
};
