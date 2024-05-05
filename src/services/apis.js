const BASE_URL = process.env.REACT_APP_BASE_URL

export const predictionendpoint = {
    CURRENT_PREDICTOIN_API: BASE_URL + "/ml/supervisedPrediction"
}

export const contactusEndpoint = {
    CONTACT_US_API: BASE_URL + "/contact/contact-us"
}