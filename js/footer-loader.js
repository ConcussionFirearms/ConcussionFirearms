document.addEventListener("DOMContentLoaded", () => {
    fetch('/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;

            // Dynamically load footer styles
            let link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "css/footer.css";  // Path to your footer-specific CSS file
            document.head.appendChild(link);
        })
        .catch(error => console.error('Error loading footer:', error));
});
