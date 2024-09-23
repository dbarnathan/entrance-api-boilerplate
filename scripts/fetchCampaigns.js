async function fetchCampaigns() {
    const campaigns = await makeAuthenticatedRequest('https://apiv2.entrancegrp.com/campaigns?limit=100', 'GET');
    return campaigns
}
function getSentCampaigns(campaigns) {
    console.log('Campaigns in getSentCampaigns:', campaigns); // Log campaigns for debugging
    const sentCampaigns = [];  // Declare as an object

    // Check if records exist and have length
    if (!campaigns.records || campaigns.records.length === 0) {  
        console.log('Nothing from api');
        return [];
    } else {
        // Iterate over the actual campaign objects, not their keys
        for (const campaign of campaigns.records) {
            if (campaign.status === "sent") {
                sentCampaigns[campaign.id] = campaign;  // Store campaigns in the object using their ID as the key
            }
        }

        // Check if any sent campaigns were found
        if (sentCampaigns.length === 0) {
            console.log('No sent campaigns found');
            return [];
        }
        
        return sentCampaigns;
    }
}

function getAwaitingApprovalCampaigns(campaigns) {
    
}
function getAwaitingContentCampaigns(campaigns) {

    const missingContentCampaigns = [];  

        for (const campaign of campaigns.records) {
            // Check if text_message is missing or media_url is missing and campaign is not sent
            if (campaign.status !== "sent") {
                missingContentCampaigns[campaign.id] = campaign;
            }
        }

        if (missingContentCampaigns.length === 0) {
            console.log('No missing content campaigns found');
            return [];
        }

        return missingContentCampaigns;
    }
    async function sentGetCamps() {
        try {
            let campaigns = await fetchCampaigns(); // Fetch all campaigns from separate file
            console.log('Campaigns:', campaigns);
            campaigns = await getSentCampaigns(campaigns); // Filter campaigns to only show sent campaigns
            
            return campaigns; // Return all campaigns
        } catch (error) {
            console.error('Error fetching campaigns:', error);
            return null; // Return null if there's an error
        }
    }
    async function awaitingGetCamps() {
        try {
            let campaigns = await fetchCampaigns(); // Fetch all campaigns from separate file
            campaigns = await getAwaitingContentCampaigns(campaigns); // Filter campaigns to only show sent campaigns
    
            return campaigns;
        } catch (error) {
            console.error('Error fetching campaigns:', error);
            return null; 
        }
    }
    async function useSentCampaigns() {
        const campaigns = await sentGetCamps();  // Fetch campaigns
        return campaigns;  // Return the full set of campaigns (filtering is done elsewhere)
    }
    async function useAwaitingContent() {
        const campaigns = await awaitingGetCamps();
        return campaigns;  // Return the full set of campaigns (filtering is done elsewhere)
    }
