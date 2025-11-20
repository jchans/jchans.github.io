---
layout: layouts/layout.html
---

{% for post in collections.post reversed %}

<h2>{{ post.data.title }}</h2>
<p>{{ post.data.preview }}<a href="{{ post.url }}">....（繼續閱讀）</a></p>

{% endfor %}
