---
layout: page
title: Service
permalink: /service/
---

## Editorial Service

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

## Conference Leadership

<ul class="service-list">
{% for item in site.data.service.conferences.chair %}
  <li>
    <strong>{{ item.role }}</strong>,
    <em>{{ item.venue }}</em>
    ({{ item.years | join: ", " }})
  </li>
{% endfor %}
</ul>

## International Conferences

<ul class="service-list">
{% for item in site.data.service.conferences.international %}
  <li>
    <strong>{{ item.role }}</strong>,
    <em>{{ item.venue }}</em>
    ({{ item.years | join: ", " }})
  </li>
{% endfor %}
</ul>

## Brazilian Conferences

<ul class="service-list">
{% for item in site.data.service.conferences.national %}
  <li>
    <strong>{{ item.role }}</strong>,
    <em>{{ item.venue }}</em>
    ({{ item.years | join: ", " }})
  </li>
{% endfor %}
</ul>
