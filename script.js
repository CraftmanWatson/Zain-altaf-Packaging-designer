/* ============================================================
   ZAIN ALTAF — landing page interactivity
   Sections: i18n / language gate, theme toggle, mobile nav,
   scroll-reveal, animated counters, portfolio filter, marquee.
   ============================================================ */

(function(){
  "use strict";

  /* -------------------- i18n dictionary -------------------- */
  var I18N = {
    en: {
      "gate.title":"Choose Your Language",
      "gate.sub":"Select your preferred language to continue",
      "nav.work":"Work",
      "nav.process":"Process",
      "nav.reviews":"Reviews",
      "nav.contact":"Contact",
      "hero.eyebrow":"Strategic Packaging & 3D Design",
      "hero.title":"Turn Casual Scrollers Into <em>Brand Loyalists.</em>",
      "hero.sub":"High-converting structural and label design, engineered for ambitious Amazon brands and elite e-commerce stores. We don't just design boxes — we build unboxing experiences that scale your revenue.",
      "hero.cta1":"Elevate My Brand",
      "hero.cta2":"See the Work",
      "hero.stat1":"Projects Completed",
      "hero.stat2":"Five-Star Feedback",
      "hero.stat3":"Brands Scaled",
      "hero.placeholder":"Render placeholder",
      "hero.chip1":"Material",
      "hero.chip2":"Soft-touch rigid box",
      "marquee.line":"Trusted by Top-Tier Amazon FBA Sellers Worldwide",
      "ps.eyebrow":"Why Packaging Decides the Sale",
      "ps.problem.tag":"The Friction",
      "ps.problem.title":"Cheap-looking packaging costs you the click.",
      "ps.problem.body":"On Amazon, your product is only as good as your main image. If your packaging looks cheap, buyers click away — costing you thousands in lost conversions and wasted ad spend.",
      "ps.solution.tag":"The Zain Altaf Standard",
      "ps.solution.title":"Design that lets you charge what you're worth.",
      "ps.solution.body":"Custom, luxury-grade packaging and ultra-realistic 3D renders that command attention, build instant trust, and let you justify premium pricing.",
      "work.eyebrow":"Selected Work",
      "work.title":"Engineered for diverse markets",
      "work.sub":"Explore premium packaging concepts built to dominate competitive niches.",
      "work.filter.all":"All",
      "work.filter.health":"Health & Wellness",
      "work.filter.beauty":"Beauty & Cosmetics",
      "work.filter.tech":"Electronics & Gadgets",
      "work.filter.baby":"Home & Baby",
      "work.placeholder":"Image placeholder",
      "process.eyebrow":"How We Work",
      "process.title":"From concept to ready-to-print files",
      "process.s1.title":"Strategic discovery",
      "process.s1.body":"We analyze your audience, competitors, and Amazon guidelines to map a design strategy built to convert.",
      "process.s2.title":"3D concept & iteration",
      "process.s2.body":"You see photorealistic 3D renders of your packaging before a single unit goes to production.",
      "process.s3.title":"Print-ready handoff",
      "process.s3.body":"Pixel-perfect source files and dielines, fully optimized for your manufacturing partners.",
      "testi.eyebrow":"Results",
      "testi.title":"What serious sellers say",
      "testi.q1":"\u201cExceptional work. This is my second project with Zain and I'm already lining up the third.\u201d",
      "testi.a1":"Verified E-commerce Client",
      "testi.q2":"\u201cZain completely transformed how our product is perceived. Our Amazon click-through rate doubled within two weeks of launch.\u201d",
      "testi.a2":"7-Figure Amazon FBA Seller",
      "testi.stamp":"Verified",
      "cta.title":"Ready to make your brand look premium?",
      "cta.sub":"Stop losing sales to prettier competitors. Let's build an unforgettable visual identity for your product line.",
      "cta.button":"Book Your Packaging Consultation",
      "footer.tagline":"Premium 3D packaging design for brands that refuse to look ordinary.",
      "footer.nav":"Navigate",
      "footer.connect":"Let's talk",
      "footer.legal":"Zain Altaf Packaging Design. All rights reserved."
    },
    ar: {
  "gate.title":"اختر لغتك",
  "gate.sub":"اختر اللغة التي تفضلها للمتابعة",
  "nav.work":"أعمالنا",
  "nav.process":"آلية العمل",
  "nav.reviews":"الآراء",
  "nav.contact":"اتصل بنا",
  "hero.eyebrow":"تصميم عبوات ثلاثي الأبعاد واستراتيجي",
  "hero.title":"حوّل المتصفحين العابرين إلى <em>عملاء أوفياء.</em>",
  "hero.sub":"تصاميم هيكلية وملصقات مخصصة لعلامات أمازون والتجارة الإلكترونية الراقية. نحن لا نصمم مجرد صناديق — بل نصنع تجربة فتح منتج (Unboxing) تضاعف أرباحك.",
  "hero.cta1":"ارفع مستوى علامتي التجارية",
  "hero.cta2":"تصفح الأعمال",
  "hero.stat1":"مشاريع مكتملة",
  "hero.stat2":"تقييمات خمس نجوم",
  "hero.stat3":"علامات تجارية نامية",
  "hero.placeholder":"مساحة محجوزة للرندر",
  "hero.chip1":"المواد",
  "hero.chip2":"صندوق صلب ناعم الملمس",
  "marquee.line":"محل ثقة كبار بائعي أمازون (Amazon FBA) حول العالم",
  "ps.eyebrow":"التغليف الذي يصنع الفارق في المبيعات",
  "ps.problem.tag":"المشكلة",
  "ps.problem.title":"التغليف رخيص المظهر يمنع المشترين المحتملين من الضغط.",
  "ps.problem.body":"على أمازون، جودة منتجك تُقاس بصورته الرئيسية. التغليف رخيص المظهر ينفّر المشترين — مما يعني خسارة آلاف الدولارات من المبيعات المحتملة وهدر ميزانية الإعلانات.",
  "ps.solution.tag":"معيار زين ألطف",
  "ps.solution.title":"تصاميم تجعل السعر المرتفع يبدو مبررًا.",
  "ps.solution.body":"تغليف مخصص فاخر ومعاينة ثلاثية الأبعاد (3D Render) فائقة الواقعية تجذب الانتباه، وتبني ثقة فورية، وتجعل سعرك المميز يستحق كل بنس.",
  "work.eyebrow":"أعمال مختارة",
  "work.title":"مصممة لتناسب مختلف الأسواق",
  "work.sub":"استكشف مفاهيم التغليف الفاخرة المصممة للهيمنة على الأسواق التنافسية.",
  "work.filter.all":"الكل",
  "work.filter.health":"الصحة والعافية",
  "work.filter.beauty":"الجمال ومستحضرات التجميل",
  "work.filter.tech":"الإلكترونيات والأجهزة",
  "work.filter.baby":"المنزل والأطفال",
  "work.placeholder":"مساحة محجوزة للصورة",
  "process.eyebrow":"آلية عملنا",
  "process.title":"من الفكرة إلى ملفات جاهزة للطباعة",
  "process.s1.title":"البحث الاستراتيجي",
  "process.s1.body":"نحلل الجمهور، والمنافسين، وإرشادات أمازون لبناء استراتيجية تصميم مخصصة لزيادة المبيعات.",
  "process.s2.title":"المفاهيم والتعديلات ثلاثية الأبعاد",
  "process.s2.body":"ستشاهد معاينة ثلاثية الأبعاد فائقة الواقعية لتغليفك قبل بدء إنتاج أي قطعة.",
  "process.s3.title":"تسليم ملفات جاهزة للطباعة",
  "process.s3.body":"ملفات مصدرية دقيقة بالبكسل مع خطوط القوالب (Dieline)، ومجهزة بالكامل لشريك الإنتاج الخاص بك.",
  "testi.eyebrow":"نتائج حقيقية",
  "testi.title":"ما يقوله البائعون الجادون",
  "testi.q1":"\u201cعمل استثنائي رائع. هذا هو مشروعي الثاني مع زين، وأقوم حاليًا بتجهيز المشروع الثالث.\u201d",
  "testi.a1":"عميل تجارة إلكترونية موثق",
  "testi.q2":"\u201cلقد غيّر زين تمامًا طريقة النظر إلى منتجاتنا. تضاعف معدل النقر (CTR) الخاص بنا على أمازون في أسبوعين فقط.\u201d",
  "testi.a2":"بائع أمازون (Amazon FBA) بأرباح مكونة من 7 أرقام",
  "testi.stamp":"موثق",
  "cta.title":"هل أنت جاهز لتجعل علامتك التجارية تبدو فاخرة؟",
  "cta.sub":"توقف عن خسارة المبيعات لصالح منافسين بمظهر أفضل. لندعّم خط إنتاجك بهوية بصرية لا تُنسى.",
  "cta.button":"احجز استشارة التغليف الخاصة بك",
  "footer.tagline":"تصميم تغليف ثلاثي الأبعاد فاخر للعلامات التجارية التي ترفض المظهر العادي.",
  "footer.nav":"التنقل",
  "footer.connect":"لنبدأ النقاش",
  "footer.legal":"تصميم عبوات زين ألطف. جميع الحقوق محفوظة."
}
  };

  var STORAGE_LANG = "za-lang";
  var STORAGE_THEME = "za-theme";

  function applyLanguage(lang){
    var dict = I18N[lang] || I18N.en;
    document.documentElement.setAttribute("lang", lang);
    var nodes = document.querySelectorAll("[data-i18n]");
    nodes.forEach(function(node){
      var key = node.getAttribute("data-i18n");
      var value = dict[key];
      if(value === undefined) return;
      if(value.indexOf("<") !== -1){
        node.innerHTML = value;
      } else {
        node.textContent = value;
      }
    });
    var langCurrent = document.getElementById("langCurrent");
    if(langCurrent) langCurrent.textContent = lang.toUpperCase();
    try{ localStorage.setItem(STORAGE_LANG, lang); }catch(e){}
  }

  function initLanguage(){
    var gate = document.getElementById("langGate");
    var saved = null;
    try{ saved = localStorage.getItem(STORAGE_LANG); }catch(e){}

    if(saved && I18N[saved]){
      applyLanguage(saved);
      gate.classList.add("is-hidden");
    } else {
      applyLanguage("en");
    }

    document.querySelectorAll(".lang-option").forEach(function(btn){
      btn.addEventListener("click", function(){
        var lang = btn.getAttribute("data-lang");
        applyLanguage(lang);
        gate.classList.add("is-hidden");
        document.body.style.overflow = "";
      });
    });

    var langToggle = document.getElementById("langToggle");
    if(langToggle){
      langToggle.addEventListener("click", function(){
        var cur = (document.documentElement.getAttribute("lang") || "en").toLowerCase();
        var next = cur === "en" ? "ar" : "en";
        applyLanguage(next);
      });
    }

    if(!saved){
      document.body.style.overflow = "hidden";
      gate.addEventListener("transitionend", function(){
        if(gate.classList.contains("is-hidden")) document.body.style.overflow = "";
      });
    }
  }

  /* -------------------- theme toggle -------------------- */
  function initTheme(){
    var root = document.documentElement;
    var btn = document.getElementById("themeToggle");
    var iconSun = document.getElementById("iconSun");
    var iconMoon = document.getElementById("iconMoon");

    function reflectIcon(){
      var theme = root.getAttribute("data-theme") || "dark";
      if(theme === "light"){
        iconSun.style.display = "block";
        iconMoon.style.display = "none";
      } else {
        iconSun.style.display = "none";
        iconMoon.style.display = "block";
      }
    }
    reflectIcon();

    btn.addEventListener("click", function(){
      var current = root.getAttribute("data-theme") || "dark";
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try{ localStorage.setItem(STORAGE_THEME, next); }catch(e){}
      reflectIcon();
    });
  }

  /* -------------------- mobile nav -------------------- */
  function initMobileNav(){
    var burger = document.getElementById("navBurger");
    var menu = document.getElementById("mobileMenu");
    burger.addEventListener("click", function(){
      menu.classList.toggle("open");
      burger.classList.toggle("is-open");
    });
    menu.querySelectorAll("a").forEach(function(a){
      a.addEventListener("click", function(){
        menu.classList.remove("open");
        burger.classList.remove("is-open");
      });
    });
  }

  /* -------------------- scroll reveal -------------------- */
  function initReveal(){
    var items = document.querySelectorAll(".reveal");
    if(!("IntersectionObserver" in window)){
      items.forEach(function(el){ el.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold:0.18, rootMargin:"0px 0px -40px 0px" });
    items.forEach(function(el){ observer.observe(el); });

    var stampCards = document.querySelectorAll(".testi-card");
    var stampObserver = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add("is-visible");
          stampObserver.unobserve(entry.target);
        }
      });
    }, { threshold:0.4 });
    stampCards.forEach(function(el){ stampObserver.observe(el); });
  }

  /* -------------------- animated counters -------------------- */
  function initCounters(){
    var counters = document.querySelectorAll(".counter");
    if(!counters.length) return;
    var done = new WeakSet();

    function animate(el){
      var target = parseInt(el.getAttribute("data-target"), 10) || 0;
      var duration = 1400;
      var start = null;
      function step(ts){
        if(start === null) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if(progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting && !done.has(entry.target)){
          done.add(entry.target);
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold:0.5 });

    counters.forEach(function(el){ observer.observe(el); });
  }

  /* -------------------- portfolio filter -------------------- */
  function initFilter(){
    var pills = document.querySelectorAll(".filter-pill");
    var items = document.querySelectorAll(".bento-item");
    pills.forEach(function(pill){
      pill.addEventListener("click", function(){
        pills.forEach(function(p){ p.classList.remove("active"); });
        pill.classList.add("active");
        var filter = pill.getAttribute("data-filter");
        items.forEach(function(item){
          var cat = item.getAttribute("data-cat");
          var show = filter === "all" || cat === filter;
          item.style.opacity = "0";
          item.style.transform = "translateY(10px)";
          setTimeout(function(){
            item.classList.toggle("hide", !show);
            if(show){
              requestAnimationFrame(function(){
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
              });
            }
          }, show ? 60 : 0);
        });
      });
    });
  }

  /* -------------------- init -------------------- */
  document.addEventListener("DOMContentLoaded", function(){
    initLanguage();
    initTheme();
    initMobileNav();
    initReveal();
    initCounters();
    initFilter();

    var yearEl = document.getElementById("year");
    if(yearEl) yearEl.textContent = new Date().getFullYear();
  });

})();
