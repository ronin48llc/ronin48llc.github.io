---
layout: default
title: Work Experience
permalink: /resume/work-experience
---

<style>
  .resume-wrapper {
    max-width: 800px;
    margin: 0 auto;
  }

  .resume-wrapper h1 {
    margin-bottom: 0.5rem;
  }

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

  .resume-wrapper .work-title {
    font-weight: bold;
    font-size: 1.1rem;
  }

  .resume-wrapper .work-meta {
    font-style: italic;
    font-size: 0.9rem;
    opacity: 0.7;
    margin: 0.2rem 0 0.5rem;
  }

  .resume-wrapper .work-bullets {
    list-style: disc;
    padding-left: 1.2rem;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .resume-wrapper .work-bullets li {
    margin-bottom: 0.3rem;
  }

  .resume-wrapper .work-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
    margin-top: 0.5rem;
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
  <h1>Work Experience</h1>
  <div class="narrative">
    <p>I started my career doing QA and desktop support, and looking back, that grounding in how things break shaped everything that followed. Each role pulled me deeper into infrastructure, contact centers, and eventually cloud — not because I planned it that way, but because I kept saying yes to the hardest problem in the room. At Arise and WillowCSN I learned what it means to keep a platform running at scale with thousands of remote agents depending on it. At Pegasystems I got to build a cloud offering from scratch and see what enterprise customers in regulated industries actually need. And at CloudHesive, I got to do all of it — build products, grow teams, earn every AWS certification available, and help customers migrate, secure, and operate workloads across industries. Twenty-five years in, the thread that connects it all is the same: I like building things that work, for people who need them to.</p>
  </div>
  <p class="works-count"><span id="visible-count">{{ site.data.work-experience.size }}</span> of {{ site.data.work-experience.size }} roles shown</p>

  <div class="works-filters" id="tag-filters">
    <button class="tag-btn active" data-tag="all">All</button>
  </div>

  <div id="works-list">
  {% for job in site.data.work-experience %}
    <div class="work-item" data-tags="{{ job.tags | join: ' ' }}">
      <div class="work-title">{{ job.title }}</div>
      <div class="work-meta">{{ job.period }} · {{ job.location }}</div>
      <ul class="work-bullets">
        {% for bullet in job.bullets %}
          <li>{{ bullet }}</li>
        {% endfor %}
      </ul>
      <div class="work-tags">
        {% for tag in job.tags %}
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
  {% for job in site.data.work-experience %}
  { title: {{ job.title | jsonify }}, start: {{ job.start | jsonify }}, end: {{ job.end | default: nil | jsonify }}, tags: {{ job.tags | jsonify }} }{% unless forloop.last %},{% endunless %}
  {% endfor %}
];
</script>
{% include timeline-script.html %}
