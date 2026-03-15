const channelShowcaseData = [
    {
        logoSrc: '../../Images/Logos/exploream.jpg',
        title: 'Explore Arba Minch',
        description: 'Travel and tourism content showcasing landscapes, culture, and destinations around Arba Minch. I manage the full production pipeline from photography and video recording to editing, thumbnail design, publishing, and social media optimization.',
        channelUrl: 'https://www.youtube.com/@Explorearbaminch',
        videos: ['IT4nlXMEXCw', 'HHaPt8r_g3o', 'gLgspNyh8-A']
    },
    {
        logoSrc: '../../Images/Logos/besufit.png',
        title: 'Besu Fitness',
        description: 'Fitness-focused content production where I handle the complete creative workflow — including filming workouts, editing videos, designing thumbnails, publishing content, and managing the channel to maintain consistent audience engagement and growth.',
        channelUrl: 'https://www.youtube.com/@Besufitness',
        videos: ['jsJDi7e9KEo', '4Anp2zcBuUs', 'Rf5aDAQI9ro']
    }
];

function buildVideoEmbed(videoId, channelTitle) {
    const safeTitle = channelTitle.replace(/"/g, '&quot;');
    return `
        <iframe
            class="channel-video-embed"
            src="https://www.youtube-nocookie.com/embed/${videoId}"
            title="${safeTitle} video showcase"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
        </iframe>
    `;
}

function renderChannelShowcase() {
    const root = document.getElementById('channelShowcaseList');
    if (!root) {
        return;
    }

    root.innerHTML = channelShowcaseData
        .map((channel) => {
            const logoMarkup = channel.logoSrc
                ? `<figure class="channel-logo-wrap"><img class="channel-logo-image" src="${channel.logoSrc}" alt="${channel.title} logo" loading="lazy"></figure>`
                : '';

            const videosMarkup = channel.videos
                .map((videoId) => buildVideoEmbed(videoId, channel.title))
                .join('');

            return `
                <article class="channel-showcase-card">
                    <header class="channel-showcase-head">
                        <div class="channel-showcase-meta">
                            ${logoMarkup}
                            <h3 class="channel-showcase-title">${channel.title}</h3>
                            <p class="showcase-intro">${channel.description}</p>
                        </div>
                        <p class="channel-showcase-note">${channel.videos.length} featured videos</p>
                    </header>

                    <div class="channel-videos-grid">
                        ${videosMarkup}
                    </div>

                    <div class="channel-actions">
                        <a class="channel-see-more" href="${channel.channelUrl}" target="_blank" rel="noopener noreferrer">See more</a>
                    </div>
                </article>
            `;
        })
        .join('');
}

renderChannelShowcase();
