const textarea = document.getElementById('restricted-textarea');
const charCountDisplay = document.getElementById('char-count');
const maxChars = textarea.getAttribute('maxlength');

// Update character count on page load (in case of pre-filled text)
window.onload = () => {
    const currentLength = textarea.value.length;
    charCountDisplay.textContent = `${maxChars - currentLength} characters remaining`;
};

textarea.addEventListener('input', () => {
    const currentLength = textarea.value.length;
    const remainingChars = maxChars - currentLength;
    charCountDisplay.textContent = `${remainingChars} characters remaining`;

    // Show a warning when near the limit
    if (remainingChars <= 20) {
        charCountDisplay.style.color = 'orange';  // Warning color
    } else {
        charCountDisplay.style.color = '#333';  // Normal color
    }

    // Enforce max length and visual feedback
    if (remainingChars === 0) {
        textarea.classList.add('limit-reached');
    } else {
        textarea.classList.remove('limit-reached');
    }
});
