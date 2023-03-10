window.addEventListener("load", () => {
  const cookies = document.cookie.split("; ");
  const cookie = cookies.find((c) => c.startsWith("asst3="));
  if (cookie) {
    vanquish();
    return;
  } else {
    return;
  }
});
