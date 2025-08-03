
const students = [
    {
        name: "Emma Johnson",
        age: 20,
        course: "Computer Science",
        email: "emma.johnson@university.edu",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        name: "Michael Chen",
        age: 22,
        course: "Data Science",
        email: "michael.chen@university.edu",
        image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        name: "Sarah Williams",
        age: 19,
        course: "Web Development",
        email: "sarah.williams@university.edu",
        image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        name: "David Rodriguez",
        age: 21,
        course: "Software Engineering",
        email: "david.rodriguez@university.edu",
        image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        name: "Lisa Thompson",
        age: 20,
        course: "UI/UX Design",
        email: "lisa.thompson@university.edu",
        image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        name: "James Park",
        age: 23,
        course: "Cybersecurity",
        email: "james.park@university.edu",
        image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
];

function createProfileCard(student) {
    return `
        <div class="profile-card">
            <img src="${student.image}" alt="${student.name}" class="profile-image">
            <h2 class="profile-name">${student.name}</h2>
            <p class="profile-course">${student.course}</p>
            <div class="profile-details">
                <div class="detail-item">
                    <span class="detail-label">Age:</span>
                    <span class="detail-value">${student.age} years old</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Course:</span>
                    <span class="detail-value">${student.course}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Email:</span>
                    <span class="detail-value">
                        <a href="mailto:${student.email}" class="email-link">${student.email}</a>
                    </span>
                </div>
            </div>
        </div>
    `;
}

function renderProfileCards() {
    const container = document.getElementById('profile-container');
    const cardsHTML = students.map(student => createProfileCard(student)).join('');
    container.innerHTML = cardsHTML;
}
document.addEventListener('DOMContentLoaded', function() {
    renderProfileCards();
    const cards = document.querySelectorAll('.profile-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

