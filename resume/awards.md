---
layout: default
title: Awards & Recognition
permalink: /resume/awards
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
  <h1>Awards & Recognition</h1>
  <div class="narrative">
    <p>The recognition that means the most to me is the AWS Ambassador Program. Being the first employee accepted into it — and then receiving the Top Ambassador Award in 2023 — validated years of work that often happened quietly: writing exam questions as a certification SME, co-authoring whitepapers, running user group meetups in South Florida, and presenting at Re:Invent. These weren't things I did for visibility. I did them because I genuinely wanted to help people understand what's possible with cloud. Speaking at ITExpo and CMMC Day came from the same place — having something worth sharing about contact center modernization and compliance that I'd learned the hard way, through real customer engagements. And being principal during SOC and PCI audits wasn't glamorous, but it taught me that trust is earned through rigor, not marketing.</p>
  </div>
  <p class="works-count"><span id="visible-count">{{ site.data.awards.size }}</span> of {{ site.data.awards.size }} items shown</p>

  <div class="works-filters" id="tag-filters">
    <button class="tag-btn active" data-tag="all">All</button>
  </div>

  <div id="works-list">
  {% for award in site.data.awards %}
    <div class="work-item" data-tags="{{ award.tags | join: ' ' }}">
      <div class="work-title">{{ award.title }}</div>
      <div class="work-summary">{{ award.summary }}</div>
      <div class="work-tags">
        {% for tag in award.tags %}
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
