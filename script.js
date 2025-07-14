// ✅ Skin Ad: toggle background
document.getElementById('desktop-skin-ad').addEventListener('click', () => {
  document.body.classList.toggle('skin-ad-active');
});

// ✅ Expand Skin Ad: expand on hover
const expandAd = document.getElementById('desktop-expand-skin-ad');
expandAd.addEventListener('mouseenter', () => {
  expandAd.classList.add('expanded');
});
expandAd.addEventListener('mouseleave', () => {
  expandAd.classList.remove('expanded');
});

// ✅ Desktop Scroller: change on scroll
window.addEventListener('scroll', () => {
  const ad = document.getElementById('desktop-scroller');
  const scrollY = window.scrollY;
  ad.innerText = scrollY > 200 ? "Scrolling... Ad Active" : "Desktop Scroller";
});
