const isDistrict1 = window.location.href.includes("palmbeach.k12.fl.us");
if (isDistrict1) {
    updateLinks("palmbeach.k12.fl.us");
    localStorage.setItem("district", "1");
}
  function updateLinks(suffix) {
    // Select all elements with href or src attributes
    const elements = document.querySelectorAll("[href], [src]");
  
    elements.forEach(element => {
      if (element.hasAttribute("src")) {
        const src = element.getAttribute("src");
        if (src && !src.includes(suffix) && !src.startsWith("http")) {
          const newSrc = "../palmbeach.k12.fl.us/" + src;
          const newScript = document.createElement("script");
          newScript.src = newSrc;
          element.parentNode.replaceChild(newScript, element);
        }
      } else if (element.hasAttribute("href")) {
        const href = element.getAttribute("href");
        if (href && !href.includes(suffix)) {
          element.href += `?${suffix}`;
        }
      }
    });
  }