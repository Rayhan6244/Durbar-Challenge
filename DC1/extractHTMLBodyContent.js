function extractBodyContent(htmlString) {
    const startTag = '<body>';
    const endTag = '</body>';
    
    const startIndex = htmlString.indexOf(startTag) + startTag.length;
    const endIndex = htmlString.indexOf(endTag);
    
    return htmlString.substring(startIndex, endIndex);
}
