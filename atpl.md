---
layout: default
title: Airline Transport Pilot Licence (ATPL)
---

<h1>Airline Transport Pilot Licence (ATPL)</h1>

<!-- Tabs -->
<div class="tabs">
  <button class="tab-btn active" data-tab="progress-tab">Progress</button>
  <button class="tab-btn" data-tab="documents-tab">Documents</button>
</div>

<!-- Progress Tab Content -->
<div id="progress-tab" class="tab-content active">
  <h2>Lesson Progress</h2>
  <form id="progress-form">
    <label><input type="checkbox" class="lesson-check"> Exam 1: Principles of Flight</label><br>
    <label><input type="checkbox" class="lesson-check"> Exam 2: Meteorology</label><br>
    <label><input type="checkbox" class="lesson-check"> Exam 3: Navigation</label><br>
    <label><input type="checkbox" class="lesson-check"> Exam 4: Flight Planning</label><br>
    <label><input type="checkbox" class="lesson-check"> Exam 5: Air Law</label><br>
    <label><input type="checkbox" class="lesson-check"> Exam 6: Aircraft Technical & General</label><br>
    <label><input type="checkbox" class="lesson-check"> Exam 7: Human Performance</label><br>
    <label><input type="checkbox" class="lesson-check"> Exam 8: Radio Telephony</label><br>
  </form>

  <h3>Your Progress</h3>
  <canvas id="progress-chart" width="150" height="150"></canvas>
</div>

<!-- Documents Tab Content -->
<div id="documents-tab" class="tab-content">
  <h2>Documents Tracker</h2>
  <form id="documents-form">
    <label>
      License Validity:
      <input type="date" id="license-date">
    </label><br><br>
    <label>
      Medical Validity:
      <input type="date" id="medical-date">
    </label><br><br>
  </form>
</div>

<!-- Chart.js CDN -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- Tabs + Chart + Local Storage -->
<script>
  document.addEventListener("DOMContentLoaded", function () {
    // Tab switching
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        tabContents.forEach(tc => tc.classList.remove("active"));

        btn.classList.add("active");
        const activeTab = document.getElementById(btn.dataset.tab);
        activeTab.classList.add("active");
      });
    });

    // Progress tab - checkboxes and chart
    const checkboxes = document.querySelectorAll('.lesson-check');
    const chartCtx = document.getElementById('progress-chart').getContext('2d');

    // Load checkbox state
    checkboxes.forEach((cb, index) => {
      const saved = localStorage.getItem(`atpl-lesson-${index}`);
      if (saved === "true") cb.checked = true;
    });

    function getProgressData() {
      const completed = Array.from(checkboxes).filter(cb => cb.checked).length;
      return [completed, checkboxes.length - completed];
    }

    const chart = new Chart(chartCtx, {
      type: 'pie',
      data: {
        labels: ['Completed', 'Remaining'],
        datasets: [{
          data: getProgressData(),
          backgroundColor: ['#6DCB8E', '#E0E0E0'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                const label = tooltipItem.label || '';
                const value = tooltipItem.raw || 0;
                return `${label}: ${value} exam${value !== 1 ? 's' : ''}`;
              }
            }
          }
        }
      }
    });

    checkboxes.forEach((cb, index) => {
      cb.addEventListener('change', () => {
        localStorage.setItem(`atpl-lesson-${index}`, cb.checked);
        chart.data.datasets[0].data = getProgressData();
        chart.update();
      });
    });

    // Initial update
    chart.data.datasets[0].data = getProgressData();
    chart.update();

    // Documents tab - localStorage for dates
    const licenseDate = document.getElementById("license-date");
    const medicalDate = document.getElementById("medical-date");

    [licenseDate, medicalDate].forEach((input, idx) => {
      const id = input.id;
      const stored = localStorage.getItem(`atpl-${id}`);
      if (stored) input.value = stored;

      input.addEventListener("change", () => {
        localStorage.setItem(`atpl-${id}`, input.value);
        checkExpiry(input.value, input);
      });
    });

    // Check for expired documents and flag them (approaching expiry)
    const checkExpiry = (date, inputField) => {
      const expiryDate = new Date(date);
      const today = new Date();
      const diffTime = expiryDate - today;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays <= 30 && diffDays > 0) {
        inputField.style.backgroundColor = "#FFFF99"; // Yellow for approaching expiry
      } else if (diffDays < 0) {
        inputField.style.backgroundColor = "#FF6666"; // Red for expired
      } else {
        inputField.style.backgroundColor = ""; // Default (white or neutral) if valid
      }
    };

    // Initial check on page load
    [licenseDate, medicalDate].forEach(input => {
      checkExpiry(input.value, input);
    });
  });
</script>

<!-- Optional CSS (put in custom.css or your layout) -->
<style>
  .tabs {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .tab-btn {
    padding: 0.5rem 1rem;
    background-color: #444;
    color: white;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  .tab-btn.active {
    background-color: #6DCB8E;
    color: black;
  }

  .tab-content {
    display: none;
  }

  .tab-content.active {
    display: block;
  }
</style>
