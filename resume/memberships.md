---
layout: default
title: Memberships
permalink: /memberships
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
  .resume-wrapper .work-title a { color: inherit; text-decoration: none; border-bottom: 1px dashed currentColor; }
  .resume-wrapper .work-title a:hover { opacity: 0.7; }

  .resume-wrapper .work-dates {
    font-size: 0.85rem;
    opacity: 0.6;
    margin-top: 0.2rem;
  }

  .resume-wrapper .work-category {
    font-size: 0.8rem;
    opacity: 0.5;
    margin-top: 0.2rem;
    font-style: italic;
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
  <h1>Memberships</h1>
  <p class="works-count"><span id="visible-count">{{ site.data.memberships.size }}</span> of {{ site.data.memberships.size }} items shown</p>

  <div class="works-filters" id="tag-filters">
    <button class="tag-btn active" data-tag="all">All</button>
  </div>

  <div id="works-list">
  {% assign current = site.data.memberships | where: "category", "Memberships" %}
  {% if current.size > 0 %}
  <h2>Current</h2>
  {% for item in current %}
  <div class="work-item" data-tags="{{ item.tags | join: ' ' }}">
    <div class="work-title">
      {% if item.url %}<a href="{{ item.url }}" target="_blank" rel="noopener">{{ item.title }} ↗</a>{% else %}{{ item.title }}{% endif %}
    </div>
    <div class="work-dates">Since {{ item.start }}</div>
    <div class="work-tags">
      {% for tag in item.tags %}
        <span class="work-tag" data-tag="{{ tag }}">{{ tag }}</span>
      {% endfor %}
    </div>
  </div>
  {% endfor %}
  {% endif %}

  {% assign former = site.data.memberships | where: "category", "Former Roles" %}
  {% if former.size > 0 %}
  <h2>Former Roles</h2>
  {% for item in former %}
  <div class="work-item" data-tags="{{ item.tags | join: ' ' }}">
    <div class="work-title">
      {% if item.url %}<a href="{{ item.url }}" target="_blank" rel="noopener">{{ item.title }} ↗</a>{% else %}{{ item.title }}{% endif %}
    </div>
    <div class="work-dates">{{ item.start }}{% if item.end %} — {{ item.end }}{% endif %}</div>
    <div class="work-tags">
      {% for tag in item.tags %}
        <span class="work-tag" data-tag="{{ tag }}">{{ tag }}</span>
      {% endfor %}
    </div>
  </div>
  {% endfor %}
  {% endif %}
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
  });
  document.getElementById("works-list").addEventListener("click", function (e) {
    if (!e.target.classList.contains("work-tag")) return;
    activeTag = e.target.getAttribute("data-tag");
    filtersContainer.querySelectorAll(".tag-btn").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-tag") === activeTag);
    });
    filterItems();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
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
