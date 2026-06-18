# City Page Template

Use this structure for future local SEO pages such as:

```text
fort-myers-handyman.html
naples-handyman.html
port-charlotte-handyman.html
```

## SEO Title Format

```text
[City] [Service] | Coastside Contracting LLC
```

Examples:

```text
Naples Handyman Services | Coastside Contracting LLC
Port Charlotte Bathroom Remodeling | Coastside Contracting LLC
```

## Meta Description Format

```text
[Service] in [City] from Coastside Contracting LLC, including [specific tasks]. Based in Cape Coral and serving Southwest Florida.
```

Keep descriptions specific and natural. Do not stuff every city into every city/service page unless it makes sense.

## H1 Format

```text
[City] [Service]
```

Examples:

```text
Naples Handyman Services
Fort Myers Bathroom Remodeling & Repair
```

## Page Structure

1. Header/navigation.
2. Landing hero with H1, short intro, and estimate CTA.
3. Service-specific section with 4-6 bullet points.
4. Project photos with 3 relevant images.
5. City-specific paragraph explaining common needs in that city.
6. Related service links for the same city.
7. Nearby city links.
8. Footer.

## Recommended Image Placement

Use 3 strong photos per city/service page:

```html
<img src="images/handyman/example.jpg" alt="Naples handyman repair project by Coastside Contracting LLC" loading="lazy" decoding="async">
```

Use real photos when possible. Captions can remain in the HTML, but visible captions are currently hidden with CSS.

## Internal Linking

Each new city/service page should link to:

```text
Same service in nearby city
Other services in the same city
Main Services page
Contact page
Relevant city overview page
```

## Service Area References

Use local references naturally:

```text
Coastside Contracting LLC is based in Cape Coral and serves Cape Coral, Fort Myers, Punta Gorda, Port Charlotte, Estero, Bonita Springs, and Naples.
```

Avoid forcing all cities into every paragraph. Use the full service area in one appropriate section, then keep the rest of the page focused on the target city and service.

## Required Tracking Scripts

Every new HTML page should include:

```html
<script src="analytics-config.js" defer></script>
<script src="analytics.js" defer></script>
```

Add those before `</head>`.
