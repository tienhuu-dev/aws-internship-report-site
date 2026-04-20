(function () {
  "use strict";

  const visibleBackToTopClass = "is-visible";
  const currentScriptElement = document.currentScript;

  function getRuntimeConfig() {
    if (!currentScriptElement) {
      return {
        enableServiceWorker: "true",
        serviceWorkerUrl: window.__SERVICE_WORKER_URL__,
        siteBaseUrl: window.__SITE_BASE_URL__
      };
    }

    return {
      enableServiceWorker: currentScriptElement.dataset.enableServiceWorker,
      serviceWorkerUrl: currentScriptElement.dataset.serviceWorkerUrl,
      siteBaseUrl: currentScriptElement.dataset.siteBaseUrl
    };
  }

  function getScrollProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (scrollHeight <= 0) {
      return 0;
    }

    return Math.min(scrollTop / scrollHeight, 1);
  }

  function updateReadingProgress(progressElement) {
    const progress = getScrollProgress();

    progressElement.style.transform = "scaleX(" + progress + ")";
  }

  function initReadingProgress() {
    const progressElement = document.createElement("div");

    progressElement.className = "theme-reading-progress";
    progressElement.setAttribute("aria-hidden", "true");
    document.body.appendChild(progressElement);

    updateReadingProgress(progressElement);
    window.addEventListener("scroll", function () {
      updateReadingProgress(progressElement);
    }, { passive: true });
  }

  function updateBackToTopVisibility(buttonElement) {
    if (window.scrollY > 480) {
      buttonElement.classList.add(visibleBackToTopClass);
      return;
    }

    buttonElement.classList.remove(visibleBackToTopClass);
  }

  function initBackToTop() {
    const buttonElement = document.createElement("button");

    buttonElement.className = "theme-back-to-top";
    buttonElement.type = "button";
    buttonElement.setAttribute("aria-label", "Back to top");
    buttonElement.textContent = "↑";
    document.body.appendChild(buttonElement);

    buttonElement.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

    updateBackToTopVisibility(buttonElement);
    window.addEventListener("scroll", function () {
      updateBackToTopVisibility(buttonElement);
    }, { passive: true });
  }

  function formatDate(dateValue) {
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }).format(dateValue);
  }

  function initLastUpdated() {
    const lastUpdatedElement = document.getElementById("lastUpdated");

    if (!lastUpdatedElement) {
      return;
    }

    lastUpdatedElement.textContent = formatDate(new Date());
  }

  function initExternalLinks() {
    const linkElements = document.querySelectorAll("a[href^='http']");
    const currentHost = window.location.host;

    linkElements.forEach(function (linkElement) {
      if (linkElement.host === currentHost) {
        return;
      }

      linkElement.setAttribute("target", "_blank");
      linkElement.setAttribute("rel", "noopener noreferrer");
      linkElement.setAttribute("data-external-link", "true");
    });
  }

  function initSmallUiEnhancements() {
    document.body.classList.add("is-page-ready");
  }

  function initServiceWorker() {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    const runtimeConfig = getRuntimeConfig();

    if (runtimeConfig.enableServiceWorker !== "true") {
      return;
    }

    const serviceWorkerUrl = runtimeConfig.serviceWorkerUrl;
    const siteBaseUrl = runtimeConfig.siteBaseUrl;

    if (!serviceWorkerUrl || !siteBaseUrl) {
      return;
    }

    window.addEventListener("load", function () {
      navigator.serviceWorker.register(serviceWorkerUrl, {
        scope: siteBaseUrl
      }).catch(function (error) {
        console.warn("Service worker registration failed.", error);
      });
    });
  }

  function initCustomTheme() {
    initSmallUiEnhancements();
    initLastUpdated();
    initExternalLinks();
    initReadingProgress();
    initBackToTop();
    initServiceWorker();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCustomTheme);
    return;
  }

  initCustomTheme();
}());
