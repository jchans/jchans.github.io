---
layout: layouts/layout.html
---

## 近期記事

{% for post in collections.post reversed %}

### {{ post.data.title }}

{{ post.data.preview }}

....[（繼續閱讀）]({{ post.url }})

{% endfor %}

---

## 其他

- [日期記事](/posts-journal/)
