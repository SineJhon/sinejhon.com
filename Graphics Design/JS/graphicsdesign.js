const projectData = [
    {
        title: '#01 - Product Showcase and Promotion',
        models: 'Client: SY Tech Store ( Personal Project )',
        photos: [
            { src: '../Images/SY Tech Store/syts1.png', alt: 'SY Tech Store project photo 1', detail: 'Store Promotion' },
            { src: '../Images/SY Tech Store/syts2.png', alt: 'SY Tech Store project photo 2', detail: 'Product Showcase' },
            { src: '../Images/SY Tech Store/syts3.png', alt: 'SY Tech Store project photo 3', detail: 'Product Showcase' },
            { src: '../Images/SY Tech Store/syts4.png', alt: 'SY Tech Store project photo 4', detail: 'Product Showcase' },
            { src: '../Images/SY Tech Store/syts5.png', alt: 'SY Tech Store project photo 5', detail: 'Store Promotion' }
        ]
    },
    {
        title: '#02 - Poster Design For Ashu Business Center',
        models: 'Client: Ashu Business Center',
        photos: [
            { src: '../Images/Ashu BC/abc.jpg', alt: 'Ashu Business Center', detail: 'Poster Design for Ashu Business Center.' },
        ]
    },
    {
        title: '#03 - Social Media Poet Posting Template',
        models: 'Clients: Semayawi Qine ( Personal Project )',
        photos: [
            { src: '../Images/Semayawi Qine/sq1.png', alt: 'Poet Posting Template', detail: 'Poetry Posting Templates ( Poetry By Me )' },
            { src: '../Images/Semayawi Qine/sq2.png', alt: 'Poet Posting Template', detail: 'Poetry Posting Templates ( Poetry By Me )' },
            { src: '../Images/Semayawi Qine/sq3.png', alt: 'Poet Posting Template', detail: 'Poetry Posting Templates ( Poetry By Me )' },
            { src: '../Images/Semayawi Qine/sq5.png', alt: 'Poet Posting Template', detail: 'Poetry Posting Templates ( Poetry By Me )' },
            { src: '../Images/Semayawi Qine/sq6.png', alt: 'Poet Posting Template', detail: 'Poetry Posting Templates ( Poetry By Me )' }
        ]
    },
    {
         title: '#04 - Our Own Branding',
        models: 'Client: No Client (Personal Project)',
        photos: [
            { src: '/Images/Logos/sycreatives.jpg', alt: 'Our Logo', detail: 'Our Logo Designed by Me and My Mate AB' },
            { src: '../Images/SY Creatives/sy2.jpg', alt: 'Our Logo', detail: 'Our Logo Designed by Me and My Mate AB' },
            { src: '../Images/SY Creatives/sy1.jpg', alt: 'Our Business Card', detail: 'Our Business Card Design' },
        ]
    },
    {
        title: '#05 - Explore Arba Minch',
        models: 'Client: Explore Arba Minch',
        photos: [
            { src: '../Images/Explore Arba Minch/exam.png', alt: 'Explore Arba Minch photo 1', detail: 'Logo Design By ME and My Mate AB' },
            { src: '../Images/Explore Arba Minch/exam22.jpg', alt: 'Explore Arba Minch photo 2', detail: 'YouTube Banner Design By ME and My Mate AB' },
            { src: '../Images/Explore Arba Minch/exam23.png', alt: 'Explore Arba Minch photo 3', detail: 'YouTube Thumbnail Design By ME' },
            { src: '../Images/Explore Arba Minch/exam33.png', alt: 'Explore Arba Minch photo 4', detail: 'YouTube Thumbnail Design By ME' },
            { src: '../Images/Explore Arba Minch/exam44.png', alt: 'Explore Arba Minch photo 4', detail: 'YouTube Thumbnail Design By ME' },
            { src: '../Images/Explore Arba Minch/exam55.png', alt: 'Explore Arba Minch photo 4', detail: 'YouTube Thumbnail Design By ME' },
            { src: '../Images/Explore Arba Minch/exam66.png', alt: 'Explore Arba Minch photo 4', detail: 'YouTube Thumbnail Design By ME' },
            { src: '../Images/Explore Arba Minch/exam77.png', alt: 'Explore Arba Minch photo 5', detail: 'YouTube Thumbnail Design By ME' }
        ]
    },
    {
        title: '#06 - Besu Fitness',
        models: 'Client: Besu Fitness',
        photos: [
            { src: '../Images/Besu Fitness/bf1.png', alt: 'Besu Fitness photo 1', detail: 'YouTube Thumbnail Design By ME' },
            { src: '../Images/Besu Fitness/bf2.png', alt: 'Besu Fitness photo 2', detail: 'YouTube Thumbnail Design By ME' },
            { src: '../Images/Besu Fitness/bf3.png', alt: 'Besu Fitness photo 3', detail: 'YouTube Thumbnail Design By ME' },
            { src: '../Images/Besu Fitness/bf4.png', alt: 'Besu Fitness photo 4', detail: 'YouTube Thumbnail Design By ME' },
            { src: '../Images/Besu Fitness/bf5.png', alt: 'Besu Fitness photo 4', detail: 'YouTube Thumbnail Design By ME' },
            { src: '../Images/Besu Fitness/bf6.png', alt: 'Besu Fitness photo 5', detail: 'YouTube Thumbnail Design By ME' }
        ]
    },
    {
        title: '#07 - Mami Restaurant',
        models: 'Client: Mami Restaurant',
        photos: [
            { src: '../Images/Mami/mami1.jpg', alt: 'Mami Restaurant photo 1', detail: 'Banner Design For Mami Restaurant' },
            { src: '../Images/Mami/mami2.png', alt: 'Mami Restaurant photo 2', detail: 'Banner Design For Mami Restaurant' }
        ]
    },
    {
        title: '#08 - Random Favorites',
        models: 'Client: Mixed Clients and Personal Projects',
        photos: [
            { src: '../Images/Random/rd1.jpg', alt: 'Random photo 1', detail: 'A CV Design' },
            { src: '../Images/Random/rd3.jpg', alt: 'Random photo 2', detail: 'A Random Logo For My Personal Project' },
            { src: '../Images/Random/rd2.jpg', alt: 'Random photo 3', detail: 'A Personal Gift For A Friend' }
        ]
    }
];

function buildPhotoDetail(project, photo, index) {
    return photo.detail || `${photo.alt} | Slide ${index + 1}`;
}

function renderProjects() {
    const root = document.getElementById('projectShowcaseList');
    if (!root) {
        return;
    }

    root.innerHTML = projectData
        .slice(0, 9)
        .map((project, projectIndex) => {
            const slides = project.photos
                .map((photo, photoIndex) => {
                    const detail = buildPhotoDetail(project, photo, photoIndex);
                    return `<figure class="project-slide" data-detail="${detail}"><img src="${photo.src}" alt="${photo.alt}" loading="lazy"></figure>`;
                })
                .join('');

            return `
                <article class="single-showcase-card" data-project-card>
                    <div class="project-carousel" data-carousel>
                        <button type="button" class="project-carousel-button prev" data-direction="prev" aria-label="Previous image">&#8249;</button>
                        <div class="project-carousel-viewport">
                            <div class="project-carousel-track" data-track>
                                ${slides}
                            </div>
                        </div>
                        <button type="button" class="project-carousel-button next" data-direction="next" aria-label="Next image">&#8250;</button>
                        <p class="project-carousel-counter" data-counter>1 / ${project.photos.length}</p>
                    </div>

                    <div class="single-showcase-content">
                        <h3 class="project-showcase-title">${project.title}</h3>
                        <p class="showcase-intro" data-detail-text>${buildPhotoDetail(project, project.photos[0], 0)}</p>
                        <p class="project-showcase-models">${project.models}</p>
                    </div>
                </article>
            `;
        })
        .join('');
}

function setupCarousels() {
    const carousels = document.querySelectorAll('[data-carousel]');

    carousels.forEach((carousel) => {
        const track = carousel.querySelector('[data-track]');
        const counter = carousel.querySelector('[data-counter]');
        const card = carousel.closest('[data-project-card]');
        const detailText = card ? card.querySelector('[data-detail-text]') : null;
        const slides = track ? Array.from(track.children) : [];

        if (!track || !counter || !detailText || slides.length === 0) {
            return;
        }

        let currentIndex = 0;

        function updateCarousel() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            counter.textContent = `${currentIndex + 1} / ${slides.length}`;
            detailText.textContent = slides[currentIndex].getAttribute('data-detail') || '';
        }

        carousel.querySelectorAll('.project-carousel-button').forEach((button) => {
            button.addEventListener('click', () => {
                const direction = button.getAttribute('data-direction');

                if (direction === 'next') {
                    currentIndex = (currentIndex + 1) % slides.length;
                } else {
                    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                }

                updateCarousel();
            });
        });

        updateCarousel();
    });
}

renderProjects();
setupCarousels();
