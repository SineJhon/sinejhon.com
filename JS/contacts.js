const quickMessageForm = document.getElementById('quickMessageForm');
const responseType = document.getElementById('responseType');
const responseValue = document.getElementById('responseValue');
const senderName = document.getElementById('senderName');
const senderMessage = document.getElementById('senderMessage');

const senderNameError = document.getElementById('senderNameError');
const responseTypeError = document.getElementById('responseTypeError');
const responseValueError = document.getElementById('responseValueError');
const senderMessageError = document.getElementById('senderMessageError');
const formStatusMessage = document.getElementById('formStatusMessage');
const contactAlert = document.getElementById('contactAlert');
const contactAlertTitle = document.getElementById('contactAlertTitle');
const contactAlertMessage = document.getElementById('contactAlertMessage');
const contactAlertCard = contactAlert ? contactAlert.querySelector('.contact-alert__card') : null;
const contactAlertCloseControls = document.querySelectorAll('[data-contact-alert-close]');

if (
    quickMessageForm && responseType && responseValue && senderName && senderMessage &&
    senderNameError && responseTypeError && responseValueError && senderMessageError && formStatusMessage
) {
    const placeholders = {
        email: 'your.email@example.com',
        phone: '+2519...',
        linkedin: 'https://www.linkedin.com/in/your-profile',
        github: 'https://github.com/your-username'
    };

    responseType.addEventListener('change', () => {
        const selectedType = responseType.value;
        responseValue.value = '';
        responseValue.placeholder = placeholders[selectedType] || 'Enter your contact detail';
        clearFieldError(responseType, responseTypeError);
        clearFieldError(responseValue, responseValueError);
    });

    const setFieldError = (inputElement, errorElement, message) => {
        inputElement.classList.add('input-error');
        errorElement.textContent = message;
    };

    const clearFieldError = (inputElement, errorElement) => {
        inputElement.classList.remove('input-error');
        errorElement.textContent = '';
    };

    const setFormStatus = (message, type) => {
        formStatusMessage.textContent = message;
        formStatusMessage.classList.remove('is-success', 'is-error');

        if (type === 'success') {
            formStatusMessage.classList.add('is-success');
        }

        if (type === 'error') {
            formStatusMessage.classList.add('is-error');
        }
    };

    const clearFormStatus = () => {
        formStatusMessage.textContent = '';
        formStatusMessage.classList.remove('is-success', 'is-error');
    };

    const closeContactAlert = () => {
        if (!contactAlert) {
            return;
        }

        contactAlert.hidden = true;
        document.body.style.overflow = '';
    };

    const openContactAlert = (title, message, type) => {
        if (!contactAlert || !contactAlertTitle || !contactAlertMessage || !contactAlertCard) {
            return;
        }

        contactAlertTitle.textContent = title;
        contactAlertMessage.textContent = message;
        contactAlertCard.classList.remove('is-success', 'is-error');

        if (type === 'success') {
            contactAlertCard.classList.add('is-success');
        }

        if (type === 'error') {
            contactAlertCard.classList.add('is-error');
        }

        contactAlert.hidden = false;
        document.body.style.overflow = 'hidden';
    };

    contactAlertCloseControls.forEach((control) => {
        control.addEventListener('click', closeContactAlert);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && contactAlert && !contactAlert.hidden) {
            closeContactAlert();
        }
    });

    const isValidResponseValue = (type, value) => {
        const trimmedValue = value.trim();

        if (type === 'email') {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue);
        }

        if (type === 'phone') {
            return /^\+?[0-9\s-]{8,20}$/.test(trimmedValue);
        }

        if (type === 'linkedin') {
            return /^https:\/\/(www\.)?linkedin\.com\/.+/i.test(trimmedValue);
        }

        if (type === 'github') {
            return /^https:\/\/(www\.)?github\.com\/.+/i.test(trimmedValue);
        }

        return false;
    };

    senderName.addEventListener('input', () => clearFieldError(senderName, senderNameError));
    responseValue.addEventListener('input', () => clearFieldError(responseValue, responseValueError));
    senderMessage.addEventListener('input', () => clearFieldError(senderMessage, senderMessageError));
    responseType.addEventListener('change', () => clearFieldError(responseType, responseTypeError));

    quickMessageForm.addEventListener('input', clearFormStatus);

    quickMessageForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        clearFormStatus();
        clearFieldError(senderName, senderNameError);
        clearFieldError(responseType, responseTypeError);
        clearFieldError(responseValue, responseValueError);
        clearFieldError(senderMessage, senderMessageError);

        const senderNameValue = senderName.value.trim();
        const selectedType = responseType.value;
        const selectedValue = responseValue.value.trim();
        const message = senderMessage.value.trim();
        let hasError = false;

        if (senderNameValue.length < 2) {
            setFieldError(senderName, senderNameError, 'Please enter at least 2 characters.');
            hasError = true;
        }

        if (!selectedType) {
            setFieldError(responseType, responseTypeError, 'Please choose a response channel.');
            hasError = true;
        }

        if (!isValidResponseValue(selectedType, selectedValue)) {
            setFieldError(responseValue, responseValueError, 'Please enter a valid contact for the selected channel.');
            hasError = true;
        }

        if (message.length < 10) {
            setFieldError(senderMessage, senderMessageError, 'Message should be at least 10 characters.');
            hasError = true;
        }

        if (hasError) {
            setFormStatus('Please fix the highlighted fields and try again.', 'error');
            return;
        }

        const submitButton = quickMessageForm.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        const payload = {
            name: senderNameValue,
            responseType: selectedType,
            responseValue: selectedValue,
            message: message
        };

        try {
            const response = await fetch(quickMessageForm.action, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error('Request failed');
            }

            quickMessageForm.reset();
            responseValue.placeholder = 'Choose a channel first';
            setFormStatus('Message successfully sent!', 'success');
            openContactAlert('Message Sent', 'Thanks for reaching out. Your message has been sent successfully.', 'success');
        } catch (error) {
            setFormStatus('Message could not be sent. Please try again.', 'error');
            openContactAlert('Message Not Sent', 'Something went wrong while sending your message. Please try again.', 'error');
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        }
    });
}
