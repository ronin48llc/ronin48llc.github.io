---
layout: default
title: Memberships & Contributions
permalink: /resume/memberships
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

  .resume-wrapper .skill-category {
    margin-bottom: 1.5rem;
  }

  .resume-wrapper .skill-category h3 {
    margin-bottom: 0.5rem;
  }

  .resume-wrapper .work-item {
    margin-bottom: 0.5rem;
    padding: 0.4rem 0;
  }

  .resume-wrapper .work-title {
    font-size: 0.9rem;
  }

  .resume-wrapper .work-tags {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 0.3rem;
    margin-left: 0.5rem;
  }

  .resume-wrapper .work-tag {
    font-size: 0.7rem;
    padding: 0.1rem 0.35rem;
    border: 1px solid currentColor;
    border-radius: 2px;
    opacity: 0.5;
    cursor: pointer;
  }

  .resume-wrapper .work-tag:hover { opacity: 1; }
  .resume-wrapper .work-item.hidden { display: none; }
  .resume-wrapper .skill-category.all-hidden { display: none; }
</style>

<div class="resume-wrapper">
  <h1>Memberships & Contributions</h1>
  <div class="narrative">
    <p>Community has always been the part of this career that energizes me the most. Leading the AWS User Group in South Florida, presenting at local meetups, and eventually speaking at Re:Invent and ITExpo — those experiences reminded me that the best way to learn something deeply is to teach it. Contributing to CIS Benchmarks and co-authoring AWS whitepapers gave me a way to take hard-won operational knowledge and make it useful to people I'd never meet. Being an APN Ambassador and Well-Architected Lead meant I could bridge the gap between what AWS builds and what customers actually need. And the memberships — ISC2, InfraGard, FinOps Foundation — aren't just lines on a resume. They're communities where I've found peers who care about the same things I do: doing the work right, and helping others do the same.</p>
  </div>
  <p class="works-count"><span id="visible-count">{{ site.data.memberships.size }}</span> of {{ site.data.memberships.size }} items shown</p>

  <div class="works-filters" id="tag-filters">
    <button class="tag-btn active" data-tag="all">All</button>
  </div>

  <div id="works-list">
  {% assign categories = site.data.memberships | map: "category" | uniq %}
  {% for cat in categories %}
    <div class="skill-category" data-category="{{ cat }}">
      <h3>{{ cat }}</h3>
      {% for item in site.data.memberships %}
        {% if item.category == cat %}
        <div class="work-item" data-tags="{{ item.tags | join: ' ' }}">
          <span class="work-title">{{ item.title }}</span>
          <span class="work-tags">
            {% for tag in item.tags %}
              <span class="work-tag" data-tag="{{ tag }}">{{ tag }}</span>
            {% endfor %}
          </span>
        </div>
        {% endif %}
      {% endfor %}
    </div>
  {% endfor %}
  </div>
</div>

<script>
(function () {
  "use strict";
  var items = document.querySelectorAll(".work-item");
  var categories = document.querySelectorAll(".skill-category");
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
    categories.forEach(function (cat) {
      var visibleItems = cat.querySelectorAll(".work-item:not(.hidden)");
      cat.classList.toggle("all-hidden", visibleItems.length === 0);
    });
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
  {% for item in site.data.memberships %}
  { title: {{ item.title | jsonify }}, start: {{ item.start | jsonify }}, end: {{ item.end | default: nil | jsonify }}, tags: {{ item.tags | jsonify }} }{% unless forloop.last %},{% endunless %}
  {% endfor %}
];
</script>
{% include timeline-script.html %}
