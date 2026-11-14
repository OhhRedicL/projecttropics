/* =========================================================
   PROJECT TROPICS ROLEPLAY — SITE SCRIPT
   Renders the shared header/footer, wires up links from
   config.js, and powers tabs, rules search, gallery, etc.
   ========================================================= */
(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");
  var CFG = window.PT_CONFIG || {};

  /* ---------------- Icons ---------------- */
  var s = function (d) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + "</svg>";
  };
  var ICONS = {
    discord: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.32 4.37A19.8 19.8 0 0 0 15.4 2.85a.07.07 0 0 0-.08.04c-.21.38-.45.87-.61 1.25a18.3 18.3 0 0 0-5.49 0 12.6 12.6 0 0 0-.62-1.25.08.08 0 0 0-.08-.04 19.7 19.7 0 0 0-4.93 1.52.07.07 0 0 0-.03.03C.53 9.05-.32 13.58.1 18.06a.08.08 0 0 0 .03.05 19.9 19.9 0 0 0 5.99 3.03.08.08 0 0 0 .08-.03c.46-.63.87-1.3 1.22-2a.08.08 0 0 0-.04-.1 13.1 13.1 0 0 1-1.87-.9.08.08 0 0 1-.01-.13l.37-.29a.07.07 0 0 1 .08-.01c3.93 1.8 8.18 1.8 12.07 0a.07.07 0 0 1 .08.01l.37.29a.08.08 0 0 1-.01.13c-.6.35-1.22.65-1.87.9a.08.08 0 0 0-.04.1c.36.7.77 1.37 1.22 2a.08.08 0 0 0 .08.03 19.8 19.8 0 0 0 6-3.03.08.08 0 0 0 .03-.05c.5-5.18-.84-9.67-3.55-13.66a.06.06 0 0 0-.03-.03zM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.96 2.42-2.16 2.42zm7.97 0c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.95 2.42-2.16 2.42z"/></svg>',
    shield: s('<path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3z"/><path d="m9 12 2 2 4-4"/>'),
    star: s('<path d="m12 2 2.9 6.1 6.6.8-4.9 4.5 1.3 6.6L12 16.8 6.1 20l1.3-6.6L2.5 8.9l6.6-.8z"/>'),
    road: s('<path d="M4 22 9 2M20 22 15 2M12 4v3M12 11v3M12 18v3"/>'),
    users: s('<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5"/><circle cx="17" cy="9" r="2.6"/><path d="M16.5 14.6c2.4.2 4.3 1.9 5 4.9"/>'),
    cone: s('<path d="M10 3h4l5 16H5z"/><path d="M8.3 9h7.4M6.8 14h10.4M3 21h18"/>'),
    arrow: s('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    alert: s('<path d="M12 3 2 20h20z"/><path d="M12 10v4M12 17.5v.01"/>'),
    info: s('<circle cx="12" cy="12" r="9.5"/><path d="M12 11v6M12 7.5v.01"/>'),
    megaphone: s('<path d="M3 10v4a1 1 0 0 0 1 1h2l5 4V5L6 9H4a1 1 0 0 0-1 1z"/><path d="M15 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12"/>'),
    book: s('<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 21.5A2.5 2.5 0 0 1 6.5 19H20v3H6.5"/>'),
    file: s('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>'),
    image: s('<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>'),
    copy: s('<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/>'),
    search: s('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
    up: s('<path d="m6 15 6-6 6 6"/>'),
    x: s('<path d="M6 6l12 12M18 6 6 18"/>'),
    left: s('<path d="m15 6-6 6 6 6"/>'),
    right: s('<path d="m9 6 6 6-6 6"/>'),
    map: s('<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>'),
    radio: s('<rect x="5" y="8" width="14" height="13" rx="2"/><path d="M8 8 15 3M9 13h6M9 17h3"/>'),
    gavel: s('<path d="m14 4 6 6M11 7l6 6M12.5 5.5l-6 6 3 3 6-6M8 13l-6 6 1 1 6-6M14 21h7"/>'),
    car: s('<path d="M5 16V11l2-5h10l2 5v5"/><path d="M3 16h18v3H3zM5 11h14"/><circle cx="7.5" cy="13.5" r=".6"/><circle cx="16.5" cy="13.5" r=".6"/>'),
    headset: s('<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="2.5" y="14" width="4" height="6" rx="1.5"/><rect x="17.5" y="14" width="4" height="6" rx="1.5"/><path d="M20 20c0 1.5-2 2-5 2"/>'),
    camera: s('<path d="M3 8a2 2 0 0 1 2-2h2l2-2h6l2 2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="13" r="3.5"/>'),
    zap: s('<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>'),
    heart: s('<path d="M12 20s-7.5-4.6-9.3-9.3C1.4 7.3 3.6 4 7 4c2 0 3.5 1.1 5 3 1.5-1.9 3-3 5-3 3.4 0 5.6 3.3 4.3 6.7C19.5 15.4 12 20 12 20z"/>'),
    code: s('<path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>'),
    building: s('<path d="M4 21V5l8-3v19M12 8l8 3v10M2 21h20M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2"/>'),
    briefcase: s('<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>'),
    clock: s('<circle cx="12" cy="12" r="9.5"/><path d="M12 7v5l3 2"/>'),
    globe: s('<circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19M12 2.5c2.5 2.6 3.8 5.8 3.8 9.5S14.5 18.9 12 21.5c-2.5-2.6-3.8-5.8-3.8-9.5S9.5 5.1 12 2.5z"/>'),
    play: s('<circle cx="12" cy="12" r="9.5"/><path d="m10 8 6 4-6 4z"/>'),
    lock: s('<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>'),
    check: s('<path d="M20 6 9 17l-5-5"/>')
  };
  window.PT_ICONS = ICONS;

  var LOGO =
    '<svg class="brand-mark" viewBox="0 0 48 48" aria-hidden="true">' +
    '<defs><linearGradient id="ptg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FCBD3D"/><stop offset=".5" stop-color="#F6B057"/><stop offset="1" stop-color="#DE5FB9"/></linearGradient>' +
    '<clipPath id="ptc"><path d="M24 3 42 13.5v21L24 45 6 34.5v-21z"/></clipPath></defs>' +
    '<path d="M24 3 42 13.5v21L24 45 6 34.5v-21z" fill="#000" stroke="url(#ptg)" stroke-width="2.5"/>' +
    '<g clip-path="url(#ptc)"><circle cx="24" cy="30" r="12" fill="url(#ptg)"/>' +
    '<path d="M6 30h36M6 33.5h36M6 37h36" stroke="#000" stroke-width="1.8"/>' +
    '<path d="M24 30c0-6 1-11 3-15M27 15c-3-1-6 0-8 2M27 15c3-2 6-2 8 0M27 15c-1-3-3-4-6-4M27 15c2-3 5-3 7-2" stroke="#000" stroke-width="1.6" fill="none" stroke-linecap="round"/></g>' +
    "</svg>";

  /* ---------------- Shared header & footer ---------------- */
  var NAV = [
    { href: "index.html", label: "Home", key: "home" },
    { href: "departments.html", label: "Departments", key: "departments" },
    { href: "applications.html", label: "Applications", key: "applications" },
    { href: "rules.html", label: "Rules", key: "rules" },
    { href: "resources.html", label: "Resources", key: "resources" },
    { href: "gallery.html", label: "Gallery", key: "gallery" }
  ];
  var page = document.body.getAttribute("data-page") || "";

  function discordBtn(extra) {
    return '<a class="btn-discord ' + (extra || "") + '" data-link="discord" href="#" target="_blank" rel="noopener">' + ICONS.discord + "<span>Join Discord</span></a>";
  }
  window.PT_discordBtn = discordBtn;

  var headerEl = document.getElementById("site-header");
  if (headerEl) {
    headerEl.className = "site-header";
    headerEl.innerHTML =
      '<nav class="nav" aria-label="Main">' +
      '<a class="brand" href="index.html" aria-label="Project Tropics Roleplay home">' + LOGO +
      '<span class="brand-text"><span>PROJECT TROPICS</span><span>ROLEPLAY</span></span></a>' +
      '<ul class="nav-links" id="nav-links">' +
      NAV.map(function (n) {
        return '<li><a href="' + n.href + '"' + (n.key === page ? ' class="active" aria-current="page"' : "") + ">" + n.label + "</a></li>";
      }).join("") +
      "</ul>" +
      discordBtn() +
      '<button class="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links"><span></span></button>' +
      "</nav>";
  }

  var footerEl = document.getElementById("site-footer");
  if (footerEl) {
    footerEl.className = "site-footer";
    footerEl.innerHTML =
      '<div class="container">' +
      '<div class="footer-grid">' +
      '<div><a class="brand" href="index.html">' + LOGO + '<span class="brand-text"><span>PROJECT TROPICS</span><span>ROLEPLAY</span></span></a>' +
      '<p style="margin-top:18px">A serious, story-driven FiveM roleplay community set in Los Angeles. Built by roleplayers, for roleplayers.</p>' +
      discordBtn() + "</div>" +
      '<div><h4>Explore</h4><ul>' + NAV.map(function (n) { return '<li><a href="' + n.href + '">' + n.label + "</a></li>"; }).join("") + "</ul></div>" +
      '<div><h4>Departments</h4><ul>' +
      '<li><a href="departments.html#lapd">LAPD</a></li>' +
      '<li><a href="departments.html#lasd">LASD</a></li>' +
      '<li><a href="departments.html#chp">CHP</a></li>' +
      '<li><a href="departments.html#civ">Civilian Operations</a></li>' +
      '<li><a href="departments.html#dot">DOT</a></li></ul></div>' +
      '<div><h4>Get Started</h4><ul>' +
      '<li><a href="applications.html">Apply Now</a></li>' +
      '<li><a href="rules.html">Read the Rules</a></li>' +
      '<li><a href="resources.html#connect">Connect to Server</a></li>' +
      '<li><a href="#" data-link="discord" target="_blank" rel="noopener">Discord</a></li></ul></div>' +
      "</div>" +
      '<div class="footer-bottom"><p>&copy; ' + new Date().getFullYear() + " Project Tropics Roleplay. All rights reserved.</p>" +
      "<p>Not affiliated with Rockstar Games, Take-Two Interactive or Cfx.re. Fictional roleplay only.</p></div>" +
      "</div>";
  }

  /* ---------------- Icons + config links ---------------- */
  function hydrate(root) {
    root.querySelectorAll("[data-icon]").forEach(function (el) {
      var ic = ICONS[el.getAttribute("data-icon")];
      if (ic) el.innerHTML = ic;
    });
    root.querySelectorAll('[data-link="discord"]').forEach(function (a) {
      a.href = CFG.discordInvite || "#";
    });
    root.querySelectorAll('[data-link="fivem"]').forEach(function (a) {
      a.href = CFG.fivemJoinUrl || "#";
    });
    root.querySelectorAll("[data-connect]").forEach(function (el) {
      el.textContent = CFG.connectCommand || "";
    });
    root.querySelectorAll("[data-apply]").forEach(function (a) {
      var key = a.getAttribute("data-apply");
      var open = !CFG.applicationsOpen || CFG.applicationsOpen[key] !== false;
      a.href = (CFG.applications && CFG.applications[key]) || "#";
      if (a.href.slice(-1) !== "#") { a.target = "_blank"; a.rel = "noopener"; }
      if (!open) {
        a.setAttribute("aria-disabled", "true");
        var label = a.querySelector("span");
        if (label) label.textContent = "Applications Closed";
      }
    });
    root.querySelectorAll("[data-status]").forEach(function (el) {
      var key = el.getAttribute("data-status");
      var open = !CFG.applicationsOpen || CFG.applicationsOpen[key] !== false;
      el.className = "status-pill " + (open ? "status-open" : "status-closed");
      el.textContent = open ? "Open" : "Closed";
    });
  }
  hydrate(document);

  /* ---------------- Header behaviour ---------------- */
  var toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open);
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    document.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () { document.body.classList.remove("nav-open"); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") document.body.classList.remove("nav-open");
    });
  }

  var toTop = document.createElement("button");
  toTop.className = "to-top";
  toTop.setAttribute("aria-label", "Back to top");
  toTop.innerHTML = ICONS.up;
  toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  document.body.appendChild(toTop);

  function onScroll() {
    var y = window.scrollY;
    if (headerEl) headerEl.classList.toggle("scrolled", y > 30);
    toTop.classList.toggle("show", y > 700);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------- Card cursor spotlight ---------------- */
  document.addEventListener("pointermove", function (e) {
    var card = e.target.closest && e.target.closest(".card");
    if (!card) return;
    var r = card.getBoundingClientRect();
    card.style.setProperty("--mx", e.clientX - r.left + "px");
    card.style.setProperty("--my", e.clientY - r.top + "px");
  });

  /* ---------------- Reveal on scroll + counters ---------------- */
  function countUp(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    var dur = 1600, start = null;
    function step(t) {
      if (!start) start = t;
      var p = Math.min((t - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        en.target.querySelectorAll("[data-count]").forEach(countUp);
        if (en.target.hasAttribute("data-count")) countUp(en.target);
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal, .stats").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------------- Hero word rotator ---------------- */
  var rot = document.querySelector("[data-rotate]");
  if (rot) {
    var words = rot.getAttribute("data-rotate").split("|");
    var textEl = rot.querySelector(".rotator-text");
    var wi = 0, ci = 0, deleting = false;
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      textEl.textContent = words[0];
    } else {
      (function tick() {
        var w = words[wi];
        ci += deleting ? -1 : 1;
        textEl.textContent = w.slice(0, ci);
        var delay = deleting ? 40 : 85;
        if (!deleting && ci === w.length) { deleting = true; delay = 1700; }
        else if (deleting && ci === 0) { deleting = false; wi = (wi + 1) % words.length; delay = 300; }
        setTimeout(tick, delay);
      })();
    }
  }

  /* ---------------- Copy to clipboard ---------------- */
  var toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  document.body.appendChild(toast);
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(showToast.t);
    showToast.t = setTimeout(function () { toast.classList.remove("show"); }, 1800);
  }
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy") === "connect" ? CFG.connectCommand : btn.getAttribute("data-copy");
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function () { showToast("Copied! Paste it into your F8 console"); });
      } else {
        showToast(text);
      }
    });
  });

  /* ---------------- Tabs ---------------- */
  document.querySelectorAll("[data-tabs]").forEach(function (wrap) {
    var btns = wrap.querySelectorAll('[role="tab"]');
    function activate(id, focus) {
      btns.forEach(function (b) {
        var on = b.getAttribute("aria-controls") === id;
        b.setAttribute("aria-selected", on);
        b.tabIndex = on ? 0 : -1;
        if (on && focus) b.focus();
      });
      wrap.querySelectorAll('[role="tabpanel"]').forEach(function (p) {
        p.classList.toggle("active", p.id === id);
      });
    }
    btns.forEach(function (b, i) {
      b.addEventListener("click", function () {
        var id = b.getAttribute("aria-controls");
        activate(id);
        history.replaceState(null, "", "#" + id.replace("tab-", ""));
      });
      b.addEventListener("keydown", function (e) {
        var n = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (!n) return;
        var next = btns[(i + n + btns.length) % btns.length];
        activate(next.getAttribute("aria-controls"), true);
      });
    });
    var hash = location.hash.slice(1);
    var initial = hash && wrap.querySelector('#tab-' + CSS.escape(hash)) ? "tab-" + hash : btns[0].getAttribute("aria-controls");
    activate(initial);
  });

  /* ---------------- Rules search + scrollspy ---------------- */
  var search = document.getElementById("rule-search");
  if (search) {
    var groups = document.querySelectorAll(".rule-group");
    var empty = document.querySelector(".no-results");
    search.addEventListener("input", function () {
      var q = search.value.trim().toLowerCase();
      var any = false;
      groups.forEach(function (g) {
        var visible = 0;
        g.querySelectorAll(".rule").forEach(function (r) {
          var hit = !q || r.textContent.toLowerCase().indexOf(q) > -1;
          r.classList.toggle("hide", !hit);
          if (q && hit) r.open = true;
          if (!q) r.open = false;
          if (hit) visible++;
        });
        g.classList.toggle("hide", visible === 0);
        if (visible) any = true;
      });
      if (empty) empty.style.display = any ? "none" : "block";
    });
  }
  var asideLinks = document.querySelectorAll(".rules-aside a");
  if (asideLinks.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        asideLinks.forEach(function (a) {
          a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id);
        });
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    document.querySelectorAll(".rule-group").forEach(function (g) { spy.observe(g); });
  }

  /* ---------------- Gallery ---------------- */
  var grid = document.getElementById("gallery-grid");
  if (grid && window.PT_GALLERY) {
    var limit = parseInt(grid.getAttribute("data-limit"), 10);
    var items = limit ? window.PT_GALLERY.slice(0, limit) : window.PT_GALLERY;
    var sceneClasses = ["s1", "s2", "s3", "s4"];
    var catIcon = { patrol: "shield", pursuits: "car", civilian: "users", events: "star", scenery: "camera" };
    function media(it, i) {
      if (it.src) return '<img src="' + it.src + '" alt="' + it.title + '" loading="lazy">';
      return '<span class="scene ' + sceneClasses[i % 4] + '"><span class="scene-icon">' + (ICONS[catIcon[it.category]] || ICONS.camera) + "</span></span>";
    }
    grid.innerHTML = items.map(function (it, i) {
      return '<button type="button" class="gallery-item reveal ' + (limit ? "" : it.size || "") + '" data-cat="' + it.category + '" data-i="' + i + '" aria-label="Open ' + it.title + '">' +
        media(it, i) +
        '<span class="gallery-caption"><span>' + it.category + "</span><strong>" + it.title + "</strong></span></button>";
    }).join("");
    grid.querySelectorAll(".reveal").forEach(function (el) {
      if (typeof io !== "undefined") io.observe(el); else el.classList.add("in");
    });

    document.querySelectorAll("[data-filter]").forEach(function (b) {
      b.addEventListener("click", function () {
        var f = b.getAttribute("data-filter");
        document.querySelectorAll("[data-filter]").forEach(function (x) { x.setAttribute("aria-selected", x === b); });
        grid.querySelectorAll(".gallery-item").forEach(function (g) {
          g.classList.toggle("hide", f !== "all" && g.getAttribute("data-cat") !== f);
        });
      });
    });

    var lb = document.getElementById("lightbox");
    var lbMedia = lb.querySelector(".lightbox-media");
    var lbCap = lb.querySelector(".lightbox-caption");
    var current = 0;
    function visibleIdx() {
      return Array.prototype.filter.call(grid.querySelectorAll(".gallery-item"), function (g) { return !g.classList.contains("hide"); })
        .map(function (g) { return +g.getAttribute("data-i"); });
    }
    function show(i) {
      current = i;
      var it = items[i];
      lbMedia.innerHTML = media(it, i);
      lbCap.textContent = it.title + (it.desc ? " — " + it.desc : "");
    }
    function step(d) {
      var v = visibleIdx();
      var pos = v.indexOf(current);
      show(v[(pos + d + v.length) % v.length]);
    }
    var lastFocus;
    grid.addEventListener("click", function (e) {
      var item = e.target.closest(".gallery-item");
      if (!item) return;
      lastFocus = item;
      show(+item.getAttribute("data-i"));
      lb.classList.add("open");
      lb.querySelector(".lb-close").focus();
      document.body.style.overflow = "hidden";
    });
    function close() {
      lb.classList.remove("open");
      document.body.style.overflow = "";
      if (lastFocus) lastFocus.focus();
    }
    lb.querySelector(".lb-close").addEventListener("click", close);
    lb.querySelector(".lb-prev").addEventListener("click", function () { step(-1); });
    lb.querySelector(".lb-next").addEventListener("click", function () { step(1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });
  }
})();
