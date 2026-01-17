---
layout: single
title: "Books"
permalink: /books/
author: "Edson OliveiraJr"
author_profile: true
---

{% for book in site.data.books %}

{% unless forloop.first %}
<hr>
{% endunless %}

<div class="book-entry">

  <div class="book-cover">
    <img src="{{ book.cover }}" alt="Cover of {{ book.title }}">
  </div>

  <div class="book-meta">
    <h2>{{ book.title }}</h2>

    {% if book.subtitle %}
      <p class="book-subtitle">{{ book.subtitle }}</p>
    {% endif %}

    <p class="book-authors">
      {{ book.authors }} <br>
      <em>{{ book.publisher }}</em>, {{ book.year }}
    </p>

    {% if book.doi %}
      <p class="book-doi">
        DOI:
        <a href="https://doi.org/{{ book.doi }}" target="_blank" rel="noopener">
          {{ book.doi }}
        </a>
      </p>
    {% endif %}

    <p class="book-abstract">
      {{ book.abstract }}
    </p>
  </div>

</div>

{% endfor %}
