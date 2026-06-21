(function () {
  function createModal() {
    var modal = document.createElement('div');
    modal.className = 'project-gallery-modal';
    modal.id = 'project-gallery-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'project-gallery-title');
    modal.setAttribute('aria-describedby', 'project-gallery-description');
    modal.hidden = true;
    modal.innerHTML = [
      '<div class="project-gallery-dialog" role="document">',
      '<button class="project-gallery-close" type="button" aria-label="Close project photo details">&times;</button>',
      '<div class="project-gallery-media"><img src="" alt=""></div>',
      '<div class="project-gallery-copy">',
      '<h3 id="project-gallery-title"></h3>',
      '<p id="project-gallery-description"></p>',
      '</div>',
      '</div>'
    ].join('');
    document.body.appendChild(modal);
    return modal;
  }

  function initProjectGallery() {
    var triggers = Array.prototype.slice.call(document.querySelectorAll('.project-photo-trigger'));
    if (!triggers.length) return;

    var modal = createModal();
    var closeButton = modal.querySelector('.project-gallery-close');
    var modalImage = modal.querySelector('.project-gallery-media img');
    var modalTitle = modal.querySelector('#project-gallery-title');
    var modalDescription = modal.querySelector('#project-gallery-description');
    var activeTrigger = null;

    function openModal(trigger) {
      var figure = trigger.closest('figure');
      var image = trigger.querySelector('img');
      var details = figure ? figure.querySelector('.project-photo-details') : null;
      var title = details ? details.querySelector('h3') : null;
      var description = details ? details.querySelector('p') : null;

      activeTrigger = trigger;
      modalImage.src = image.currentSrc || image.src;
      modalImage.alt = image.alt || '';
      modalTitle.textContent = title ? title.textContent : image.alt || 'Project Photo';
      modalDescription.textContent = description ? description.textContent : '';
      modal.hidden = false;
      document.body.classList.add('project-gallery-open');
      closeButton.focus();
    }

    function closeModal() {
      if (modal.hidden) return;
      modal.hidden = true;
      document.body.classList.remove('project-gallery-open');
      modalImage.removeAttribute('src');
      if (activeTrigger) activeTrigger.focus();
    }

    triggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        openModal(trigger);
      });
    });

    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', function (event) {
      if (event.target === modal) closeModal();
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeModal();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectGallery);
  } else {
    initProjectGallery();
  }
})();
