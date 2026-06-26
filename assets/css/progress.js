document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".lesson-check");

  // Load saved states and apply shading
  checkboxes.forEach((checkbox) => {
    const id = checkbox.dataset.lessonId;
    const saved = localStorage.getItem(`ppl-${id}`);
    if (saved === "true") {
      checkbox.checked = true;
      shadeSection(checkbox, true);
    }
  });

  // Handle checkbox change
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const id = checkbox.dataset.lessonId;
      const isChecked = checkbox.checked;

      // Save to localStorage
      localStorage.setItem(`ppl-${id}`, isChecked);

      // Sync all checkboxes with the same lesson-id
      document.querySelectorAll(`.lesson-check[data-lesson-id="${id}"]`).forEach((cb) => {
        cb.checked = isChecked;
        shadeSection(cb, isChecked);
      });

      updateChart();
    });
  });

  function getProgressData() {
    const uniqueIds = new Set();
    const checkedIds = new Set();
    checkboxes.forEach((cb) => {
      const id = cb.dataset.lessonId;
      uniqueIds.add(id);
      if (cb.checked) checkedIds.add(id);
    });
    return [checkedIds.size, uniqueIds.size - checkedIds.size];
  }

  function updateChart() {
    if (!window.chart) return;
    window.chart.data.datasets[0].data = getProgressData();
    window.chart.update();
  }

  function shadeSection(checkbox, isChecked) {
    const parent = checkbox.closest(".progress-section");
    if (parent) {
      if (isChecked) {
        parent.classList.add("completed");
      } else {
        parent.classList.remove("completed");
      }
    }
  }

});
const heading = document.getElementById('heading-' + lessonId);
if (heading) {
  heading.style.textDecoration = completed ? 'line-through' : 'none';
}
document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".lesson-check");

  // Load saved states and apply styling
  checkboxes.forEach((checkbox) => {
    const id = checkbox.dataset.lessonId;
    const saved = localStorage.getItem(`ppl-${id}`);
    if (saved === "true") {
      checkbox.checked = true;
      applyCompletionStyle(checkbox, true);
    }
  });

  // Add change listener to every checkbox
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const id = checkbox.dataset.lessonId;
      const isChecked = checkbox.checked;

      // Save to localStorage
      localStorage.setItem(`ppl-${id}`, isChecked);

      // Sync all checkboxes with the same lesson ID
      document.querySelectorAll(`.lesson-check[data-lesson-id="${id}"]`).forEach((cb) => {
        cb.checked = isChecked;
        applyCompletionStyle(cb, isChecked);
      });

      updateChart(); // Will do nothing if no chart present
    });
  });

  function applyCompletionStyle(checkbox, isChecked) {
    const parent = checkbox.closest(".progress-section, .lesson-entry"); // Add class for lesson plan page
    if (!parent) return;
    if (isChecked) {
      parent.classList.add("completed");
    } else {
      parent.classList.remove("completed");
    }
  }

  function getProgressData() {
    const ids = new Set();
    const completed = new Set();
    checkboxes.forEach((cb) => {
      const id = cb.dataset.lessonId;
      ids.add(id);
      if (cb.checked) completed.add(id);
    });
    return [completed.size, ids.size - completed.size];
  }

  function updateChart() {
    if (window.chart) {
      window.chart.data.datasets[0].data = getProgressData();
      window.chart.update();
    }
  }

  updateChart(); // Initial update on load
});
