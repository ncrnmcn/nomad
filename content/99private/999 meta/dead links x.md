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
TABLE without id 
out AS "Incomplete Links", file.link as "Origin"
FLATTEN file.outlinks as out
WHERE !(out.file) AND !contains(meta(out).path, "/")
SORT out ASC
```

