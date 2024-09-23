async function getMedia(campaign) {
    if (!campaign.media_url) {
        document.getElementById('image-container').style.display = 'none';
        return;
    }
    return mediaResponse = await makeAuthenticatedRequest(`https://apiv2.entrancegrp.com/media?source=${campaign.media_url}`, 'GET');
}