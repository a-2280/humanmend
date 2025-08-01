// BACKUP OF ORIGINAL STRUCTURE - FOR EASY ROLLBACK
// To restore: copy this content back to structure.js

// https://www.sanity.io/docs/structure-builder-cheat-sheet
import {
  HomeIcon,
  DocumentIcon,
  UserIcon,
  EnvelopeIcon,
  HeartIcon,
  UsersIcon,
  CommentIcon,
  DocumentsIcon,
  CogIcon,
} from "@sanity/icons";

export const structure = (S) =>
  S.list()
    .title("HumanMend Content")
    .items([
      // MAIN WEBSITE PAGES
      S.listItem()
        .title("Website Pages")
        .icon(DocumentsIcon)
        .child(
          S.list()
            .title("Website Pages")
            .items([
              S.listItem()
                .title("Home Page")
                .icon(HomeIcon)
                .child(S.documentTypeList("home")),
              S.listItem()
                .title("About Page")
                .icon(UserIcon)
                .child(S.documentTypeList("about")),
              S.listItem()
                .title("Contact Page")
                .icon(EnvelopeIcon)
                .child(S.documentTypeList("contact")),
            ])
        ),

      // THERAPY SERVICES
      S.listItem()
        .title("Therapy Services")
        .icon(HeartIcon)
        .child(
          S.list()
            .title("Therapy Services")
            .items([
              S.listItem()
                .title("Anxiety Therapy")
                .icon(HeartIcon)
                .child(S.documentTypeList("anxiety")),
              S.listItem()
                .title("Eating Disorder Therapy")
                .icon(HeartIcon)
                .child(S.documentTypeList("eating-disorder")),
              S.listItem()
                .title("Group Therapy")
                .icon(UsersIcon)
                .child(S.documentTypeList("group")),
              S.listItem()
                .title("Consultation")
                .icon(CommentIcon)
                .child(S.documentTypeList("consultation")),
            ])
        ),

      // BLOG CONTENT
      S.listItem()
        .title("Blog Posts")
        .icon(DocumentsIcon)
        .child(
          S.list()
            .title("Blog Posts")
            .items([
              S.listItem()
                .title("Blog Landing Page")
                .icon(DocumentsIcon)
                .child(S.documentTypeList("blog")),
              S.divider(),
              S.listItem()
                .title("Blog Post 1")
                .icon(DocumentIcon)
                .child(S.documentTypeList("blog1")),
              S.listItem()
                .title("Blog Post 2")
                .icon(DocumentIcon)
                .child(S.documentTypeList("blog2")),
              S.listItem()
                .title("Blog Post 3")
                .icon(DocumentIcon)
                .child(S.documentTypeList("blog3")),
              S.listItem()
                .title("Blog Post 4")
                .icon(DocumentIcon)
                .child(S.documentTypeList("blog4")),
              S.listItem()
                .title("Blog Post 5")
                .icon(DocumentIcon)
                .child(S.documentTypeList("blog5")),
              S.listItem()
                .title("Blog Post 6")
                .icon(DocumentIcon)
                .child(S.documentTypeList("blog6")),
            ])
        ),

      // SETTINGS
      S.divider(),
      S.listItem()
        .title("SEO Settings")
        .icon(CogIcon)
        .child(S.documentTypeList("seo")),
    ]);