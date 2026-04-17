(function () {
  "use strict";

  var searchInput = document.getElementById("search-input");
  var searchResults = document.getElementById("search-results");

  if (!searchInput || !searchResults) return;

  var posts = [];
  var index = null;

  fetch("/search.json")
    .then(function (response) {
      if (!response.ok) throw new Error("Failed to load search index");
      return response.json();
    })
    .then(function (data) {
      posts = data;
      index = lunr(function () {
        this.ref("url");
        this.field("title");
        this.field("content");

        data.forEach(function (post) {
          this.add(post);
        }, this);
      });
    })
    .catch(function () {
      searchResults.innerHTML = "<p>Search unavailable</p>";
      searchInput.disabled = true;
    });

  searchInput.addEventListener("input", function () {
    var query = searchInput.value.trim();

    if (!query) {
      searchResults.innerHTML = "";
      return;
    }

    if (!index) {
      searchResults.innerHTML = "<p>Search unavailable</p>";
      return;
    }

    var results = index.search(query);

    if (results.length === 0) {
      searchResults.innerHTML = "<p>No results found</p>";
      return;
    }

    var html = "<ul>";
    results.forEach(function (result) {
      var post = posts.find(function (p) {
        return p.url === result.ref;
      });
      if (post) {
        html +=
          '<li><a href="' + post.url + '">' + post.title + "</a>";
        if (post.description) {
          html += " — " + post.description;
        }
        html += "</li>";
      }
    });
    html += "</ul>";
    searchResults.innerHTML = html;
  });
})();
