
(function () {
    const saved = localStorage.getItem('portfolioMode') || 'dark';
    document.body.className = saved + '-mode';
    const track = document.getElementById('toggleTrack');
    const icon = document.getElementById('modeIcon');
    const label = document.getElementById('modeLabel');
    if (track && saved === 'dark') track.classList.add('on');
    if (icon) icon.className = saved === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    if (label) label.textContent = saved === 'dark' ? 'Dark Mode' : 'Light Mode';
    updateAvatars(saved);
})();

function updateAvatars(mode) {
    const avatarImg = mode === 'dark' ? 'AVATAR.jpg' : 'AVATAR1.jpg';
    document.querySelectorAll('.profile-avatar').forEach(function(el) {
        var existing = el.querySelector('img.avatar-img');
        if (!existing) {
            el.innerHTML = '';
            var img = document.createElement('img');
            img.className = 'avatar-img';
            img.alt = 'Profile Avatar';
            img.src = avatarImg;
            el.appendChild(img);
        } else {
            existing.src = avatarImg;
        }
    });
}

function toggleMode() {
    const isDark = document.body.classList.contains('dark-mode');
    const next = isDark ? 'light' : 'dark';
    document.body.className = next + '-mode';
    localStorage.setItem('portfolioMode', next);
    const track = document.getElementById('toggleTrack');
    const icon = document.getElementById('modeIcon');
    const label = document.getElementById('modeLabel');
    if (track) track.classList.toggle('on', next === 'dark');
    if (icon) icon.className = next === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    if (label) label.textContent = next === 'dark' ? 'Dark Mode' : 'Light Mode';
    updateAvatars(next);
}

function toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const btn = document.getElementById('mobileMenuToggle');
    sidebar.classList.toggle('open');
    const icon = btn.querySelector('i');
    icon.className = sidebar.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
}

function toggleDropdown(e) {
    e.preventDefault();
    e.currentTarget.closest('.has-dropdown').classList.toggle('open');
}

function downloadResume(e) {
    e.preventDefault();
    alert('Resume download will be available soon!');
}

document.addEventListener('click', function (e) {
    const sidebar = document.getElementById('sidebar');
    const toggle = document.getElementById('mobileMenuToggle');
    if (sidebar && sidebar.classList.contains('open') &&
        !sidebar.contains(e.target) && toggle && !toggle.contains(e.target)) {
        sidebar.classList.remove('open');
        const icon = toggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
    }
});
