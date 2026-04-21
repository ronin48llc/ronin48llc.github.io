---
layout: default
title: Career Timeline
permalink: /timeline
---

{% include timeline.html %}

<style>
  .timeline-wrapper {
    max-width: 800px;
    margin: 0 auto;
  }

  .timeline-wrapper h1 {
    margin-bottom: 0.5rem;
  }

  .timeline-wrapper .timeline-intro {
    font-size: 0.92rem;
    line-height: 1.6;
    opacity: 0.85;
    margin-bottom: 2rem;
  }

  .timeline-wrapper .timeline-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-bottom: 1.5rem;
  }

  .timeline-wrapper .tl-filter-btn {
    padding: 0.25rem 0.6rem;
    border: 1px solid currentColor;
    background: transparent;
    color: inherit;
    font-size: 0.8rem;
    cursor: pointer;
    border-radius: 3px;
    opacity: 0.6;
  }

  .timeline-wrapper .tl-filter-btn:hover { opacity: 1; }
  .timeline-wrapper .tl-filter-btn.active { opacity: 1; font-weight: bold; }

  .tl-full-legend {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
    font-size: 0.76rem;
    opacity: 0.7;
  }

  .tl-full-legend-item {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .tl-full-legend-dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    border: 2px solid currentColor;
  }

  .tl-full-legend-dot.filled { background: currentColor; }

  .tl-full-legend-swatch {
    width: 9px;
    height: 9px;
    border-radius: 2px;
  }

  .tl-full-legend-swatch.swatch-role { border: 2px solid #4a9eff; }
  .tl-full-legend-swatch.swatch-membership { border: 2px solid #22c55e; }
  .tl-full-legend-swatch.swatch-contribution { border: 2px solid #f59e0b; }
  .tl-full-legend-swatch.swatch-award { border: 2px solid #a855f7; }
  .tl-full-legend-swatch.swatch-project { border: 2px solid #ec4899; }

  /* Type-colored borders for the full timeline */
  #tl-container .tl-entry.tl-type-role { border-left-color: #4a9eff; }
  #tl-container .tl-entry.tl-type-membership { border-left-color: #22c55e; }
  #tl-container .tl-entry.tl-type-contribution { border-left-color: #f59e0b; }
  #tl-container .tl-entry.tl-type-award { border-left-color: #a855f7; }
  #tl-container .tl-entry.tl-type-project { border-left-color: #ec4899; }

  #tl-container .tl-entry.tl-type-role::before { border-color: #4a9eff; }
  #tl-container .tl-entry.tl-type-membership::before { border-color: #22c55e; }
  #tl-container .tl-entry.tl-type-contribution::before { border-color: #f59e0b; }
  #tl-container .tl-entry.tl-type-award::before { border-color: #a855f7; }
  #tl-container .tl-entry.tl-type-project::before { border-color: #ec4899; }

  #tl-container .tl-entry.tl-active.tl-type-role::before { background: #4a9eff; }
  #tl-container .tl-entry.tl-active.tl-type-membership::before { background: #22c55e; }
  #tl-container .tl-entry.tl-active.tl-type-contribution::before { background: #f59e0b; }
  #tl-container .tl-entry.tl-active.tl-type-award::before { background: #a855f7; }
  #tl-container .tl-entry.tl-active.tl-type-project::before { background: #ec4899; }

  .tl-entry-type {
    font-size: 0.63rem;
    opacity: 0.55;
    margin-left: 0.4rem;
  }
</style>

<div class="timeline-wrapper">
  <h1>Career Timeline</h1>
  <p class="timeline-intro">A chronological view across roles, memberships, contributions, awards, and projects.</p>

  <div class="tl-full-legend">
    <span class="tl-full-legend-item"><span class="tl-full-legend-dot filled"></span> Active</span>
    <span class="tl-full-legend-item"><span class="tl-full-legend-dot"></span> Past</span>
    <span class="tl-full-legend-item"><span class="tl-full-legend-swatch swatch-role"></span> Role</span>
    <span class="tl-full-legend-item"><span class="tl-full-legend-swatch swatch-membership"></span> Membership</span>
    <span class="tl-full-legend-item"><span class="tl-full-legend-swatch swatch-contribution"></span> Contribution</span>
    <span class="tl-full-legend-item"><span class="tl-full-legend-swatch swatch-award"></span> Award</span>
    <span class="tl-full-legend-item"><span class="tl-full-legend-swatch swatch-project"></span> Project</span>
  </div>

  <div class="timeline-filters" id="tag-filters">
    <button class="tl-filter-btn active" data-filter="all">All</button>
    <button class="tl-filter-btn" data-filter="role">Roles</button>
    <button class="tl-filter-btn" data-filter="membership">Memberships</button>
    <button class="tl-filter-btn" data-filter="contribution">Contributions</button>
    <button class="tl-filter-btn" data-filter="award">Awards</button>
    <button class="tl-filter-btn" data-filter="project">Projects</button>
  </div>

  <div class="tl-container" id="tl-container"></div>
</div>

<script>
(function () {
  "use strict";
  var items = [];

  // Work Experience
  {% for item in site.data.work-experience %}
  items.push({ title: {{ item.title | jsonify }}, type: "role", start: {{ item.start | jsonify }}, end: {{ item.end | default: nil | jsonify }}, tags: {{ item.tags | jsonify }} });
  {% endfor %}

  // Memberships
  {% for item in site.data.memberships %}
  {% if item.category == "Memberships" or item.category == "Volunteering" %}
  items.push({ title: {{ item.title | jsonify }}, type: "membership", start: {{ item.start | jsonify }}, end: {{ item.end | default: nil | jsonify }}, tags: {{ item.tags | jsonify }} });
  {% elsif item.category == "Former Roles" %}
  items.push({ title: {{ item.title | jsonify }}, type: "membership", start: {{ item.start | jsonify }}, end: {{ item.end | default: nil | jsonify }}, tags: {{ item.tags | jsonify }} });
  {% endif %}
  {% endfor %}

  // Awards
  {% for item in site.data.awards %}
  items.push({ title: {{ item.title | jsonify }}, type: "award", start: {{ item.start | jsonify }}, end: "event", tags: {{ item.tags | jsonify }} });
  {% endfor %}

  // Projects
  {% for item in site.data.projects %}
  items.push({ title: {{ item.title | jsonify }}, type: "project", start: {{ item.start | jsonify }}, end: {{ item.end | default: nil | jsonify }}, tags: {{ item.tags | jsonify }} });
  {% endfor %}

  // Media (presentations, press, speaking)
  {% for item in site.data.media %}
  items.push({ title: {{ item.title | jsonify }}, type: "contribution", start: "{{ item.date | date: '%Y-%m' }}", end: "event", tags: {{ item.tags | jsonify }} });
  {% endfor %}

  // Sort descending
  items.sort(function (a, b) {
    return (b.start || "").localeCompare(a.start || "");
  });

  var container = document.getElementById("tl-container");
  var currentYear = "";
  var html = "";

  items.forEach(function (item) {
    var year = (item.start || "").slice(0, 4);
    if (year && year !== currentYear) {
      currentYear = year;
      html += '<div class="tl-year-marker" data-year="' + year + '"><span>' + year + '</span></div>';
    }

    var isActive = !item.end;
    var cls = "tl-entry tl-type-" + item.type + (isActive ? " tl-active" : "");
    var tagsStr = (item.tags || []).join(" ");

    html += '<div class="' + cls + '" data-type="' + item.type + '" data-tags="' + tagsStr + '">';
    html += '<div class="tl-entry-title">' + item.title + '<span class="tl-entry-type">' + item.type + '</span></div>';

    var meta = item.start || "";
    if (item.end && item.end !== "event") meta += " → " + item.end;
    else if (!item.end && item.start) meta += " → present";
    html += '<div class="tl-entry-meta">' + meta + '</div>';

    if (item.tags && item.tags.length) {
      html += '<div class="tl-entry-tags">';
      item.tags.forEach(function (tag) {
        html += '<span class="tl-entry-tag" data-tag="' + tag + '">' + tag + '</span>';
      });
      html += '</div>';
    }
    html += '</div>';
  });

  container.innerHTML = html;

  // Filtering
  var entries = container.querySelectorAll(".tl-entry");
  var yearMarkers = container.querySelectorAll(".tl-year-marker");
  var filtersContainer = document.getElementById("tag-filters");
  var activeFilter = "all";

  filtersContainer.addEventListener("click", function (e) {
    if (!e.target.classList.contains("tl-filter-btn")) return;
    activeFilter = e.target.getAttribute("data-filter");
    filtersContainer.querySelectorAll(".tl-filter-btn").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-filter") === activeFilter);
    });
    filterItems();
  });

  container.addEventListener("click", function (e) {
    if (!e.target.classList.contains("tl-entry-tag")) return;
    activeFilter = "tag:" + e.target.getAttribute("data-tag");
    filtersContainer.querySelectorAll(".tl-filter-btn").forEach(function (b) {
      b.classList.remove("active");
    });
    filterItems();
  });

  function filterItems() {
    entries.forEach(function (el) {
      var show = false;
      if (activeFilter === "all") {
        show = true;
      } else if (activeFilter.indexOf("tag:") === 0) {
        var tag = activeFilter.slice(4);
        show = (el.getAttribute("data-tags") || "").split(" ").indexOf(tag) !== -1;
      } else {
        show = el.getAttribute("data-type") === activeFilter;
      }
      el.classList.toggle("tl-hidden", !show);
    });

    yearMarkers.forEach(function (ym) {
      var next = ym.nextElementSibling;
      var hasVisible = false;
      while (next && !next.classList.contains("tl-year-marker")) {
        if (next.classList.contains("tl-entry") && !next.classList.contains("tl-hidden")) {
          hasVisible = true;
          break;
        }
        next = next.nextElementSibling;
      }
      ym.classList.toggle("tl-hidden", !hasVisible);
    });
  }
})();
</script>
