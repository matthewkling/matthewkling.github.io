// Projects index: filter rows by type (software / papers / visualization).
(function () {
  var chips = document.querySelectorAll('.chip[data-filter]');
  var rows = document.querySelectorAll('.rows > li[data-groups]');
  if (!chips.length) return;

  function apply(filter) {
    chips.forEach(function (c) {
      c.setAttribute('aria-pressed', c.getAttribute('data-filter') === filter ? 'true' : 'false');
    });
    rows.forEach(function (r) {
      var groups = (r.getAttribute('data-groups') || '').split(' ');
      r.hidden = !(filter === 'all' || groups.indexOf(filter) > -1);
    });
  }

  chips.forEach(function (c) {
    c.addEventListener('click', function () {
      var f = c.getAttribute('data-filter');
      apply(f);
      history.replaceState(null, '', f === 'all' ? location.pathname : '#' + f);
    });
  });

  // Honor #software etc., plus the old #tag=software links.
  var h = decodeURIComponent(location.hash.replace(/^#/, '').replace(/^tag=/, ''));
  if (h === 'papers' || h === 'software' || h === 'visualization') apply(h);
})();
