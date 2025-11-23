---
title: 日期記事
date: 2025-11-20
show: false
---

{% for journal in collections.journal reversed %}

{% if journal.data.show != false %}

<h2>{{ journal.data.title }}</h2>
<p>{{ journal.data.preview }}<a href="{{ journal.url }}">....（繼續閱讀）</a></p>

{% endif %}

{% endfor %}
