const revealElements = document.querySelectorAll(
  ".hero-card, .logo-strip__grid span, .feature-card, .proof-panel article, .testimonial-card, .pricing-card, .cta-banner, .accessibility-card"
);

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealElements.forEach((element) => element.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18
    }
  );

  revealElements.forEach((element) => observer.observe(element));
}

document.querySelector(".cta-form")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const emailInput = form.querySelector("input");
  const statusElement = form.querySelector(".cta-form__status");

  if (!(emailInput instanceof HTMLInputElement)) {
    return;
  }

  if (!(statusElement instanceof HTMLElement)) {
    return;
  }

  const trimmedValue = emailInput.value.trim();
  const isValid = emailInput.validity.valid && trimmedValue.length > 0;

  emailInput.setAttribute("aria-invalid", String(!isValid));

  if (!trimmedValue) {
    statusElement.textContent = "Enter your work email address to request access.";
    emailInput.focus();
    return;
  }

  if (!isValid) {
    statusElement.textContent = "Enter a valid email address in the format name@company.com.";
    emailInput.focus();
    return;
  }

  emailInput.value = "";
  emailInput.removeAttribute("aria-invalid");
  statusElement.textContent = "Thanks. Your request has been recorded and our team will follow up soon.";
  emailInput.placeholder = "Work email";
});
