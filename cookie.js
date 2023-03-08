window.addEventListener("load", () => {
  const cookies = document.cookie.split("; ");
  const cookie = cookies.find((c) => c.startsWith("asst2="));
  // const deviceId = cookie ? cookie.split("=")[1] : null;
  if (cookie) {
    vanquish();
    return;
  } else {
    return;
  }
});
