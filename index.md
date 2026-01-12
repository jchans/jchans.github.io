---
layout: layouts/layout.html
---

## 近期記事

{% for post in collections.post reversed %}

### {{ post.data.title }}

{{ post.content }}

{% endfor %}
