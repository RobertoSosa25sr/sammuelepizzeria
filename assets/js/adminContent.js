document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("content");

    const loadHTML = async (url) => {
        try {
            const response = await fetch(url);
            const htmlContent = await response.text();
            content.innerHTML = htmlContent;
        } catch (error) {
            console.error("Error al cargar el contenido:", error);
        }
    };

    const initialURL = "/view/admin/home.html";
    loadHTML(initialURL);

    const home = document.getElementById("home_link");
    home.addEventListener("click", function () {
        // Especifica la URL del documento HTML o JSP que deseas cargar
        const url = "/view/admin/home.html";
        loadHTML(url);
    });
/*
    const bill = document.getElementById("newBill_link");
    bill.addEventListener("click", function () {
        // Especifica la URL del documento HTML o JSP que deseas cargar
        const url = "/view/admin/bill.html";
        loadHTML(url);
    });*/

});
