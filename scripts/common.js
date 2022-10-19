exports.genFolderName = (question) => {
    return `${String(question.index).padStart(4, '0')}.${question.title_slug}`;
};
