document.querySelectorAll(".block").forEach(block => {
    const exercises = block.querySelectorAll(".exercise");
    const progressBar = block.querySelector(".progress");

    exercises.forEach(ex => {
        const checkbox = ex.querySelector("input");
        const id = ex.dataset.id;

        // restore state
        checkbox.checked = localStorage.getItem(id) === "true";

        if (checkbox.checked) ex.classList.add("done");

        checkbox.addEventListener("change", () => {
            localStorage.setItem(id, checkbox.checked);

            if (checkbox.checked) {
                ex.classList.add("done");
            } else {
                ex.classList.remove("done");
            }

            updateProgress();
        });
    });

    function updateProgress() {
        let total = exercises.length;
        let done = 0;

        exercises.forEach(ex => {
            if (ex.querySelector("input").checked) done++;
        });

        let percent = (done / total) * 100;
        progressBar.style.width = percent + "%";
    }

    updateProgress();
});
