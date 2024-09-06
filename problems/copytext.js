function copyCode(button) {
    // Get the code block text
    const codeBlock = document.querySelector('code')
    const codeText = codeBlock.innerText

    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(codeText).then(() => {
        // Success: Change button text to indicate success
        button.innerText = 'Copied!'

        // Revert button text after a short delay
        setTimeout(() => {
            button.innerText = 'Copy Code'
        }, 2000)
    }).catch(err => {
        // IF an error occurs, log it and alert the user
        console.error('Failed to copy text: ', err)
        alert('Failed to copy text. Please try again.')
    })
}