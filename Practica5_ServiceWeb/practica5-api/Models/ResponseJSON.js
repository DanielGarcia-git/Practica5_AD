
function buildResponseJSON(success, title, text, data)
{
    return {'success': success, 'title_response': title, 'text_response': text, 'data': data};
}

module.exports = {
    buildResponseJSON
}
