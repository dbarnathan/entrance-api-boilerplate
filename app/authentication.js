// Function to check if the user is logged in
function checkAuthentication() {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        // No access token, redirect to login page
        window.location.href = 'login.html';
    }
}

// Ensure check is called at the start
checkAuthentication();

// Variables to store tokens
let accessToken = localStorage.getItem('accessToken');
let clientId = localStorage.getItem('clientId');
let refreshToken = localStorage.getItem('refreshToken');
let userId = localStorage.getItem('userId');


// Function to refresh token when access token expires
async function refreshTokenFunc() {
    const payload = {
        client_id: clientId,
        refresh_token: refreshToken
    };

    try {
        const response = await fetch('https://apiv2.entrancegrp.com/authentication/refresh-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (data && data.record) {
            accessToken = data.record.access_token;
            refreshToken = data.record.refresh_token;
            clientId = data.record.client_id;
            userId = data.record.user_id;

            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('clientId', clientId);
            localStorage.setItem('userId', userId);


            console.log("Token refreshed successfully.");
        } else {
            console.log("Token refresh failed.");
        }
    } catch (error) {
        console.error("Error refreshing token:", error);
    }
}

// Function to make an authenticated API request
async function makeAuthenticatedRequest(url, method = 'GET', payload = null) {
    if (!accessToken) {
        console.log("No access token available, please login first.");
        window.location.href = 'login.html'; // Redirect to login page if no access token
        return;
    }

    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    };

    if (payload) {
        options.body = JSON.stringify(payload);
    }

    try {
        const response = await fetch(url, options);

        // If unauthorized, refresh the token and retry
        if (response.status === 401) {
            console.log("Access token expired, refreshing token...");
            await refreshTokenFunc();
            // Retry the request with the new token
            options.headers['Authorization'] = `Bearer ${accessToken}`;
            return await fetch(url, options);
        }

        return await response.json();
    } catch (error) {
        console.error("Error making authenticated request:", error);
    }
}
