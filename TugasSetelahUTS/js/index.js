function postAnnouncement() {
  const input = document.getElementById('announcementInput');
  const text = input.value.trim();
  if (text !== '') {
    const container = document.createElement('div');
    container.className = 'announcement';
    container.textContent = text;
    document.getElementById('announcementList').prepend(container);
    input.value = '';
  }
}
