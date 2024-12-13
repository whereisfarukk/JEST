(function () {
  const n = document.createElement('link').relList;
  if (n && n.supports && n.supports('modulepreload')) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) s(e);
  new MutationObserver((e) => {
    for (const o of e)
      if (o.type === 'childList')
        for (const c of o.addedNodes)
          c.tagName === 'LINK' && c.rel === 'modulepreload' && s(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(e) {
    const o = {};
    return (
      e.integrity && (o.integrity = e.integrity),
      e.referrerPolicy && (o.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : e.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    );
  }
  function s(e) {
    if (e.ep) return;
    e.ep = !0;
    const o = r(e);
    fetch(e.href, o);
  }
})();
const u = async (t) =>
    await (
      await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(t),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      })
    ).json(),
  l = function () {
    const t = document.querySelector('input#userid'),
      n = document.querySelector('input#title'),
      r = document.querySelector('textarea#article');
    return { useridInput: t, titleInput: n, articleInput: r };
  },
  i = function (t, n, r) {
    return !(!t || t.toString().trim().length === 0 || (r && isNaN(+t)));
  },
  a = function (t, n) {
    return `User ID: ${t} created an article titled ${n}`;
  },
  d = async function (t, n, r) {
    if (!i(t, !0, !0) || !i(n, !0, !1) || !i(r, !0, !1)) return !1;
    const s = await u({ title: n, body: r, userId: t }),
      { userId: e, title: o } = s;
    return a(e, o);
  },
  f = function (t, n, r = null) {
    const s = document.createElement(t);
    return r && s.classList.add(r), (s.textContent = n), s;
  },
  p = () => {
    document.querySelector('#addNewPostBtn').addEventListener('click', m);
  },
  m = async () => {
    const { useridInput: t, titleInput: n, articleInput: r } = l(),
      s = await d(t.value, n.value, r.value);
    if (!s) {
      alert('Invalid input! Please fill all fields correctly.');
      return;
    }
    const e = f('p', s);
    document.querySelector('.article-list').appendChild(e);
  };
p();
