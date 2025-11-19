---
title: Post Title, Post 1
preview: "測試：寫一段預覽的文字，不要太長，摘要文章就好。"
tag: post
---

參考影片 [6 Minutes to Build a Blog from Scratch with Eleventy](https://www.youtube.com/watch?v=kzf9A9tkkl4)

所以 index.md 會產生 index.html

## Test

content

## Test

content

看來他的 layout 檔案要放在

```
/_include/layouts/
```

之下


- [羽落異境](/posts/FeatherFallOddity/)

{% for post in collections.post %}

<h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
<p>{{ post.data.preview }}</p>

{% endfor %}