---
title: 記事
date: 2025-11-20
show: false
---

每天的想法雜記

{% for journal in collections.journal reversed %}

{% if journal.data.show != false %}

---

## {{ journal.data.title }}

{{ journal.data.preview }}

.... [(繼續閱讀)]({{ journal.url }})

{% endif %}

{% endfor %}
