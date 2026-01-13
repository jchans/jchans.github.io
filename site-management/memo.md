---
title: 備忘
preview: 一些寫法的備忘
tag: post
---

## 摘要

放一些這個網誌的使用上的備忘。

就我目前的寫作習慣與整理檔案的方式，也許 Eleventy 對我來說是比較適合的工具？

### 測試 Quote

寫法參考： https://css-tricks.com/blockquote-bulge/

這裡寫點引用的東西

> 引用會是什麼形式？
> 測試空行
>
> 這是空一行之後
>
> 測試長句子一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十

引用之後再寫點東西

看來是段落？

### 測試 Code Block

寫法參考： https://css-tricks.com/considerations-styling-pre-tag/

```
sudo apt update
sudo apt upgrade
```

### 列出文章

https://www.11ty.dev/docs/collections/

```
{% raw %}
{% for post in collections.post reversed %}

<h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
<p>{{ post.data.preview }}</p>

{% endfor %}
{% endraw %}
```

目前 nunjuck 的語法是用以下方式去寫，但可能有更好的作法，待研究（25-1125）。

- https://github.com/11ty/eleventy/issues/791

```
{% raw %}
{% raw %}
{% endraw %}
```

比較長的 code ，修改了 css 的設定讓 codeblock 內容可以捲動 。（這顯然是想到以前那個 [糖果的廣告](https://www.youtube.com/watch?v=QYElO9T2JkU) ）

```
long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long
```

## log

- 2025-11-20 ，把這 Eleventy 做的靜態頁面整理好，今天開始慢慢把一些寫的東西集中、搬過來吧。
