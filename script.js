// Theme Toggle
        function toggleTheme() {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        }

        // Load saved theme
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
        }

        // Typing Animation
        const phrases = [
            "Building scalable web applications with Django",
            "Crafting efficient REST APIs",
            "Solving problems with Python",
            "Open to exciting opportunities"
        ];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeText() {
            const typingElement = document.getElementById('typing');
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                setTimeout(() => isDeleting = true, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }

            const typingSpeed = isDeleting ? 50 : 100;
            setTimeout(typeText, typingSpeed);
        }

        typeText();

        // Particles Animation
        function createParticles() {
            const container = document.getElementById('particles');
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                container.appendChild(particle);
            }
        }

        createParticles();

        // Skills Data
        const skills = {
            "Backend": [
                { name: "Python", level: 90 },
                { name: "Django", level: 85 },
                { name: "Django REST Framework", level: 85 },
                { name: "REST APIs", level: 80 }
            ],
            "Frontend": [
                { name: "HTML5", level: 85 },
                { name: "CSS3", level: 85 },
                { name: "JavaScript", level: 75 },
                { name: "React (Basics)", level: 60 }
            ],
            "Databases": [
                { name: "MySQL", level: 85 },
                { name: "PostgreSQL", level: 80 },
                { name: "MongoDB", level: 70 },
                { name: "SQL Queries", level: 85 }
            ],
            "Tools & Others": [
                { name: "Git & GitHub", level: 80 },
                { name: "Postman", level: 75 },
                { name: "VS Code", level: 85 },
                { name: "SDLC", level: 75 }
            ]
        };

        // Render Skills
        function renderSkills() {
            const skillsGrid = document.getElementById('skillsGrid');
            skillsGrid.innerHTML = '';

            Object.keys(skills).forEach(category => {
                const categoryDiv = document.createElement('div');
                categoryDiv.className = 'skill-category reveal';
                
                let skillsHTML = `<h3>${category}</h3>`;
                skills[category].forEach(skill => {
                    skillsHTML += `
                        <div class="skill-item">
                            <div class="skill-name">
                                <span>${skill.name}</span>
                                <span>${skill.level}%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" data-level="${skill.level}"></div>
                            </div>
                        </div>
                    `;
                });
                
                categoryDiv.innerHTML = skillsHTML;
                skillsGrid.appendChild(categoryDiv);
            });

            animateSkillBars();
        }

        renderSkills();

        // Animate Skill Bars
        function animateSkillBars() {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const progressBars = entry.target.querySelectorAll('.skill-progress');
                        progressBars.forEach(bar => {
                            setTimeout(() => {
                                bar.style.width = bar.dataset.level + '%';
                            }, 100);
                        });
                    }
                });
            }, { threshold: 0.5 });

            document.querySelectorAll('.skill-category').forEach(cat => {
                observer.observe(cat);
            });
        }

        // Fetch GitHub Projects
        async function fetchGitHubProjects() {
            const projectsGrid = document.getElementById('projectsGrid');
            
            // All projects with actual links and details
            const allProjects = [
                {
                    name: "Blood Bank Management System",
                    description: "Full-stack platform to manage donor records, blood groups, and request tracking with REST APIs and authentication. Built with Django MVT architecture and secure data handling.",
                    tech: ["Django", "REST API", "MySQL", "HTML", "CSS", "JavaScript"],
                    github: "https://github.com/imdash19",
                    demo: null,
                    featured: true,
                    category: "Full Stack"
                },
                {
                    name: "Online Exam Portal",
                    description: "User-friendly exam portal with student registration, login, CRUD functionality, and admin module for question management and scheduling. Features normalized database schema.",
                    tech: ["Django", "MySQL", "JavaScript", "HTML", "CSS"],
                    github: "https://github.com/imdash19",
                    demo: null,
                    featured: true,
                    category: "Full Stack"
                },
                {
                    name: "Employee Management System",
                    description: "Desktop-based employee record management solution with optimized MySQL queries for improved performance. Implements insert, update, delete, and search operations.",
                    tech: ["Python", "MySQL"],
                    github: "https://github.com/imdash19/Employee-Management-System",
                    demo: null,
                    featured: true,
                    category: "Desktop App"
                },
                {
                    name: "College Major Project",
                    description: "Major college project demonstrating advanced concepts and full-stack development skills. Built using modern web technologies.",
                    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
                    github: "https://github.com/imdash19/College_Major_Project",
                    demo: null,
                    featured: false,
                    category: "Full Stack"
                },
                {
                    name: "College Minor Project",
                    description: "Interactive web application showcasing frontend development skills and responsive design principles.",
                    tech: ["HTML", "CSS", "JavaScript"],
                    github: "https://github.com/imdash19/College-Minor-Project",
                    demo: "https://imdash19.github.io/College-Minor-Project/",
                    featured: false,
                    category: "Web Development"
                },
                {
                    name: "Basic Employee Information System using Oracle Python",
                    description: "Employee information management system built with Oracle database and Python, demonstrating database connectivity and CRUD operations.",
                    tech: ["Python", "Oracle Database"],
                    github: "https://github.com/imdash19/Basic-Employee-Information-System-using-Oracle-Python",
                    demo: null,
                    featured: false,
                    category: "Database App"
                },
                {
                    name: "Python Question Bank",
                    description: "Comprehensive collection of Python programming questions and solutions for learning and practice.",
                    tech: ["Python"],
                    github: "https://github.com/imdash19/Python_Question_Bank",
                    demo: null,
                    featured: false,
                    category: "Learning Resource"
                },
                {
                    name: "Animated Website",
                    description: "Modern animated website showcasing CSS animations, smooth transitions, and interactive UI elements with engaging user experience.",
                    tech: ["HTML", "CSS", "JavaScript"],
                    github: "https://github.com/imdash19/Animated-Website",
                    demo: "https://imdash19.github.io/Animated-Website/",
                    featured: false,
                    category: "Web Design"
                },
                {
                    name: "Netflix India Landing Page",
                    description: "Pixel-perfect clone of Netflix India's landing page featuring responsive design and modern UI/UX principles.",
                    tech: ["HTML", "CSS", "JavaScript"],
                    github: "https://github.com/imdash19/Netflix-India-Landing-Page",
                    demo: "https://imdash19.github.io/Netflix-India-Landing-Page/",
                    featured: false,
                    category: "UI Clone"
                },
                {
                    name: "Amazon Landing Page",
                    description: "Responsive recreation of Amazon's landing page demonstrating e-commerce UI design patterns and layout techniques.",
                    tech: ["HTML", "CSS"],
                    github: "https://github.com/imdash19/Amazon-Landing-Page",
                    demo: "https://imdash19.github.io/Amazon-Landing-Page/",
                    featured: false,
                    category: "UI Clone"
                },
                {
                    name: "Rock Paper Scissors Game",
                    description: "Interactive Rock Paper Scissors game with score tracking, animations, and intuitive gameplay mechanics.",
                    tech: ["HTML", "CSS", "JavaScript"],
                    github: "https://github.com/imdash19/Rock-Paper-Scissors-Game",
                    demo: "https://imdash19.github.io/Rock-Paper-Scissors-Game/",
                    featured: false,
                    category: "Game"
                },
                {
                    name: "Tic Tac Toe Game",
                    description: "Classic Tic Tac Toe game with smooth animations, win detection algorithm, and responsive design.",
                    tech: ["HTML", "CSS", "JavaScript"],
                    github: "https://github.com/imdash19/Tic-Tac-Toe-Game",
                    demo: "https://imdash19.github.io/Tic-Tac-Toe-Game/",
                    featured: false,
                    category: "Game"
                }
            ];

            projectsGrid.innerHTML = '';

            // Add all projects
            allProjects.forEach(project => {
                projectsGrid.innerHTML += createProjectCard(project);
            });
        }

        function createProjectCard(project) {
            const featuredBadge = project.featured ? '<span style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.75rem; font-weight: bold; margin-left: 0.5rem;">⭐ Featured</span>' : '';
            const categoryBadge = project.category ? `<span style="background: rgba(102, 102, 246, 0.15); color: var(--primary); padding: 0.25rem 0.6rem; border-radius: 12px; font-size: 0.7rem; font-weight: 600;">${project.category}</span>` : '';
            
            return `
                <div class="project-card reveal">
                    <div class="project-header">
                        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
                            <h3 class="project-title" style="margin: 0;">${project.name}${featuredBadge}</h3>
                            ${categoryBadge}
                        </div>
                    </div>
                    <div class="project-body">
                        <p class="project-desc">${project.description}</p>
                        <div class="project-tech">
                            ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                        <div class="project-links">
                            <a href="${project.github}" target="_blank" class="project-link">
                                <span style="margin-right: 5px;">💻</span> GitHub
                            </a>
                            ${project.demo ? `<a href="${project.demo}" target="_blank" class="project-link" style="background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);">
                                <span style="margin-right: 5px;">🚀</span> Live Demo
                            </a>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        fetchGitHubProjects();

        // Scroll Reveal Animation
        function revealOnScroll() {
            const reveals = document.querySelectorAll('.reveal');
            
            reveals.forEach(element => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll();

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Form Submit
        function handleSubmit(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            e.target.reset();
        }

        // Download Resume
        function downloadResume() {
            alert('Resume download will be available soon. Please contact via email for now.');
        }

        // Navbar Scroll Effect
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.style.padding = '0.5rem 5%';
                nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.15)';
            } else {
                nav.style.padding = '1rem 5%';
                nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            }
        });