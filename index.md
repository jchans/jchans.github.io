---
layout: layouts/layout.html
---

{% for post in collections.post reversed %}

## {{ post.data.title }}

{{ post.content }}

{% endfor %}
