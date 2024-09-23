async function fetchCampaignDetails(campaignId) {
    try {
        const campaignDetails = await makeAuthenticatedRequest(`https://apiv2.entrancegrp.com/campaigns/${campaignId}`, 'GET');
        return campaignDetails.record;
        
        // Populate the HTML elements with the campaign details
    } catch (error) {
        console.error('Error fetching campaign details:', error);
        alert('Error fetching campaign details. Please try again.');
    }
}