document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.getElementById("table-body");

    for (let i = 1; i <= 6; i++) {
        const row = document.createElement("tr");

        const cell1 = document.createElement("td");
        cell1.textContent = i;
        row.appendChild(cell1);

        const cell2 = document.createElement("td");
        cell2.textContent = 10 * i;
        row.appendChild(cell2);

        const cell3 = document.createElement("td");
        cell3.textContent = 100 * i;
        row.appendChild(cell3);

        const cell4 = document.createElement("td");
        cell4.textContent = 1000 * i;
        row.appendChild(cell4);

        tableBody.appendChild(row);
    }
});