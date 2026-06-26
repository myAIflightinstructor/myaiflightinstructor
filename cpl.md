---
layout: default
title: Commercial Pilot Licence (CPL)
---

<h1>Commercial Pilot Licence (CPL)</h1>

<!-- Tabs -->
<div class="tabs">
  <button class="tab-btn active" data-tab="progress-tab">Progress</button>
  <button class="tab-btn" data-tab="documents-tab">Documents</button>
  <button class="tab-btn" data-tab="lessonplans-tab">Lesson Plans</button>
</div>

<!-- Progress Tab -->
<div id="progress-tab" class="tab-content active">
  <h2>Lesson Progress</h2>

  <div class="progress-columns">
    <!-- Exam Progress -->
    <div class="progress-section">
      <h3>Exams</h3>
      <form id="exam-progress-form">
        <label><input type="checkbox" class="lesson-check" id="cpl-exam-1"> CPL Air Law</label><br>
        <label><input type="checkbox" class="lesson-check" id="cpl-exam-2"> CPL Meteorology</label><br>
        <label><input type="checkbox" class="lesson-check" id="cpl-exam-3"> CPL Aircraft Technical</label><br>
        <label><input type="checkbox" class="lesson-check" id="cpl-exam-4"> CPL Human Performance</label><br>
        <label><input type="checkbox" class="lesson-check" id="cpl-exam-5"> CPL Flight Planning & Performance</label><br>
        <label><input type="checkbox" class="lesson-check" id="cpl-exam-6"> CPL Navigation</label><br>
        <label><input type="checkbox" class="lesson-check" id="cpl-exam-7"> CPL Instruments & Radio Aids</label><br>
      </form>
    </div>

    <!-- Flight Training -->
    <div class="progress-section">
      <h3>Flight Training</h3>
      <form id="practical-progress-form">
        <label><input type="checkbox" class="lesson-check" id="cpl-flight-1"> CPL Advanced General Handling</label><br>
        <label><input type="checkbox" class="lesson-check" id="cpl-flight-2"> CPL Navigation Exercise</label><br>
        <label><input type="checkbox" class="lesson-check" id="cpl-flight-3"> CPL Instrument Flying</label><br>
        <label><input type="checkbox" class="lesson-check" id="cpl-flight-4"> CPL Night Flying</label><br>
        <label><input type="checkbox" class="lesson-check" id="cpl-flight-5"> CPL Flight Test Prep</label><br>
      </form>
    </div>
  </div>

  <h3>Your Progress</h3>
  <canvas id="progress-chart" width="150" height="150"></canvas>
</div>

<!-- Documents Tab -->
<div id="documents-tab" class="tab-content" style="display: none;">
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
    <label>
      First Exam Pass Date:
      <input type="date" id="exam-date">
    </label><br><br>
    <label>
      Exam Expiry Date:
      <input type="date" id="exam-expiry-date" readonly>
    </label>
  </form>
</div>

<!-- Lesson Plans Tab -->
<div id="lessonplans-tab" class="tab-content" style="display: none;">
  <h2>Lesson Plans</h2>
  <div class="lesson-accordion">
    <div class="lesson-item">
      <button class="accordion-toggle">Lesson 1: Advanced Flight Manoeuvres</button>
      <div class="accordion-content">
        <p>Focuses on high-performance manoeuvring and emergency recovery.</p>
        <ul>
          <li>Objectives</li>
          <li>Briefing content</li>
          <li><a href="#">Download PDF</a> (coming soon)</li>
        </ul>
      </div>
    </div>

    <div class="lesson-item">
      <button class="accordion-toggle">Lesson 2: IFR Procedures</button>
      <div class="accordion-content">
        <p>Encompasses SID/STAR, holds, instrument approaches.</p>
        <ul>
          <li>Standard procedures</li>
          <li>ATC coordination</li>
          <li><a href="#">Download PDF</a> (coming soon)</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- Scripts -->
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        tabContents.forEach(tc => tc.style.display = "none");

        btn.classList.add("active");
        document.getElementById(btn.dataset.tab).style.display = "block";
      });
    });

    const keyPrefix = "cpl-progress-";
    const checkboxes = document.querySelectorAll('.lesson-check');
    const chartCtx = document.getElementById('progress-chart').getContext('2d');

    checkboxes.forEach((cb, index) => {
      const saved = localStorage.getItem(`${keyPrefix}${index}`);
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
                return `${label}: ${value} item${value !== 1 ? 's' : ''}`;
              }
            }
          }
        }
      }
    });

    checkboxes.forEach((cb, index) => {
      cb.addEventListener('change', () => {
        localStorage.setItem(`${keyPrefix}${index}`, cb.checked);
        chart.data.datasets[0].data = getProgressData();
        chart.update();
      });
    });

    // Initial update
    chart.data.datasets[0].data = getProgressData();
    chart.update();

    // Document tracking
    const licenseDate = document.getElementById("license-date");
    const medicalDate = document.getElementById("medical-date");
    const examDate = document.getElementById("exam-date");
    const examExpiryDate = document.getElementById("exam-expiry-date");

    [licenseDate, medicalDate, examDate].forEach(input => {
      const stored = localStorage.getItem(`cpl-${input.id}`);
      if (stored) input.value = stored;

      input.addEventListener("change", () => {
        localStorage.setItem(`cpl-${input.id}`, input.value);
        if (input.id === "exam-date") {
          const examPassDate = new Date(input.value);
          const expiryDate = new Date(examPassDate.setMonth(examPassDate.getMonth() + 18));
          examExpiryDate.value = expiryDate.toISOString().split('T')[0];
        }
        updateDocumentStatus();
      });
    });

    function updateDocumentStatus() {
      const today = new Date();

      function checkExpiry(input, expiryBufferDays = 30) {
        const date = new Date(input.value);
        const diffDays = (date - today) / (1000 * 3600 * 24);
        if (diffDays < 0) return "expired";
        if (diffDays <= expiryBufferDays) return "nearing-expiry";
        return "valid";
      }

      const licenseStatus = checkExpiry(licenseDate);
      const medicalStatus = checkExpiry(medicalDate);
      const examStatus = checkExpiry(examExpiryDate);

      licenseDate.style.backgroundColor = licenseStatus === "expired" ? "red" : licenseStatus === "nearing-expiry" ? "yellow" : "green";
      medicalDate.style.backgroundColor = medicalStatus === "expired" ? "red" : medicalStatus === "nearing-expiry" ? "yellow" : "green";
      examExpiryDate.style.backgroundColor = examStatus === "expired" ? "red" : examStatus === "nearing-expiry" ? "yellow" : "green";
    }

    updateDocumentStatus();

    // Accordion functionality
    const toggles = document.querySelectorAll(".accordion-toggle");
    toggles.forEach(toggle => {
      toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
        const content = toggle.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
      });
    });
  });
</script>

<!-- Styling -->
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

  .progress-columns {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  .progress-section {
    flex: 1;
    background-color: #2a2a2a;
    padding: 1rem;
    border-radius: 0.5rem;
  }

  .progress-section h3 {
    margin-top: 0;
    color: #6DCB8E;
  }

  .progress-section label {
    display: block;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }

  .lesson-accordion {
    margin-top: 1rem;
  }

  .lesson-item {
    margin-bottom: 1rem;
    border: 1px solid #444;
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .accordion-toggle {
    background-color: #333;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    font-size: 1rem;
    cursor: pointer;
  }

  .accordion-toggle.active {
    background-color: #6DCB8E;
    color: black;
  }

  .accordion-content {
    display: none;
    padding: 1rem;
    background-color: #2a2a2a;
    color: white;
  }

  @media (max-width: 768px) {
    .progress-columns {
      flex-direction: column;
    }
  }
</style>
