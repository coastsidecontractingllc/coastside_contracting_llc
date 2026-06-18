# SEO Audit Report

## Summary

The active root HTML site has a strong local SEO foundation: unique service pages, city overview pages, city/service pages, internal links, project photos, `robots.txt`, and `sitemap.xml`.

## Title Tags

Most public pages have unique title tags.

Issues:

```text
handyman-cape-coral.html and handyman-services-cape-coral.html have duplicate title tags.
about.html has a generic title.
gallery.html has a generic title.
```

Recommendation:

```text
Keep handyman-services-cape-coral.html as the preferred page and eventually make handyman-cape-coral.html a legacy redirect or canonical-equivalent page.
```

## Meta Descriptions

Most SEO landing pages have meta descriptions.

Missing:

```text
about.html
gallery.html
```

Recommendation:

```text
Add meta descriptions if those pages will remain public and indexable. If they should stay hidden, keep them out of main navigation and consider noindex later.
```

## H1 Tags

All root HTML pages currently have one H1.

## Heading Hierarchy

The service and city pages generally follow:

```text
H1 -> H2 sections
```

Issues:

```text
index.html uses an H2 inside the estimate modal.
about.html and gallery.html are thin pages with minimal heading/content structure.
```

## Internal Links

Strong internal link areas:

```text
services.html
contact.html
service landing pages
city overview pages
city/service pages
```

Recommendations:

```text
Add footer links to major service pages and city pages in a future phase.
Add a "For Realtors & Property Managers" landing page and link it from Services and Contact.
```

## Local SEO City Coverage

Core service-area cities are represented across the main homepage, services page, contact page, city pages, and service pages:

```text
Cape Coral
Fort Myers
Naples
Punta Gorda
Port Charlotte
Estero
Bonita Springs
```

This is handled without excessive keyword stuffing on most pages.

## Event Tracking Coverage

Implemented GA4-compatible events:

```text
phone_click
estimate_click
contact_submission
email_click
```

## Technical SEO

Present:

```text
robots.txt
sitemap.xml
unique root HTML pages
lazy-loaded images
descriptive image alt text on project photos
```

Needs future improvement:

```text
Add canonical tags.
Compress and rename more image files with descriptive names.
Resolve or formalize legacy pages like about.html, gallery.html, and handyman-cape-coral.html.
Add FAQ sections to top service/city pages.
```
