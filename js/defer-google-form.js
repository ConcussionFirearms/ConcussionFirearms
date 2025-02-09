document.addEventListener("DOMContentLoaded", function() {
    var iframe = document.createElement("iframe");
    iframe.src = "https://docs.google.com/forms/d/e/1FAIpQLSff7Dv-ALI5-uM27KKUbgmQpunwjrOYaVa6_Sj8EUU5LI9d8g/viewform?embedded=true";
    iframe.width = "640";
    iframe.height = "480";
    iframe.frameBorder = "0";
    iframe.marginHeight = "0";
    iframe.marginWidth = "0";
    iframe.loading = "lazy";  // Lazy load the iframe
    document.getElementById("google-form-container").appendChild(iframe);
});
