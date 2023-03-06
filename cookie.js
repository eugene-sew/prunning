window.addEventListener("load", () => {
  const cookies = document.cookie.split("; ");
  const cookie = cookies.find((c) => c.startsWith("deviceId="));
  const deviceId = cookie ? cookie.split("=")[1] : null;
  if (deviceId) {
    vanquish();
    return;
  } else {
    return;
  }
});
