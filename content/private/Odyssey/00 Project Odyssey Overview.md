---
title:
tags: []
draft: true
enableToc:
dg-publish:
date created: Saturday, November 15th 2025, 2:41:20 pm
date modified: Saturday, November 29th 2025, 5:51:41 pm
aliases: []
mocs:
---

# Project Odyssey Overview

## Tasks

```tasks
sort by priority
group by path
not done
```

## Chapters

[[A01 Awakening]]

[[X01 Glossar]]

[[X98 Ideas]]

```dataview
table join(sort(rows.file.link), " | ") as Files 
WHERE contains(file.folder, this.file.folder)
FLATTEN regexreplace(file.folder, ".*/", "") as lastPart 
GROUP BY lastPart as Folder 
SORT lastPart
```