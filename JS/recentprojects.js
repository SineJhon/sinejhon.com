(function () {
    var projectLinks = {
        exploreArbaMinch: 'https://example.com/explore-arba-minch',
        hireportfolio: 'https://sinejhon.codes',
        gamoGiya: 'https://example.com/gamo-giya',
        graphicsSocial: '../Graphics Design/HTML/graphicsdesign.html',
        cameraCoverage: '../SY Creatives/HTML/sycreatives.html',
        contentTrends: '../Content Creation and Social Media Management/HTML/contentsocial.html',
    };

    var alertRoot = document.getElementById('projectAlert');
    var alertTitle = document.getElementById('projectAlertTitle');
    var alertMessage = document.getElementById('projectAlertMessage');
    var alertCloseControls = document.querySelectorAll('[data-alert-close]');
    var playButtons = document.querySelectorAll('.play-button[data-project]');

    if (!alertRoot || playButtons.length === 0) {
        return;
    }

    function openCustomAlert(titleText, messageText) {
        if (alertTitle && titleText) {
            alertTitle.textContent = titleText;
        }

        if (alertMessage && messageText) {
            alertMessage.textContent = messageText;
        }

        alertRoot.hidden = false;
        document.body.style.overflow = 'hidden';
    }

    function closeCustomAlert() {
        alertRoot.hidden = true;
        document.body.style.overflow = '';
    }

    function handlePlayClick(event) {
        var projectName = event.currentTarget.getAttribute('data-project');
        var projectLabel = event.currentTarget.getAttribute('data-project-label') || 'This project';

        if (projectName === 'portfolio') {
            openCustomAlert('This is my portfolio', 'You are already here.');
            return;
        }

        var targetUrl = projectLinks[projectName];
        if (targetUrl) {
            window.open(targetUrl, '_blank', 'noopener,noreferrer');
        }
    }

    playButtons.forEach(function (button) {
        button.addEventListener('click', handlePlayClick);
    });

    alertCloseControls.forEach(function (control) {
        control.addEventListener('click', closeCustomAlert);
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && !alertRoot.hidden) {
            closeCustomAlert();
        }
    });
})();
