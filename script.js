const processCopy = {
  brief: {
    title: "Brief & Direction",
    copy: "Understand the product, audience, offer, campaign goal, brand identity, and platform use."
  },
  planning: {
    title: "Visual Planning",
    copy: "Define the scene, mood, composition, color direction, and image purpose before production."
  },
  generation: {
    title: "AI Generation",
    copy: "Create multiple visual directions using controlled prompts, references, and iterative refinement."
  },
  correction: {
    title: "Correction & Quality Control",
    copy: "Review AI-generated outputs for product accuracy, visual defects, deformation, inconsistent details, incorrect branding, and other common AI issues. Correct or regenerate assets as needed to ensure the image is realistic, controlled, and usable."
  },
  selection: {
    title: "Selection & Refinement",
    copy: "Choose the strongest outputs and improve product clarity, visual consistency, composition, and overall polish."
  },
  adaptation: {
    title: "Layout & Format Adaptation",
    copy: "Prepare assets for product listings, ads, landing pages, email, social media, and ecommerce formats."
  },
  delivery: {
    title: "Final Delivery",
    copy: "Export polished, platform-ready images organized by use case and format."
  }
};

const header = document.querySelector("[data-header]");
const progress = document.querySelector(".scroll-progress span");

function updateScrollState() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  progress.style.width = `${scrolled}%`;

  if (window.scrollY > window.innerHeight * 1.35) {
    header.classList.add("is-light");
  } else {
    header.classList.remove("is-light");
  }
}

window.addEventListener("scroll", updateScrollState, { passive: true });
updateScrollState();

const revealItems = document.querySelectorAll(".reveal-on-scroll");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

revealItems.forEach((item) => revealObserver.observe(item));

const processButtons = document.querySelectorAll(".process-step");
const processTitle = document.querySelector("[data-process-title]");
const processBody = document.querySelector("[data-process-copy]");

processButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.process;
    const item = processCopy[key];

    processButtons.forEach((step) => {
      step.classList.remove("active");
      step.setAttribute("aria-selected", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    processTitle.textContent = item.title;
    processBody.textContent = item.copy;
  });
});

const pillarPanels = document.querySelectorAll(".pillar-panel");
pillarPanels.forEach((panel) => {
  const activatePanel = () => {
    pillarPanels.forEach((item) => item.classList.remove("active"));
    panel.classList.add("active");
  };

  panel.addEventListener("click", activatePanel);
  panel.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      activatePanel();
    }
  });
});

const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tab = button.dataset.tab;

    tabButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });

    tabPanels.forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.tabPanel === tab);
    });

    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
  });
});

const beforeAfter = document.querySelector("[data-before-after]");
if (beforeAfter) {
  const range = beforeAfter.querySelector(".ba-range");
  const after = beforeAfter.querySelector(".ba-after");
  const handle = beforeAfter.querySelector(".ba-handle");

  function updateBeforeAfter(value) {
    const percentage = Number(value);
    after.style.clipPath = `inset(0 0 0 ${percentage}%)`;
    handle.style.left = `${percentage}%`;
  }

  range.addEventListener("input", (event) => updateBeforeAfter(event.target.value));
  updateBeforeAfter(range.value);
}
