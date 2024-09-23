function sortTable(columnIndex) {
    const table = document.getElementById("messagesTable");
    const rows = Array.from(table.rows).slice(1);  // Skip the header row
    let isAscending = table.getAttribute("data-sort-direction") === "asc";

    rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].innerText.toLowerCase();
        const cellB = rowB.cells[columnIndex].innerText.toLowerCase();

        if (columnIndex === 3) {  // If sorting by date, convert to date objects
            return new Date(cellA) - new Date(cellB);
        }

        if (cellA < cellB) return isAscending ? -1 : 1;
        if (cellA > cellB) return isAscending ? 1 : -1;
        return 0;
    });

    // Re-append rows in the sorted order
    const tableBody = table.querySelector('tbody');
    rows.forEach(row => tableBody.appendChild(row));

    // Toggle the sorting direction for the next click
    table.setAttribute("data-sort-direction", isAscending ? "desc" : "asc");
}