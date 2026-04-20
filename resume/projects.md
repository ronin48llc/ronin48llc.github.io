---
layout: default
title: Projects
permalink: /projects
---

<style>
  .resume-wrapper {
    max-width: 800px;
    margin: 0 auto;
  }

  .resume-wrapper h1 { margin-bottom: 0.5rem; }

  .resume-wrapper .works-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-bottom: 1.5rem;
  }

  .resume-wrapper .tag-btn {
    padding: 0.25rem 0.6rem;
    border: 1px solid currentColor;
    background: transparent;
    color: inherit;
    font-size: 0.8rem;
    cursor: pointer;
    border-radius: 3px;
    opacity: 0.6;
  }

  .resume-wrapper .tag-btn:hover { opacity: 1; }
  .resume-wrapper .tag-btn.active { opacity: 1; font-weight: bold; }

  .resume-wrapper .narrative {
    font-size: 0.92rem;
    line-height: 1.6;
    opacity: 0.85;
    margin-bottom: 1.5rem;
    border-left: 2px solid currentColor;
    padding-left: 1rem;
  }

  .resume-wrapper .works-count {
    font-size: 0.85rem;
    opacity: 0.7;
    margin-bottom: 1rem;
  }

  .resume-wrapper .work-item {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid currentColor;
  }

  .resume-wrapper .work-item:last-child { border-bottom: none; }

  .resume-wrapper .work-title { font-weight: bold; }

  .resume-wrapper .work-summary {
    font-size: 0.9rem;
    margin: 0.3rem 0;
    opacity: 0.85;
  }

  .resume-wrapper .work-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
    margin-top: 0.4rem;
  }

  .resume-wrapper .work-tag {
    font-size: 0.75rem;
    padding: 0.1rem 0.4rem;
    border: 1px solid currentColor;
    border-radius: 2px;
    opacity: 0.5;
    cursor: pointer;
  }

  .resume-wrapper .work-tag:hover { opacity: 1; }
  .resume-wrapper .work-item.hidden { display: none; }
</style>

<div class="resume-wrapper">
  <h1>Projects</h1>
  <div class="narrative">
    <p>These are the things I built that I'm most proud of. ConnectPath started as a simple agent dashboard for Amazon Connect and grew over ten years into a full SaaS platform with generative AI capabilities — evolving from Java and MySQL to fully serverless along the way. That arc mirrors my own growth as an engineer and product leader. The Encryption as a Service platform was born out of a real customer need during a time when cloud encryption options were limited, and it became the foundation for everything CloudHesive did in managed security. At Pegasystems, building a cloud platform that could satisfy the most demanding enterprise and government customers taught me what production-grade really means. And the contact center platform at Arise — supporting 5,000 remote agents across the country — was where I first learned that scale isn't just a technical problem, it's an operational one.</p>
  </div>
  <p class="works-count"><span id="visible-count">{{ site.data.projects.size }}</span> of {{ site.data.projects.size }} projects shown</p>

  <div class="works-filters" id="tag-filters">
    <button class="tag-btn active" data-tag="all">All</button>
  </div>

  <div id="works-list">
  {% for project in site.data.projects %}
    <div class="work-item" data-tags="{{ project.tags | join: ' ' }}">
      <div class="work-title">{{ project.title }}</div>
      <div class="work-summary">{{ project.summary }}</div>
      <div class="work-tags">
        {% for tag in project.tags %}
          <span class="work-tag" data-tag="{{ tag }}">{{ tag }}</span>
        {% endfor %}
      </div>
    </div>
  {% endfor %}
  </div>
</div>

<script>
(function () {
  "use strict";
  var items = document.querySelectorAll(".work-item");
  var filtersContainer = document.getElementById("tag-filters");
  var countEl = document.getElementById("visible-count");
  var tagSet = {};
  items.forEach(function (item) {
    (item.getAttribute("data-tags") || "").split(" ").forEach(function (t) { if (t) tagSet[t] = true; });
  });
  Object.keys(tagSet).sort().forEach(function (tag) {
    var btn = document.createElement("button");
    btn.className = "tag-btn";
    btn.setAttribute("data-tag", tag);
    btn.textContent = tag;
    filtersContainer.appendChild(btn);
  });
  var activeTag = "all";
  filtersContainer.addEventListener("click", function (e) {
    if (!e.target.classList.contains("tag-btn")) return;
    activeTag = e.target.getAttribute("data-tag");
    filtersContainer.querySelectorAll(".tag-btn").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-tag") === activeTag);
    });
    filterItems();
    if (window.__tlSetFilter) window.__tlSetFilter(activeTag);
  });
  document.getElementById("works-list").addEventListener("click", function (e) {
    if (!e.target.classList.contains("work-tag")) return;
    activeTag = e.target.getAttribute("data-tag");
    filtersContainer.querySelectorAll(".tag-btn").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-tag") === activeTag);
    });
    filterItems();
    if (window.__tlSetFilter) window.__tlSetFilter(activeTag);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  window.__tlFilterSync = function (tag) {
    activeTag = tag;
    filtersContainer.querySelectorAll(".tag-btn").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-tag") === activeTag);
    });
    filterItems();
  };
  function filterItems() {
    var visible = 0;
    items.forEach(function (item) {
      if (activeTag === "all") { item.classList.remove("hidden"); visible++; }
      else {
        var tags = (item.getAttribute("data-tags") || "").split(" ");
        if (tags.indexOf(activeTag) !== -1) { item.classList.remove("hidden"); visible++; }
        else { item.classList.add("hidden"); }
      }
    });
    countEl.textContent = visible;
  }
})();
</script>

{% include timeline.html %}

<div class="tl-section">
  <h2>Timeline</h2>
  <div class="tl-legend">
    <span class="tl-legend-item"><span class="tl-legend-dot filled"></span> Active</span>
    <span class="tl-legend-item"><span class="tl-legend-dot"></span> Past</span>
  </div>
  <div class="tl-container" id="tl-container"></div>
</div>

<script>
window.__tlItems = [
  {% for item in site.data.projects %}
  { title: {{ item.title | jsonify }}, start: {{ item.start | jsonify }}, end: {{ item.end | default: nil | jsonify }}, tags: {{ item.tags | jsonify }} }{% unless forloop.last %},{% endunless %}
  {% endfor %}
];
</script>
{% include timeline-script.html %}
