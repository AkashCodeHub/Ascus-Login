// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('active');
});

// Calendar functionality
function generateCalendar() {
    const calendar = document.getElementById('calendar');
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const currentDate = new Date();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    // Add day headers
    days.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-day', 'header');
        dayElement.textContent = day;
        calendar.appendChild(dayElement);
    });

    // Add empty cells for days before first day of month
    for (let i = 0; i < firstDay.getDay(); i++) {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('calendar-day', 'empty');
        calendar.appendChild(emptyDay);
    }

    // Add days of the month
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-day');
        dayElement.textContent = day;
        
        // Highlight current day
        if (day === currentDate.getDate()) {
            dayElement.classList.add('current');
        }
        
        // Add special dates (example)
        if (day === 3 || day === 14 || day === 30) {
            dayElement.classList.add('special');
        }
        
        calendar.appendChild(dayElement);
    }
}

// Statistics Chart
function initializeStatisticsChart() {
    const ctx = document.getElementById('statisticsChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            datasets: [{
                label: 'Performance',
                data: [65, 75, 60, 80, 65, 85, 70, 75, 68, 82],
                borderColor: '#2b2d5c',
                tension: 0.4,
                fill: false
            },
            {
                label: 'Efficiency',
                data: [55, 65, 70, 60, 75, 65, 80, 65, 75, 70],
                borderColor: '#e74c3c',
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Progress Circles
function initializeProgressCircles() {
    document.querySelectorAll('.progress-circle').forEach(circle => {
        const value = circle.getAttribute('data-value');
        const radius = 45;
        const circumference = radius * 2 * Math.PI;
        const html = `
            <svg class="progress-ring" width="100" height="100">
                <circle class="progress-ring__circle" stroke="#eee" stroke-width="4" fill="transparent" r="${radius}" cx="50" cy="50"/>
                <circle class="progress-ring__circle-value" stroke="currentColor" stroke-width="4" fill="transparent" r="${radius}" cx="50" cy="50"
                    stroke-dasharray="${circumference} ${circumference}"
                    stroke-dashoffset="${circumference - (value / 100) * circumference}"
                />
            </svg>
            <span class="progress-text">${value}%</span>
        `;
        circle.innerHTML = html;
    });
}

// Activity Bars
function initializeActivityBars() {
    document.querySelectorAll('.progress-bar').forEach(bar => {
        const value = bar.getAttribute('data-value');
        bar.style.setProperty('--progress-width', `${value}%`);
        bar.style.width = `${value}%`;
    });
}

// Initialize Gender Distribution Chart
function initializeGenderChart() {
    const ctx = document.getElementById('genderChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Male', 'Female'],
            datasets: [{
                data: [267, 108],
                backgroundColor: ['#6366f1', '#f43f5e'],
                borderWidth: 0,
                cutout: '70%'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Initialize Project Progress Chart
function initializeProjectChart() {
    const ctx = document.getElementById('projectChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Upcoming',
                    data: [20, 25, 18, 30, 22, 28, 24, 27, 23, 28, 25, 30],
                    backgroundColor: '#6366f1',
                    borderRadius: 4
                },
                {
                    label: 'In Progress',
                    data: [15, 18, 14, 22, 17, 20, 18, 21, 16, 20, 18, 22],
                    backgroundColor: '#fbbf24',
                    borderRadius: 4
                },
                {
                    label: 'Completed',
                    data: [10, 12, 8, 15, 11, 14, 12, 16, 10, 14, 12, 15],
                    backgroundColor: '#e2e8f0',
                    borderRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                    grid: {
                        display: false
                    }
                },
                y: {
                    stacked: true,
                    grid: {
                        color: '#e2e8f0'
                    },
                    ticks: {
                        stepSize: 10
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Handle Month Select
function initializeMonthSelect() {
    const monthSelect = document.querySelector('.month-select select');
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                   'July', 'August', 'September', 'October', 'November', 'December'];
    
    months.forEach(month => {
        const option = document.createElement('option');
        option.value = month.toLowerCase();
        option.textContent = month;
        monthSelect.appendChild(option);
    });
}

// Handle Project Table
function initializeProjectTable() {
    // Add more project rows
    const projectData = [
        {
            id: 'D572',
            name: 'Circuit Dashboard',
            team: ['avatar4.jpg', 'avatar5.jpg', 'avatar6.jpg'],
            cost: '$18,000',
            status: 'In Progress',
            payment: 'Pending'
        },
        {
            id: 'Z931',
            name: 'Amazon Website',
            team: ['avatar7.jpg', 'avatar8.jpg'],
            cost: '$5,000',
            status: 'Completed',
            payment: 'Done'
        }
    ];

    const tbody = document.querySelector('.project-table tbody');
    projectData.forEach(project => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <span class="project-id">${project.id}</span>
                <span class="project-name">${project.name}</span>
            </td>
            <td>
                <div class="team-avatars">
                    ${project.team.map(avatar => `<img src="${avatar}" alt="Team member">`).join('')}
                </div>
            </td>
            <td>${project.cost}</td>
            <td><span class="status ${project.status.toLowerCase().replace(' ', '-')}">${project.status}</span></td>
            <td><span class="payment ${project.payment.toLowerCase()}">${project.payment}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

// Handle Holiday List
function initializeHolidayList() {
    const holidayData = [
        {
            name: 'Yash Mathur',
            status: 'Health is not good',
            date: 'Only Today'
        },
        {
            name: 'Tunali Rirparia',
            status: 'Going on maternity leave',
            date: '15° to 23°'
        }
    ];

    const holidayList = document.querySelector('.holiday-list');
    holidayData.forEach(holiday => {
        const div = document.createElement('div');
        div.className = 'holiday-item';
        div.innerHTML = `
            <div class="holiday-user">
                <img src="avatar-placeholder.jpg" alt="${holiday.name}">
                <div class="holiday-info">
                    <h4>${holiday.name}</h4>
                    <p>${holiday.status}</p>
                </div>
                <span class="holiday-date">${holiday.date}</span>
            </div>
        `;
        holidayList.appendChild(div);
    });
}

// Initialize Payroll Chart
function initializePayrollChart() {
    const ctx = document.getElementById('payrollChart').getContext('2d');
    
    // Create gradient for bars
    const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient1.addColorStop(0, 'rgba(99, 102, 241, 0.8)');
    gradient1.addColorStop(1, 'rgba(99, 102, 241, 0.2)');
    
    const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient2.addColorStop(0, 'rgba(147, 51, 234, 0.8)');
    gradient2.addColorStop(1, 'rgba(147, 51, 234, 0.2)');

    // Net Salary line data
    const netSalaryData = [90000, 85000, 110000, 115000, 89000, 120000, 110000, 125000, 113000, 128000, 145000, 139000];

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Regular Hours',
                    data: [65000, 59000, 80000, 81000, 56000, 85000, 70000, 90000, 75000, 85000, 95000, 92000],
                    backgroundColor: gradient1,
                    borderRadius: 8,
                    barPercentage: 0.6,
                    categoryPercentage: 0.7,
                    yAxisID: 'y',
                    order: 2
                },
                {
                    label: 'Overtime Hours',
                    data: [35000, 28000, 45000, 42000, 33000, 48000, 40000, 47000, 38000, 43000, 50000, 47000],
                    backgroundColor: gradient2,
                    borderRadius: 8,
                    barPercentage: 0.6,
                    categoryPercentage: 0.7,
                    yAxisID: 'y',
                    order: 2
                },
                {
                    type: 'line',
                    label: 'Net Salary',
                    data: netSalaryData,
                    borderColor: '#00B8D9',
                    backgroundColor: 'rgba(0,184,217,0.1)',
                    borderWidth: 3,
                    pointRadius: 4,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#00B8D9',
                    tension: 0.4,
                    yAxisID: 'y',
                    order: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#e2e8f0'
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    align: 'end',
                    labels: {
                        boxWidth: 8,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    backgroundColor: 'white',
                    titleColor: '#1e293b',
                    bodyColor: '#1e293b',
                    bodyFont: {
                        size: 13
                    },
                    borderColor: '#e2e8f0',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return '$' + context.raw.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

// Handle Time Filter Change
function handleTimeFilterChange() {
    const timeFilter = document.querySelector('.time-filter');
    timeFilter.addEventListener('change', (e) => {
        // Update chart data based on selected time period
        console.log('Time filter changed:', e.target.value);
    });
}

// Handle Team Filter Change
function handleTeamFilterChange() {
    const teamFilter = document.querySelector('.type-filter');
    teamFilter.addEventListener('change', (e) => {
        // Update chart data based on selected team
        console.log('Team filter changed:', e.target.value);
    });
}

// Initialize Employee Table
function initializeEmployeeTable() {
    const employeeData = [
        {
            name: 'Sarah Johnson',
            email: 'sarah.j@example.com',
            status: 'Paid',
            salary: '$5,200',
            working: 'Full-time',
            performance: 92,
            date: '15 Dec 2023'
        },
        {
            name: 'Michael Chen',
            email: 'michael.c@example.com',
            status: 'Pending',
            salary: '$4,800',
            working: 'Full-time',
            performance: 78,
            date: '15 Dec 2023'
        },
        {
            name: 'Emily Davis',
            email: 'emily.d@example.com',
            status: 'Paid',
            salary: '$3,900',
            working: 'Part-time',
            performance: 85,
            date: '14 Dec 2023'
        }
    ];

    const tbody = document.querySelector('tbody');
    employeeData.forEach(employee => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <div class="employee-info">
                    <img src="avatar-placeholder.jpg" alt="${employee.name}">
                    <span>${employee.name}</span>
                </div>
            </td>
            <td>${employee.email}</td>
            <td><span class="status ${employee.status.toLowerCase()}">${employee.status}</span></td>
            <td>${employee.salary}</td>
            <td>${employee.working}</td>
            <td>
                <div class="performance-bar">
                    <div class="performance-progress" style="width: ${employee.performance}%"></div>
                </div>
            </td>
            <td>${employee.date}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Handle Export Button
function handleExport() {
    const exportBtn = document.querySelector('.action-button:last-child');
    exportBtn.addEventListener('click', () => {
        // Implement export functionality
        console.log('Exporting data...');
    });
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    generateCalendar();
    initializeStatisticsChart();
    initializeProgressCircles();
    initializeActivityBars();
    initializeGenderChart();
    initializeProjectChart();
    initializeMonthSelect();
    initializeProjectTable();
    initializeHolidayList();
    initializePayrollChart();
    handleTimeFilterChange();
    handleTeamFilterChange();
    initializeEmployeeTable();
    handleExport();
}); 