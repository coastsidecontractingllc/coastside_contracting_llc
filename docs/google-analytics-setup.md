# Google Analytics 4 Setup

This site is prepared for Google Analytics 4 tracking. The tracking code is loaded on every root HTML page through:

```html
<script src="analytics-config.js" defer></script>
<script src="analytics.js" defer></script>
```

## Create a GA4 Property

1. Go to Google Analytics.
2. Open Admin.
3. Create or select the account for Coastside Contracting LLC.
4. Create a new GA4 property for `coastsideswfl.com`.
5. Choose Web as the data stream type.
6. Enter the website URL:

```text
https://coastsideswfl.com
```

7. Name the stream:

```text
Coastside Contracting LLC Website
```

## Find the Measurement ID

1. In Google Analytics, open Admin.
2. Go to Data streams.
3. Click the web stream for `coastsideswfl.com`.
4. Copy the Measurement ID. It will look like:

```text
G-XXXXXXXXXX
```

## Add the Measurement ID to the Website

Edit this file:

```text
analytics-config.js
```

Replace:

```js
measurementId: 'G-XXXXXXXXXX'
```

with the real GA4 Measurement ID:

```js
measurementId: 'G-ABC123DEFG'
```

Only this one file needs to be edited.

## Events Already Tracked

The site sends these GA4-compatible event names:

```text
phone_click
estimate_click
contact_submission
email_click
```

Tracked interactions include phone links, email links, Schedule Your Free Estimate buttons, and form submissions.

## Future Pages

Future HTML pages should include these two scripts before `</head>`:

```html
<script src="analytics-config.js" defer></script>
<script src="analytics.js" defer></script>
```

Pages created from `docs/city-page-template.md` should include those scripts by default.

You can also run this after creating a new root-level HTML page:

```bash
npm run analytics:install
```

That helper scans root `.html` files and inserts the analytics scripts on pages that do not have them yet.
