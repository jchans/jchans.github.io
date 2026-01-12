---
layout: layouts/layout.html
---

## 近期記事

{% for post in collections.post reversed %}

### {{ post.data.title }}

{{ post.content }}

{% endfor %}

---

## 其他

- [類似日記的東西](/posts-journal/)
