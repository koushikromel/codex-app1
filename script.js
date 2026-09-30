const root = document.documentElement;
const themeToggle = document.querySelector("#theme-toggle");
const themeLabel = document.querySelector("#theme-label");
const copyLink = document.querySelector("#copy-link");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  root.classList.add("light");
  themeLabel.textContent = "Light";
}

themeToggle.addEventListener("click", () => {
  const isLight = root.classList.toggle("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  themeLabel.textContent = isLight ? "Light" : "Dark";
});

copyLink.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    copyLink.textContent = "Copied";
  } catch {
    copyLink.textContent = "Link Ready";
  }

  window.setTimeout(() => {
    copyLink.textContent = "Copy Link";
  }, 1800);
});
