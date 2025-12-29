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
## git
```dataview
TABLE file.mtime AS "Last edited"
FROM ""
WHERE draft = false
SORT file.mtime DESC
LIMIT 10
```

## dg
```dataview
TABLE file.mtime AS "Last edited"
FROM ""
WHERE dg-publish = true
SORT file.mtime DESC
LIMIT 10
```
