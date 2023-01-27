/* 
Add it to ToolJet as Query
Run it on page load. You can enable it on advanced tab
*/

actions.setVariable('contactId', 1);

window.addEventListener("message", function (event) {
 
    if (event.source != window.parent) {
    
        return;
    
    }

    const eventData = JSON.parse(event.data)

    if (eventData.event === 'appContext') {
    

        const contactId = eventData.data.contact.id
        actions.unSetVariable('contactId');
        actions.setVariable('contactId', contactId);

        const conversationId = eventData.data.conversation.id
        actions.unSetVariable('conversationId');
        actions.setVariable('conversationId', conversationId);
    }

}, false);

window.parent.postMessage('chatwoot-dashboard-app:fetch-info', '*');