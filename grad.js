document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addAppointment();
});

function addAppointment() {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const studentName = document.getElementById('studentName').value;
    const supervisorName = document.getElementById('supervisorName').value;

    const tableBody = document.getElementById('appointmentTableBody');

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${date}</td>
        <td>${time}</td>
        <td>${studentName}</td>
        <td>${supervisorName}</td>
        <td>Pending</td>
        <td>
            <button onclick="updateStatus(this, 'Accepted')">Accept</button>
            <button onclick="updateStatus(this, 'Rejected')">Reject</button>
        </td>
    `;

    tableBody.appendChild(newRow);

    // Clear the form
    document.getElementById('appointmentForm').reset();
}

function updateStatus(button, status) {
    const row = button.parentNode.parentNode;
    const statusCell = row.querySelector('td:nth-child(5)');
    statusCell.textContent = status;

    // Remove the buttons after updating the status
    const actionsCell = row.querySelector('td:nth-child(6)');
    actionsCell.innerHTML = '';
}
