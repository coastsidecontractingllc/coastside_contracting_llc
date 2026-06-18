(function () {
  var config = window.COASTSIDE_ANALYTICS || {};
  var measurementId = config.measurementId || '';
  var trackingEnabled = /^G-[A-Z0-9]+$/i.test(measurementId) && measurementId !== 'G-XXXXXXXXXX';

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  function sendEvent(eventName, parameters) {
    parameters = parameters || {};
    parameters.page_location = window.location.href;
    parameters.page_title = document.title;
    parameters.transport_type = 'beacon';

    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, parameters);
    }
  }

  window.coastsideTrackEvent = sendEvent;

  if (trackingEnabled) {
    var gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
    document.head.appendChild(gaScript);

    window.gtag('js', new Date());
    window.gtag('config', measurementId);
  }

  document.addEventListener('click', function (event) {
    var link = event.target.closest('a');
    var estimateButton = event.target.closest('#estimateBtn, .cta-button');

    if (link && link.href.indexOf('tel:') === 0) {
      sendEvent('phone_click', {
        link_url: link.href,
        link_text: link.textContent.trim()
      });
    }

    if (link && link.href.indexOf('mailto:') === 0) {
      sendEvent('email_click', {
        link_url: link.href,
        link_text: link.textContent.trim()
      });
    }

    if (estimateButton) {
      sendEvent('estimate_click', {
        link_url: estimateButton.href || '',
        link_text: estimateButton.textContent.trim()
      });
    }
  });

  document.addEventListener('submit', function (event) {
    if (event.target.matches('form')) {
      sendEvent('contact_submission', {
        form_id: event.target.id || '',
        form_name: event.target.getAttribute('name') || event.target.className || '',
        form_action: event.target.action || ''
      });
    }
  });
}());
