---
title:
aliases: []
tags: []
mocs:
draft: true
enableToc: false
dg-publish: false
date created:
date modified:
---

```dataview
TABLE WITHOUT ID key AS "unresolved link", rows.file.link AS "referencing file"
FLATTEN file.outlinks as outlinks
WHERE !(outlinks.file) AND !(contains(meta(outlinks).path, "/"))
GROUP BY outlinks
```