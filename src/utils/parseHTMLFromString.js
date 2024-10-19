

function removeHTMLTags(str) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, 'text/html');
    return doc.body.textContent || '';
}

export default removeHTMLTags;