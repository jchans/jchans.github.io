---
title: Eleventy 使用備忘
preview: 一些寫法的備忘
tag: post
---

## 摘要

就我目前的寫作習慣與整理檔案的方式，也許 Eleventy 對我來說是比較適合的工具？

### 測試 Quote

這裡寫點引用的東西

> 引用會是什麼形式？
> 測試空行
>
> 這是空一行之後

引用之後再寫點東西

看來是段落？

### 測試 Code Block

```
sudo apt update
sudo apt upgrade
```

### 列出文章

https://www.11ty.dev/docs/collections/

```
{/% for post in collections.post reversed %/}

<h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
<p>{{ post.data.preview }}</p>

{/% endfor %/}
```

## log

- 2025-11-20 ，把這 Eleventy 做的靜態頁面整理好，今天開始慢慢把一些寫的東西集中、搬過來吧。
