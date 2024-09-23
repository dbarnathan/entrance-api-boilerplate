function downloadTableAsCSV(tableId, filename) {
    const table = document.getElementById(tableId);
    const rows = table.querySelectorAll('tbody tr'); // Only target rows in the tbody (ignore thead)

    let csvContent = '';

    // Add the CSV headers manually
    csvContent += ['Recipient Number', 'Message', 'Tone', 'Sent At'].join(',') + '\n';

    // Loop through the table body rows and gather cell data
    rows.forEach(row => {
        const cells = row.querySelectorAll('td'); // Target only td elements, skip th
        const rowData = [];

        // Skip rows that don't have enough cells (e.g., arrow keys or other controls)
        if (cells.length > 0) {
            cells.forEach(cell => {
                // Escape cell text content to ensure CSV format integrity
                rowData.push(escapeCSVValue(cell.textContent.trim()));
            });
            csvContent += rowData.join(',') + '\n'; // Join cells by comma and create a new line for each row
        }
    });

    // Create a Blob from the CSV data
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    // Create a download link and trigger the download
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up
}

// Helper function to escape CSV values (including emojis, commas, quotes, and newlines)
function escapeCSVValue(value) {
    // If value contains commas, newlines, or double quotes, wrap it in double quotes
    if (/[,"\n]/.test(value)) {
        value = '"' + value.replace(/"/g, '""') + '"'; // Escape any internal double quotes
    }
    return value;
}