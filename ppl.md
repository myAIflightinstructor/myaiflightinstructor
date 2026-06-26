---
layout: default
title: Private Pilot Licence (PPL)
---

<h1>Private Pilot Licence (PPL)</h1>

<!-- Tabs -->
<div class="tabs">
  <button class="tab-btn active" data-tab="progress-tab">Progress</button>
  <button class="tab-btn" data-tab="lessonplans-tab">Lesson Plans</button>
  <button class="tab-btn" data-tab="briefing">Briefing</button>
  <button class="tab-btn" data-tab="info-tab">Important Information</button>
  <button class="tab-btn" data-tab="documents-tab">Documents</button>
</div>
<style>
  /* Green color for headings */
  .lesson-heading {
    color: #2D9B6B; /* Calming green color */
    cursor: pointer; /* Makes the heading look clickable */
  }
  /* Style for the collapsible content */
  .collapsible-content {
    padding-left: 20px;
    display: none; /* Hidden by default */
  }
  /* Button to collapse/expand */
  .collapsible-button {
    background-color: #2D9B6B; /* Calming green */
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 16px;
  }
  /* Button on hover */
  .collapsible-button:hover {
    background-color: #1A6E47;
  }
</style>

<script>
  // Function to toggle collapsible sections
  function toggleCollapsible(contentId) {
    var content = document.getElementById(contentId);
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block"; // Show the content
    } else {
      content.style.display = "none"; // Hide the content
    }
  }
</script>



<!-- Progress Tab -->
<div id="progress-tab" class="tab-content active">
  <h2>Lesson Progress</h2>
  <div class="progress-columns">
  <div class="progress-section">
  <h3 class="lesson-heading" onclick="toggleCollapsible('progress-exams')">Exams</h3>
  <div id="progress-exams" class="collapsible-content" style="display: none;">
  <form id="exam-progress-form">
  <!-- Exam checkboxes here -->
   </form>
   </div>
   <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-exam-1"> PPL Air Law</label><br>
   <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-exam-2"> PPL Meteorology</label><br>
   <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-exam-3"> PPL Principles of Flight</label><br>
   <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-exam-4"> PPL Navigation</label><br>
   <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-exam-5"> PPL Flight Performance and Planning</label><br>
   <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-exam-6"> PPL Human Performance</label><br>
   <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-exam-7"> PPL Aircraft Technical and General</label><br>
   <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-exam-8"> Restricted Radio Telephony</label><br>
   </div>
   <div class="progress-section">
   <h3>Flight Training</h3>
   <form id="practical-progress-form">
   <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-1"> Ex 1: Aircraft Systems / Emergency Drills</label><br>
   <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-2"> Ex 2: Preperation for Flight and Action after Flight</label><br>
   <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-3"> Ex 3: Air Experiance </label><br>
   <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-4"> Ex 4: Effects of Controls</label><br>
   <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-5"> Ex 5: Taxying </label><br>
   <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-6"> Ex 6: Straight and Level Flight</label><br>
   <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-7"> Ex 7: Climbing</label><br>
   <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-8"> Ex 8: Descending </label><br>
   <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-9"> Ex 9: Turning </label><br>
   <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-10"> Ex 10: Stalling </label><br>
   <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-11"> Ex 11: Spinning</label><br>
   <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-12"> Ex 12: Take-off and Climb to downwind</label><br>
   <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-13"> Ex 13: Circuit, Approach and Landing </label><br>
   <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-14"> Ex 12+13E: Emergencies / Crosswind Take-off and Landing </label><br>
   <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-15"> Ex 14: First Solo </label><br>
   <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-16"> Ex 15: Advanced Turning </label><br>
   <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-17"> Ex 16: Forced Landing without Power </label><br>
   <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-18"> Ex 17A+B: Low Flying / Precautionary  Landing </label><br>
   <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-19"> Ex 18A: Pilot Navigation </label><br>
   <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-20"> Ex 18B: Navigation at Lower Levels / Reduced visibility </label><br>
   <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-21"> Ex 18C: Use of Radio Aids under VFR </label><br>
   </form>
   </div>
  </div>

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

<!-- Important Information Tab -->
<div id="info-tab" class="tab-content" style="display: none;">
  <h2>Important Information</h2>
  <p>This is where you'll find important info to guide you along your PPL journey.</p>
  <ul>
    <li><a href="https://www.caa.co.za/approved-training-organizations/" target="_blank">Is your flight school certified?</a></li>
    <li><a href="https://caasanwebsitestorage.blob.core.windows.net/shared-documents/Senior%20Dames.pdf" target="_blank">Where to find a medical examiner?</a></li>
  </ul>
</div>



<!-- Lesson Plans= Tab -->
<div id="lessonplans-tab" class="tab-content" style="display: none;">
  <h2 class="lesson-heading">Lesson Plans</h2>  
  <!-- Exam Lessons Section -->
<div class="progress-section-group">
  <h3 class="lesson-heading" onclick="toggleCollapsible('exam-lessons')">Exam Lessons</h3>
  <div id="exam-lessons" class="collapsible-content">
    <div class="progress-columns">
      <div class="progress-section">
        <h4 class="lesson-heading">Air Law</h4>
        <label>
          <input type="checkbox" class="lesson-check" data-lesson-id="ppl-exam-1"> Completed
        </label>
        <p>Summary of CAA regulations, licensing, and operating procedures.</p>
        <a href="#">SACAA Syllabus</a><br>
        <a href="#">Course Notes</a><br>
        <a href="#">Videos</a><br>
        <a href="#">Mock Exams</a><br>
      </div>
      <div class="progress-section">
        <h4 class="lesson-heading">Meteorology</h4>
        <label>
          <input type="checkbox" class="lesson-check" data-lesson-id="ppl-exam-2"> Completed
        </label>
        <p>Basic weather theory and aviation forecasts.</p>
        <a href="{{ '/assets/pdfs/ppl.met.syl.pdf' | relative_url }}" target="_blank" style="color: #00bfff;"> SACAA Syllabus</a><br>
        <span class="course-notes-link" onclick="toggleSection('met-syllabus')">
  📘 Course Notes
</span>
<div id="met-syllabus" class="syllabus" style="display: none;">
  <strong>Meteorology — PPL (Aeroplane)</strong>
  <ul>
    <li><strong>The Atmosphere</strong>
      <ul>
        <li>Composition and structure</li>
        <li>Vertical divisions</li>
        <li>ICAO Standard Atmosphere (ISA)</li>
      </ul>
    </li>
    <li><strong>Pressure, Density & Temperature</strong>
      <ul>
        <li>Pressure lapse rate</li>
        <li>Density altitude</li>
        <li>Effect on aircraft performance</li>
      </ul>
    </li>
    <li><strong>Wind & Pressure Systems</strong>
      <ul>
        <li>High and low pressure areas</li>
        <li>Geostrophic and surface winds</li>
        <li>Windshear and turbulence</li>
      </ul>
    </li>
    <li><strong>Clouds & Visibility</strong>
      <ul>
        <li>Cloud types</li>
        <li>Fog, mist and haze</li>
        <li>VFR visibility requirements</li>
      </ul>
    </li>
    <li><strong>Thunderstorms & Severe Weather</strong>
      <ul>
        <li>Conditions for formation</li>
        <li>Associated hazards</li>
        <li>Avoidance</li>
      </ul>
    </li>
    <li><strong>Aviation Weather Information</strong>
      <ul>
        <li>METAR</li>
        <li>TAF</li>
        <li>SIGMET</li>
        <li>ATIS</li>
      </ul>
    </li>
  </ul>
</div>
        <a href="#">Videos</a>
      </div>
      <div class="progress-section">
        <h4 class="lesson-heading">Principles of Flight</h4>
        <label>
          <input type="checkbox" class="lesson-check" data-lesson-id="ppl-exam-3"> Completed
        </label>
        <p>Aerodynamic fundamentals and aircraft behaviour.</p>
       <a href="#">SACAA Syllabus</a><br>
        <a href="#">Course Notes</a><br>
        <a href="#">Videos</a><br>
        <a href="#">Mock Exams</a><br>
      </div>
      <div class="progress-section">
        <h4 class="lesson-heading">Navigation</h4>
        <label>
          <input type="checkbox" class="lesson-check" data-lesson-id="ppl-exam-7"> Completed
        </label>
        <p>Study of flight navigation, route planning, and airspace management.</p>
        <a href="#">SACAA Syllabus</a><br>
        <a href="#">Course Notes</a><br>
        <a href="#">Videos</a><br>
        <a href="#">Mock Exams</a><br>
      </div>
      <div class="progress-section">
        <h4 class="lesson-heading">Flight Performance and Planning</h4>
        <label>
        <input type="checkbox" class="lesson-check" data-lesson-id="ppl-exam-8"> Completed
        </label>
        <p>Understanding aircraft performance charts, weight and balance, fuel calculations, and flight planning.</p>
       <a href="#">SACAA Syllabus</a><br>
        <a href="#">Course Notes</a><br>
        <a href="#">Videos</a><br>
        <a href="#">Mock Exams</a><br>
      </div>
      <div class="progress-section">
        <h4 class="lesson-heading">Human Performance</h4>
        <label>
          <input type="checkbox" class="lesson-check" data-lesson-id="ppl-exam-9"> Completed
        </label>
        <p>Study of human physiology, limitations, and performance in flight operations.</p>
       <a href="#">SACAA Syllabus</a><br>
        <a href="#">Course Notes</a><br>
        <a href="#">Videos</a><br>
        <a href="#">Mock Exams</a><br>
      </div>
      <div class="progress-section">
        <h4 class="lesson-heading">Aircraft Technical and General</h4>
        <label>
        <input type="checkbox" class="lesson-check" data-lesson-id="ppl-exam-10"> Completed
        </label>
        <p>Overview of aircraft systems, engines, and general maintenance procedures.</p>
        <a href="#">SACAA Syllabus</a><br>
        <a href="#">Course Notes</a><br>
        <a href="#">Videos</a><br>
        <a href="#">Mock Exams</a><br>
      </div>
      <div class="progress-section">
        <h4 class="lesson-heading">Restricted Radio Telephony</h4>
        <label>
          <input type="checkbox" class="lesson-check" data-lesson-id="ppl-exam-11"> Completed
        </label>
        <a href="#">SACAA Syllabus</a><br>
        <a href="#">Course Notes</a><br>
        <a href="#">Videos</a><br>
        <a href="#">Mock Exams</a><br>
      </div>
    </div>
  </div>
</div>

  
  <!-- Space between Exam and Flight Training -->
  <div style="height: 30px;"></div>
<!-- Flight Training Lessons Section -->
<div class="progress-section-group">
  <h3 class="lesson-heading" onclick="toggleCollapsible('flight-lessons')">Flight Training Lessons</h3>
  <div id="flight-lessons" class="collapsible-content">
    <div class="progress-columns-two">
      <!-- Example Flight Training Blocks -->
      <div class="progress-section">
        <h4 class="lesson-heading">Ex 1: Aircraft Systems / Emergency Drills</h4>
        <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-1"> Completed</label>
        <p>Introduction to flight, basic understanding of flight controls.</p>
        <a href="#">Theory Briefing</a><br>
        <a href="#">Air Exercise Brief</a><br>
        <a href="#">Debrief</a><br>
        <a href="#">Videos</a><br>
      </div>
      <div class="progress-section">
        <h4 class="lesson-heading">Ex 2: Preperation for Flight and Action after Flight</h4>
        <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-2"> Completed</label>
        <p>How primary and secondary controls affect aircraft attitude.</p>
        <a href="#">Theory Briefing</a><br>
        <a href="#">Air Exercise Brief</a><br>
        <a href="#">Debrief</a><br>
        <a href="#">Videos</a><br>
      </div>
      <div class="progress-section">
       <h4 class="lesson-heading">Ex 3: Air Experiance</h4>
       <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-3"> Completed</label>
       <p>Ground handling, controls during taxi, wind awareness.</p>
        <a href="#">Theory Briefing</a><br>
        <a href="#">Air Exercise Brief</a><br>
        <a href="#">Debrief</a><br>
        <a href="#">Videos</a><br>
      </div>
     <div class="progress-section">
      <h4 class="lesson-heading">Ex 4: Effects of Controls</h4>
      <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-4"> Completed</label>
      <p>Maintaining altitude, attitude, and heading at constant airspeed.</p>
        <a href="#">Theory Briefing</a><br>
        <a href="#">Air Exercise Brief</a><br>
        <a href="#">Debrief</a><br>
        <a href="#">Videos</a><br>
      </div>
      <div class="progress-section">
      <h4 class="lesson-heading">Ex 5: Taxying</h4>
      <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-5"> Completed</label>
     <p>Normal climbs/descents, best rate/angle, leveling off.</p>
        <a href="#">Theory Briefing</a><br>
        <a href="#">Air Exercise Brief</a><br>
        <a href="#">Debrief</a><br>
        <a href="#">Videos</a><br>
      </div>
      <div class="progress-section">
      <h4 class="lesson-heading">Ex 6: Straight and Level Flight</h4>
      <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-6"> Completed</label>
      <p>Coordinated turns at 30° bank angle, maintaining altitude.</p>
        <a href="#">Theory Briefing</a><br>
        <a href="#">Air Exercise Brief</a><br>
        <a href="#">Debrief</a><br>
        <a href="#">Videos</a><br>
      </div>
      <div class="progress-section">
       <h4 class="lesson-heading">Ex 7: Climbing</h4>
      <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-7"> Completed</label>
      <p>Combining pitch and bank for smooth climbs and descents.</p>
        <a href="#">Theory Briefing</a><br>
        <a href="#">Air Exercise Brief</a><br>
        <a href="#">Debrief</a><br>
        <a href="#">Videos</a><br>
      </div>
      <div class="progress-section">
     <h4 class="lesson-heading">Ex 8: Descending</h4>
      <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-8"> Completed</label>
      <p>Recognising and recovering from stalls, safety margin awareness.</p>
        <a href="#">Theory Briefing</a><br>
        <a href="#">Air Exercise Brief</a><br>
        <a href="#">Debrief</a><br>
        <a href="#">Videos</a><br>
      </div>
      <div class="progress-section">
      <h4 class="lesson-heading">Ex 9: Turning</h4>
     <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-9"> Completed</label>
     <p>Understanding spin dynamics and recovery techniques (theoretical).</p>
        <a href="#">Theory Briefing</a><br>
        <a href="#">Air Exercise Brief</a><br>
        <a href="#">Debrief</a><br>
        <a href="#">Videos</a><br>
      </div>
      <div class="progress-section">
     <h4 class="lesson-heading">Ex 10: Stalling</h4>
     <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-10"> Completed</label>
      <p>Emergency landings without power, field selection, safety procedures.</p>
        <a href="#">Theory Briefing</a><br>
        <a href="#">Air Exercise Brief</a><br>
        <a href="#">Debrief</a><br>
        <a href="#">Videos</a><br>
      </div>
      <div class="progress-section">
      <h4 class="lesson-heading">Ex 11: Spinning</h4>
      <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-11"> Completed</label>
     <p>Landing due to deteriorating weather, technical or situational factors.</p>
        <a href="#">Theory Briefing</a><br>
        <a href="#">Air Exercise Brief</a><br>
        <a href="#">Debrief</a><br>
        <a href="#">Videos</a><br>
      </div>
      <div class="progress-section">
      <h4 class="lesson-heading">Ex 12: Takeoff and Climb to downwind</h4>
      <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-12"> Completed</label>
      <p>Standard circuit patterns, approach paths, and normal landings.</p>
        <a href="#">Theory Briefing</a><br>
        <a href="#">Air Exercise Brief</a><br>
        <a href="#">Debrief</a><br>
        <a href="#">Videos</a><br>
      </div>
      <div class="progress-section">
     <h4 class="lesson-heading">Ex 13: Circuit, Approach and Landing </h4>
      <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-13"> Completed</label>
      <p>Take-off procedures, climb-out, and joining the circuit.</p>
        <a href="#">Theory Briefing</a><br>
        <a href="#">Air Exercise Brief</a><br>
        <a href="#">Debrief</a><br>
        <a href="#">Videos</a><br>
      </div>
      <div class="progress-section">
     <h4 class="lesson-heading">Ex 12+13E: Emergencies / Crosswind Take-off and Landing</h4>
      <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-14"> Completed</label>
     <p>Engine failure after take-off, radio failure, overshoots.</p>
        <a href="#">Theory Briefing</a><br>
        <a href="#">Air Exercise Brief</a><br>
        <a href="#">Debrief</a><br>
        <a href="#">Videos</a><br>
      </div>
      <div class="progress-section">
     <h4 class="lesson-heading">Ex 14: First Solo</h4>
      <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-15"> Completed</label>
      <p>Basic instrument scan, straight and level, climbing/descending turns.</p>
        <a href="#">Theory Briefing</a><br>
        <a href="#">Air Exercise Brief</a><br>
        <a href="#">Debrief</a><br>
        <a href="#">Videos</a><br>
      </div>
      <div class="progress-section">
      <h4 class="lesson-heading">Ex 15: Advanced Turning</h4>
     <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-16"> Completed</label>
     <p>Turns with a bank angle of 45° or more, height and speed control.</p>
        <a href="#">Theory Briefing</a><br>
        <a href="#">Air Exercise Brief</a><br>
        <a href="#">Debrief</a><br>
        <a href="#">Videos</a><br>
      </div>
      <div class="progress-section">
     <h4 class="lesson-heading">Ex 16: Forced Landing without Power</h4>
      <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-17"> Completed</label>
      <p>Slip techniques for height loss or crosswind landings.</p>
        <a href="#">Theory Briefing</a><br>
        <a href="#">Air Exercise Brief</a><br>
        <a href="#">Debrief</a><br>
        <a href="#">Videos</a><br>
      </div>
      <div class="progress-section">
      <h4 class="lesson-heading">Ex 17A+B: Low Flying / Precautionary Landing</h4>
      <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-18"> Completed</label>
      <p>Map reading, route planning, and in-flight navigation techniques.</p>
         <a href="#">Theory Briefing</a><br>
        <a href="#">Air Exercise Brief</a><br>
        <a href="#">Debrief</a><br>
        <a href="#">Videos</a><br>
      </div>
       <div class="progress-section">
      <h4 class="lesson-heading">Ex 18A: Pilot Navigation</h4>
      <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-19"> Completed</label>
      <p>Map reading, route planning, and in-flight navigation techniques.</p>
         <a href="#">Theory Briefing</a><br>
        <a href="#">Air Exercise Brief</a><br>
        <a href="#">Debrief</a><br>
        <a href="#">Videos</a><br>
      </div>
         <div class="progress-section">
      <h4 class="lesson-heading">Ex 18B: Navigation at Lower Levels / Reduced visibility</h4>
      <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-20"> Completed</label>
      <p>Map reading, route planning, and in-flight navigation techniques.</p>
         <a href="#">Theory Briefing</a><br>
        <a href="#">Air Exercise Brief</a><br>
        <a href="#">Debrief</a><br>
        <a href="#">Videos</a><br>
      </div>
         <div class="progress-section">
      <h4 class="lesson-heading">Ex 18C: Use of Radio Aids under VFR</h4>
      <label><input type="checkbox" class="lesson-check" data-lesson-id="ppl-flight-21"> Completed</label>
      <p>Map reading, route planning, and in-flight navigation techniques.</p>
         <a href="#">Theory Briefing</a><br>
        <a href="#">Air Exercise Brief</a><br>
        <a href="#">Debrief</a><br>
        <a href="#">Videos</a><br>
</div>
    </div>
  </div>
</div>


<!-- Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- Script -->
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    // Tab switching
    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        tabContents.forEach(tc => tc.style.display = "none");

        btn.classList.add("active");
        document.getElementById(btn.dataset.tab).style.display = "block";
      });
    });

    // LocalStorage keys and checkboxes
    const checkboxes = document.querySelectorAll('.lesson-check');
    const chartCtx = document.getElementById('progress-chart').getContext('2d');
    const keyPrefix = "ppl-progress-";

    function syncCheckboxesAndLessons() {
      checkboxes.forEach(cb => {
        const id = cb.dataset.lessonId;
        const saved = localStorage.getItem(`${keyPrefix}${id}`);
        if (saved === "true") cb.checked = true;

        const lessonDiv = document.querySelector(`.lesson-item[data-lesson-id="${id}"]`);
        if (lessonDiv) {
          lessonDiv.classList.toggle("completed", cb.checked);
        }

        cb.addEventListener("change", () => {
          localStorage.setItem(`${keyPrefix}${id}`, cb.checked);
          if (lessonDiv) {
            lessonDiv.classList.toggle("completed", cb.checked);
          }
          updateChart();
        });
      });
    }

    function getProgressData() {
      const completed = Array.from(checkboxes).filter(cb => cb.checked).length;
      return [completed, checkboxes.length - completed];
    }

    const chart = new Chart(chartCtx, {
      type: 'pie',
      data: {
        datasets: [{
          data: getProgressData(),
          backgroundColor: ['#6DCB8E', '#E0E0E0'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' }
        }
      }
    });

    function updateChart() {
      chart.data.datasets[0].data = getProgressData();
      chart.update();
    }

    // Document tracking
    const licenseDate = document.getElementById("license-date");
    const medicalDate = document.getElementById("medical-date");
    const examDate = document.getElementById("exam-date");
    const examExpiryDate = document.getElementById("exam-expiry-date");

    [licenseDate, medicalDate, examDate].forEach(input => {
      const stored = localStorage.getItem(`ppl-${input.id}`);
      if (stored) input.value = stored;

      input.addEventListener("change", () => {
        localStorage.setItem(`ppl-${input.id}`, input.value);
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

      function checkExpiry(input, buffer = 30) {
        const date = new Date(input.value);
        const diff = (date - today) / (1000 * 3600 * 24);
        if (diff < 0) return "expired";
        if (diff <= buffer) return "nearing-expiry";
        return "valid";
      }

      function setColor(input, status) {
        input.style.backgroundColor =
          status === "expired" ? "red" :
          status === "nearing-expiry" ? "yellow" : "green";
      }

      setColor(licenseDate, checkExpiry(licenseDate));
      setColor(medicalDate, checkExpiry(medicalDate));
      setColor(examExpiryDate, checkExpiry(examExpiryDate));
    }

    updateDocumentStatus();
    syncCheckboxesAndLessons();
    updateChart();

    // Accordion
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

<!-- Style -->
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
    background-color:rgb(42, 187, 93);
    color: white;
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
    transition: background 0.3s ease;
  }

  .lesson-item.completed {
    background-color: #333;
    opacity: 0.6;
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
<script>
document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".lesson-check");

  // Shade + line-through helper
  function shadeSection(checkbox, isChecked) {
    const section = checkbox.closest(".progress-section");
    if (section) {
      section.classList.toggle("completed", isChecked);
    }
  }

  // Sync all checkboxes by lesson-id
  function syncCheckboxes(id, isChecked) {
    document.querySelectorAll(`.lesson-check[data-lesson-id="${id}"]`).forEach((cb) => {
      cb.checked = isChecked;
      shadeSection(cb, isChecked);
    });
  }

  // INIT: Load saved states
  checkboxes.forEach((checkbox) => {
    const id = checkbox.dataset.lessonId;
    const saved = localStorage.getItem(`ppl-${id}`);
    const isChecked = saved === "true";
    syncCheckboxes(id, isChecked);
  });

  // LISTEN: Sync + save on change
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const id = checkbox.dataset.lessonId;
      const isChecked = checkbox.checked;
      localStorage.setItem(`ppl-${id}`, isChecked);
      syncCheckboxes(id, isChecked);
    });
  });
});
<script>
