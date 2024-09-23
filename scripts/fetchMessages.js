async function fetchCampaignMessages(campaignId, showStopMessages = false) {
    try {
        // Set the `stop` query parameter based on the button state
        stopParam = showStopMessages ? 'true' : 'false';
        console.log(`Fetching messages with stop=${stopParam} and lastId=${lastId}`);

        // Prevent multiple fetches at the same time
        isFetching = true;

        // Fetch messages from the server with the current lastId for pagination
        const messagesResponse = await makeAuthenticatedRequest(
            `https://apiv2.entrancegrp.com/campaigns/${campaignId}/responses?order=ASC&limit=25&stop=${stopParam}&lastid=${lastId}`,
            'GET'
        );

        console.log('Messages Response:', messagesResponse); // Debug log to check the API response

        const messages = messagesResponse.records;

        if (!messages || messages.length === 0) {
            console.log('No more messages found for this campaign.');
            isFetching = false;
            return;  // No more messages to display
        }

        // Update lastId with the id of the last message fetched for pagination
        lastId = messages[messages.length - 1].id;

        // Append new messages to the existing table
        const messagesTableBody = document.getElementById('messagesTable').querySelector('tbody');

        messages.forEach(message => {
            const row = document.createElement('tr');

            // Recipient Number
            const recipientCell = document.createElement('td');
            recipientCell.textContent = message.number || 'Unknown';
            row.appendChild(recipientCell);

            // Message Text
            const messageCell = document.createElement('td');
            const messageText = message.message || 'No message content';
            messageCell.textContent = messageText;
            row.appendChild(messageCell);

            // Tone analysis using Sentiment.js (Optional)
            const result = window.sentiment.analyze(messageText);
            let tone = 'Neutral';  // Default tone
            if (result.score > 0) {
                tone = 'Positive';
            } else if (result.score < 0) {
                tone = 'Negative';
            }

            // Tone Cell
            const toneCell = document.createElement('td');
            toneCell.textContent = tone;
            toneCell.classList.add(tone.toLowerCase());
            row.appendChild(toneCell);

            // Sent At (Timestamp)
            const sentAtCell = document.createElement('td');
            sentAtCell.textContent = message.ts ? new Date(message.ts).toLocaleString() : 'N/A';
            row.appendChild(sentAtCell);

            // Append the row to the table body (important to append, not overwrite)
            messagesTableBody.appendChild(row);
        });

        // Fetching is done
        isFetching = false;

    } catch (error) {
        console.error('Error fetching campaign messages:', error);
        alert('Error fetching campaign messages. Please try again.');
        isFetching = false; // Reset fetching state on error
    }
}