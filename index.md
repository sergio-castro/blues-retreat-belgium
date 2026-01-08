---
layout: layout.html
title: The Blues Retreat (Belgium edition)
---

Days of belonging, music and dancing.

{% for p in collections.page %}
<h2> <a href = "{{ p.url | url}}"> {{ p.data.title }} </a></h2>
{% endfor %}