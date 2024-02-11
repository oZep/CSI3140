document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.getElementById("table-body");

    for (let i = 0; i <= 5; i++) {
        const row = document.createElement("tr");

        const cell1 = document.createElement("td");
        cell1.textContent = i;
        row.appendChild(cell1);

        const cell2 = document.createElement("td");
        cell2.textContent = i * i;
        row.appendChild(cell2);

        const cell3 = document.createElement("td");
        cell3.textContent = i * i * i;
        row.appendChild(cell3);

        tableBody.appendChild(row);
    }
});