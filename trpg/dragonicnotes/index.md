---
title: 龍語筆記
date: 2026-05-21
show: false
---

龍語筆記的文字慢慢整理到這裡

{% for dragonicnotes in collections.dragonicnotes reversed %}

{% if dragonicnotes.data.show != false %}

---

## {{ dragonicnotes.data.title }}

{{ dragonicnotes.data.preview }}

.... [(繼續閱讀)]({{ dragonicnotes.url }})

{% endif %}

{% endfor %}
