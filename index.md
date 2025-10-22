---
layout: layouts/layout.html
---

## 首頁 memo

所以 index.md 會產生 index.html

參考影片 [6 Minutes to Build a Blog from Scratch with Eleventy](https://www.youtube.com/watch?v=kzf9A9tkkl4)

{% for post in collections.post %}

<h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
<p>{{ post.data.preview }}</p>

{% endfor %}
