# Coastside Contracting LLC Site Structure Report

## Live Static Website

The public website is built from root-level HTML files.

## Homepage

```text
index.html
```

## Contact Page

```text
contact.html
```

## Main Service Index

```text
services.html
```

## Service Pages

```text
bathroom-remodeling-cape-coral.html
floor-tile-repair-cape-coral.html
handyman-cape-coral.html
handyman-services-cape-coral.html
kitchen-remodeling-cape-coral.html
rental-property-maintenance-cape-coral.html
```

## City + Service Pages

```text
cape-coral-bathroom-remodeling.html
cape-coral-handyman-services.html
cape-coral-kitchen-remodeling.html
cape-coral-rental-property-maintenance.html
fort-myers-bathroom-remodeling.html
fort-myers-handyman-services.html
fort-myers-kitchen-remodeling.html
fort-myers-rental-property-maintenance.html
```

## City Overview Pages

```text
cape-coral-home-repair-remodeling.html
fort-myers-home-repair-remodeling.html
punta-gorda-home-repair-remodeling.html
port-charlotte-home-repair-remodeling.html
estero-home-repair-remodeling.html
bonita-springs-home-repair-remodeling.html
naples-home-repair-remodeling.html
```

## Existing Hidden/Legacy Pages

These files exist but are not currently visible in the top navigation:

```text
about.html
gallery.html
```

## Navigation

Visible navigation uses:

```text
Home -> index.html
Services -> services.html
Contact -> contact.html
```

The header is repeated in root-level HTML pages.

## Footer

Most service and city pages include a simple footer:

```text
Coastside Contracting LLC | Serving Southwest Florida
```

The homepage, services page, contact page, about page, and gallery page do not all share the same footer markup.

## CSS Files

Primary active stylesheet:

```text
styles.css
```

The homepage also contains inline CSS inside `index.html`.

The repository also contains Gatsby starter CSS modules under `src/`, but those are not used by the current static root HTML website.

## JavaScript Files

Active root-level tracking/config scripts:

```text
analytics-config.js
analytics.js
generate-sitemap.js
```

The homepage includes inline JavaScript for the estimate modal.

The repository also contains Gatsby starter JavaScript files under `src/`, but those are not used by the current static root HTML website.

## Site Connection Pattern

The site connects pages through:

```text
Top navigation
Services page service cards
City links
Related service links
Contact calls to action
Sitemap.xml
```
