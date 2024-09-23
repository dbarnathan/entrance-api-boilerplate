function getCampaignIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('campaignId');
}