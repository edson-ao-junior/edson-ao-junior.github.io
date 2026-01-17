---
layout: page
title: Service
permalink: /service/
---

<section class="service-section">

<h1>Academic Service</h1>

<h2>Editorial Service</h2>
<ul class="service-list">
  {% for item in site.data.service.journals %}
    <li>
      <strong>{{ item.role }}</strong>,
      <em>{{ item.venue }}</em>
      {% if item.years %}
        ({{ item.years | join: ", " }})
      {% else %}
        ({{ item.start }} – {{ item.end }})
      {% endif %}
    </li>
  {% endfor %}
</ul>

<h2>Conference Leadership</h2>
<ul class="service-list">
  {% for item in site.data.service.conferences.chair %}
    <li>
      <strong>{{ item.role }}</strong>,
      <em>{{ item.venue }}</em>
      ({{ item.years | join: ", " }})
    </li>
  {% endfor %}
</ul>

<h2>International Conferences</h2>
<ul class="service-list">
  {% for item in site.data.service.conferences.international %}
    <li>
      <strong>{{ item.role }}</strong>,
      <em>{{ item.venue }}</em>
      ({{ item.years | join: ", " }})
    </li>
  {% endfor %}
</ul>

<h2>Brazilian Conferences</h2>
<ul class="service-list">
  {% for item in site.data.service.conferences.national %}
    <li>
      <strong>{{ item.role }}</strong>,
      <em>{{ item.venue }}</em>
      ({{ item.years | join: ", " }})
    </li>
  {% endfor %}
</ul>

</section>
