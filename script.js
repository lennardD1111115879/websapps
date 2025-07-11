const customers = [
    { name: 'Max Mustermann', email: 'max@example.com', phone: '01234 567890' },
    { name: 'Julia Schmidt', email: 'julia@example.com', phone: '09876 543210' }
];

function renderTable() {
    const table = document.getElementById('customerTable');
    table.innerHTML = '';
    const search = document.getElementById('searchInput').value.toLowerCase();
    customers
        .filter(c => c.name.toLowerCase().includes(search))
        .forEach(c => {
            const row = `<tr>
                        <td>${c.name}</td>
                        <td>${c.email}</td>
                        <td>${c.phone}</td>
                      </tr>`;
            table.innerHTML += row;
        });
}

document.getElementById('searchInput').addEventListener('input', renderTable);

document.getElementById('addCustomerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    customers.push({ name, email, phone });
    renderTable();
    this.reset();
    bootstrap.Modal.getInstance(document.getElementById('addModal')).hide();
});

renderTable();
