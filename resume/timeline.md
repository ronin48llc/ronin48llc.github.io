---
layout: default
title: Timeline
permalink: /resume/timeline
---

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

  .timeline-legend {
    display: flex;
    gap: 1.2rem;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
    font-size: 0.78rem;
    opacity: 0.7;
  }

  .timeline-legend-item {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .legend-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid currentColor;
  }

  .legend-dot.filled { background: currentColor; }

  .legend-swatch {
    width: 10px;
    height: 10px;
    border-radius: 2px;
  }

  .legend-swatch.type-role { border: 2px solid #4a9eff; }
  .legend-swatch.type-membership { border: 2px solid #22c55e; }
  .legend-swatch.type-contribution { border: 2px solid #f59e0b; }
  .legend-swatch.type-award { border: 2px solid #a855f7; }
  .legend-swatch.type-project { border: 2px solid #ec4899; }

  .timeline {
    position: relative;
    padding-left: 2.2rem;
  }

  .timeline::before {
    content: '';
    position: absolute;
    left: 0.55rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: currentColor;
    opacity: 0.15;
  }

  .timeline-year {
    position: relative;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }

  .timeline-year-label {
    font-size: 0.9rem;
    font-weight: bold;
    opacity: 0.4;
    letter-spacing: 0.05em;
  }

  .timeline-year-label::before {
    content: '';
    position: absolute;
    left: -1.65rem;
    top: 0.25rem;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: currentColor;
    opacity: 0.3;
  }

  .timeline-item {
    position: relative;
    margin-bottom: 0.75rem;
    padding: 0.6rem 0.8rem;
    border-radius: 4px;
    border-left: 3px solid currentColor;
    opacity: 0.85;
    transition: opacity 0.2s, transform 0.2s;
    background: transparent;
  }

  .timeline-item:hover {
    opacity: 1;
    transform: translateX(2px);
  }

  .timeline-item.type-role { border-left-color: #4a9eff; }
  .timeline-item.type-membership { border-left-color: #22c55e; }
  .timeline-item.type-contribution { border-left-color: #f59e0b; }
  .timeline-item.type-award { border-left-color: #a855f7; }
  .timeline-item.type-project { border-left-color: #ec4899; }

  .timeline-item::before {
    content: '';
    position: absolute;
    left: -1.95rem;
    top: 0.85rem;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid currentColor;
    background: var(--bg, #fff);
  }

  @media (prefers-color-scheme: dark) {
    .timeline-item::before { background: var(--bg, #1a1a1a); }
  }

  .timeline-item.active-item::before { background: currentColor; }

  .timeline-item.type-role::before { border-color: #4a9eff; }
  .timeline-item.type-membership::before { border-color: #22c55e; }
  .timeline-item.type-contribution::before { border-color: #f59e0b; }
  .timeline-item.type-award::before { border-color: #a855f7; }
  .timeline-item.type-project::before { border-color: #ec4899; }

  .timeline-item.active-item.type-role::before { background: #4a9eff; }
  .timeline-item.active-item.type-membership::before { background: #22c55e; }
  .timeline-item.active-item.type-contribution::before { background: #f59e0b; }
  .timeline-item.active-item.type-award::before { background: #a855f7; }
  .timeline-item.active-item.type-project::before { background: #ec4899; }

  .timeline-item.hidden { display: none; }

  .timeline-item-title {
    font-size: 0.88rem;
    font-weight: bold;
  }

  .timeline-item-type {
    font-size: 0.68rem;
    padding: 0.1rem 0.35rem;
    border-radius: 2px;
    opacity: 0.7;
    margin-left: 0.4rem;
    vertical-align: middle;
  }

  .timeline-item-meta {
    font-size: 0.76rem;
    opacity: 0.55;
    margin-top: 0.15rem;
  }

  .timeline-item-summary {
    font-size: 0.8rem;
    opacity: 0.7;
    margin-top: 0.25rem;
    line-height: 1.4;
  }

  .timeline-item-tags {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    margin-top: 0.3rem;
  }

  .timeline-item-tag {
    font-size: 0.65rem;
    padding: 0.05rem 0.3rem;
    border: 1px solid currentColor;
    border-radius: 2px;
    opacity: 0.4;
    cursor: pointer;
  }

  .timeline-item-tag:hover { opacity: 1; }

  .timeline-year.hidden { display: none; }
</style>

<div class="timeline-wrapper">
  <h1>Timeline</h1>
  <p class="timeline-intro">A chronological view across roles, memberships, contributions, awards, and projects.</p>

  <div class="timeline-legend">
    <span class="timeline-legend-item"><span class="legend-dot filled"></span> Active</span>
    <span class="timeline-legend-item"><span class="legend-dot"></span> Past</span>
    <span class="timeline-legend-item"><span class="legend-swatch type-role"></span> Role</span>
    <span class="timeline-legend-item"><span class="legend-swatch type-membership"></span> Membership</span>
    <span class="timeline-legend-item"><span class="legend-swatch type-contribution"></span> Contribution</span>
    <span class="timeline-legend-item"><span class="legend-swatch type-award"></span> Award</span>
    <span class="timeline-legend-item"><span class="legend-swatch type-project"></span> Project</span>
  </div>

  <div class="timeline-filters" id="tl-filters">
    <button class="tl-filter-btn active" data-filter="all">All</button>
    <button class="tl-filter-btn" data-filter="role">Roles</button>
    <button class="tl-filter-btn" data-filter="membership">Memberships</button>
    <button class="tl-filter-btn" data-filter="contribution">Contributions</button>
    <button class="tl-filter-btn" data-filter="award">Awards</button>
    <button class="tl-filter-btn" data-filter="project">Projects</button>
  </div>

  <div class="timeline" id="timeline">
  </div>
</div>

<script>
(function () {
  "use strict";

  // Build timeline data from all sources
  var items = [];

  // Work Experience
  {% for item in site.data.work-experience %}
  items.push({
    title: {{ item.title | jsonify }},
    type: "role",
    start: {{ item.start | jsonify }},
    end: {{ item.end | default: nil | jsonify }},
    summary: {{ item.location | jsonify }},
    tags: {{ item.tags | jsonify }}
  });
  {% endfor %}

  // Memberships
  {% for item in site.data.memberships %}
  {% if item.category == "Memberships" or item.category == "" %}
  items.push({
    title: {{ item.title | jsonify }},
    type: "membership",
    start: {{ item.start | jsonify }},
    end: {{ item.end | default: nil | jsonify }},
    summary: "",
    tags: {{ item.tags | jsonify }}
  });
  {% elsif item.category == "Contributions" %}
  items.push({
    title: {{ item.title | jsonify }},
    type: "contribution",
    start: {{ item.start | jsonify }},
    end: {{ item.end | default: nil | jsonify }},
    summary: "",
    tags: {{ item.tags | jsonify }}
  });
  {% elsif item.category == "Former Roles" %}
  items.push({
    title: {{ item.title | jsonify }},
    type: "contribution",
    start: {{ item.start | jsonify }},
    end: {{ item.end | default: nil | jsonify }},
    summary: "",
    tags: {{ item.tags | jsonify }}
  });
  {% elsif item.category == "Volunteering" %}
  items.push({
    title: {{ item.title | jsonify }},
    type: "membership",
    start: {{ item.start | jsonify }},
    end: {{ item.end | default: nil | jsonify }},
    summary: "",
    tags: {{ item.tags | jsonify }}
  });
  {% endif %}
  {% endfor %}

  // Awards
  {% for item in site.data.awards %}
  items.push({
    title: {{ item.title | jsonify }},
    type: "award",
    start: {{ item.start | jsonify }},
    end: null,
    summary: {{ item.summary | jsonify }},
    tags: {{ item.tags | jsonify }}
  });
  {% endfor %}

  // Projects
  {% for item in site.data.projects %}
  items.push({
    title: {{ item.title | jsonify }},
    type: "project",
    start: {{ item.start | jsonify }},
    end: {{ item.end | default: nil | jsonify }},
    summary: {{ item.summary | jsonify }},
    tags: {{ item.tags | jsonify }}
  });
  {% endfor %}

  // Sort by start date descending
  items.sort(function (a, b) {
    return (b.start || "").localeCompare(a.start || "");
  });

  // Render timeline
  var container = document.getElementById("timeline");
  var currentYear = "";
  var html = "";

  items.forEach(function (item) {
    var year = (item.start || "").slice(0, 4);
    if (year && year !== currentYear) {
      currentYear = year;
      html += '<div class="timeline-year" data-year="' + year + '">';
      html += '<div class="timeline-year-label">' + year + '</div>';
      html += '</div>';
    }

    var isActive = !item.end;
    var classes = "timeline-item type-" + item.type;
    if (isActive) classes += " active-item";

    var tagsStr = (item.tags || []).join(" ");
    html += '<div class="' + classes + '" data-type="' + item.type + '" data-tags="' + tagsStr + '">';
    html += '<div class="timeline-item-title">' + item.title;
    html += '<span class="timeline-item-type">' + item.type + '</span>';
    html += '</div>';

    var meta = item.start || "";
    if (item.end) meta += " → " + item.end;
    else if (item.start) meta += " → present";
    html += '<div class="timeline-item-meta">' + meta + '</div>';

    if (item.summary) {
      // Truncate long summaries
      var summary = item.summary.length > 120 ? item.summary.slice(0, 120) + "…" : item.summary;
      html += '<div class="timeline-item-summary">' + summary + '</div>';
    }

    if (item.tags && item.tags.length > 0) {
      html += '<div class="timeline-item-tags">';
      item.tags.forEach(function (tag) {
        html += '<span class="timeline-item-tag" data-tag="' + tag + '">' + tag + '</span>';
      });
      html += '</div>';
    }

    html += '</div>';
  });

  container.innerHTML = html;

  // Filtering
  var allItems = container.querySelectorAll(".timeline-item");
  var yearEls = container.querySelectorAll(".timeline-year");
  var filtersContainer = document.getElementById("tl-filters");
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
    if (!e.target.classList.contains("timeline-item-tag")) return;
    activeFilter = "tag:" + e.target.getAttribute("data-tag");
    filtersContainer.querySelectorAll(".tl-filter-btn").forEach(function (b) {
      b.classList.remove("active");
    });
    filterItems();
  });

  function filterItems() {
    allItems.forEach(function (el) {
      var show = false;
      if (activeFilter === "all") {
        show = true;
      } else if (activeFilter.indexOf("tag:") === 0) {
        var tag = activeFilter.slice(4);
        var tags = (el.getAttribute("data-tags") || "").split(" ");
        show = tags.indexOf(tag) !== -1;
      } else {
        show = el.getAttribute("data-type") === activeFilter;
      }
      el.classList.toggle("hidden", !show);
    });

    yearEls.forEach(function (yearEl) {
      var next = yearEl.nextElementSibling;
      var hasVisible = false;
      while (next && !next.classList.contains("timeline-year")) {
        if (next.classList.contains("timeline-item") && !next.classList.contains("hidden")) {
          hasVisible = true;
          break;
        }
        next = next.nextElementSibling;
      }
      yearEl.classList.toggle("hidden", !hasVisible);
    });
  }
})();
</script>
