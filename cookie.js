window.addEventListener("load", () => {
  const cookies = document.cookie.split("; ");
  const cookie = cookies.find((c) => c.startsWith("asst2="));
  if (cookie) {
    vanquish();
    return;
  } else {
    return;
  }
});
