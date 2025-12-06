import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "untitled",
    description: "no description",
  },
  components: {
    callout: {
      note: "note",
      abstract: "abstract",
      info: "info",
      todo: "todo",
      tip: "tip",
      success: "success",
      question: "question",
      warning: "warning",
      failure: "failure",
      danger: "danger",
      bug: "bug",
      example: "example",
      quote: "quote",
    },
    backlinks: {
      title: "backlink",
      noBacklinksFound: "no backlinks found",
    },
    themeToggle: {
      lightMode: "light",
      darkMode: "dark",
    },
    readerMode: {
      title: "reader",
    },
    explorer: {
      title: "files",
    },
    footer: {
      createdWith: "created with",
    },
    graph: {
      title: "local node",
    },
    recentNotes: {
      title: "recent entries",
      seeRemainingMore: ({ remaining }) => `see ${remaining} more →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `transclude of ${targetSlug}`,
      linkToOriginal: "access origin",
    },
    search: {
      title: "scan",
      searchBarPlaceholder: "scan local node",
    },
    tableOfContents: {
      title: "index",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} min read`,
    },
  },
  pages: {
    rss: {
      recentNotes: "recent entries",
      lastFewNotes: ({ count }) => `last ${count} entries`,
    },
    error: {
      title: "critical error",
      notFound: "access denied",
      home: "return:0xH0M3",
    },
    folderContent: {
      folder: "directory",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 item under this directory" : `${count} items under this directory`,
    },
    tagContent: {
      tag: "trace",
      tagIndex: "trace index",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 item with this trace" : `${count} items with this trace`,
      showingFirst: ({ count }) => `showing first ${count} traces`,
      totalTags: ({ count }) => `found ${count} total traces`,
    },
  },
} as const satisfies Translation
