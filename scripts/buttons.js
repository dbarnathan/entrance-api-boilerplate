function seeAwaitingContent() {
    document.getElementById('sentCampaigns').style.display = 'none';
    document.getElementById('awaitingApproval').style.display = 'none';
    document.getElementById('awaitingContent').style.display = 'block';
    fetchRecentCampaigns();
}

function seeAwaitingApproval() {
    document.getElementById('sentCampaigns').style.display = 'none';
    document.getElementById('awaitingApproval').style.display = 'block';
    document.getElementById('awaitingContent').style.display = 'none';
    fetchRecentCampaigns();
}

function seeSent() {
    document.getElementById('sentCampaigns').style.display = 'block';
    document.getElementById('awaitingApproval').style.display = 'none';
    document.getElementById('awaitingContent').style.display = 'none';
    fetchRecentCampaigns();
}