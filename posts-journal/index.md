---
title: Index
date: 2025-11-20
preview:
---

{% for journal in collections.journal reversed %}

<h2><a href="{{ journal.url }}">{{ journal.data.title }}</a></h2>
<p>{{ journal.data.preview }}</p>

{% endfor %}
