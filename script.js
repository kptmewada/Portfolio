// FAQ Toggle
function toggleFaq(el) {
  const item = el.parentElement;
  item.classList.toggle('open');
}

//Disable right-click
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

//Block common DevTools shortcuts
document.addEventListener('keydown', function (e) {
    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && ["U", "S"].includes(e.key))
    ) {
        e.preventDefault();
    }
});

//Block DevTools detection
(function () {
    function detectDevTools() {
        const widthThreshold = window.outerWidth - window.innerWidth > 160;
        const heightThreshold = window.outerHeight - window.innerHeight > 160;

        if (widthThreshold || heightThreshold) {
            document.body.innerHTML = `
                <div style="
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    height:100vh;
                    background:black;
                    color:red;
                    font-size:24px;
                    font-family:monospace;
                ">
                    🚫 Inspect Not Allowed
                </div>
            `;
        }
    }

    setInterval(detectDevTools, 1000);
})();