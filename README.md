# Merkli Velasco Rentals LLC - Commercial Real Estate Web App

Welcome to the official GitHub repository for Merkli Velasco Rentals LLC's Commercial Real Estate Informational Web App. This web app is designed to help future tenants find information on available commercial spaces and provide access to available Airbnb accommodations. Additionally, it offers a convenient payment portal for current tenants to pay their rent fees.

![Merkli Velasco Rentals LLC Logo](./src/assets/images/MVR-Logo.png)

## Features

- **Find Available Commercial Spaces:** Browse through our selection of commercial spaces to find the one that suits your business needs.

- **Explore Airbnb Accommodations:** For those seeking temporary accommodations, we provide a link to available Airbnb listings in the area.

- **Secure Payment Portal:** Current tenants can easily pay their rent fees through our secure online payment portal.

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB
- Payment Integration: Stripe API
- Deployment: Heroku

## Getting Started

To run the web app on your local server, follow these instructions:

### Prerequisites

Make sure you have the following software installed on your system:

- Node.js: [Download Node.js](https://nodejs.org)
- MongoDB: [Download MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone this repository to your local machine using:

```bash
git clone https://github.com/MerkliVelascoRentals/Commercial-Real-Estate-WebApp.git
```

2. Navigate to the project directory:

```bash
cd Commercial-Real-Estate-WebApp
```

3. Install the required dependencies:

```bash
npm install
```

4. Set up environment variables:

   - Create a `.env` file in the root of the project.
   - Add the following environment variables with your configuration:

     ```env
     MONGODB_URI=your_mongodb_connection_string
     STRIPE_API_KEY=your_stripe_api_key
     ```

### Running the App

Once the installation and configuration are complete, you can start the app locally:

```bash
npm start
```

The web app will be accessible at [http://localhost:3000](http://localhost:3000) in your web browser.

## Deployment

The web app is deployed on Heroku and can be accessed at [https://www.merkli-velasco-rentals.com](https://www.merkli-velasco-rentals.com).

## Contributions

We welcome contributions to improve our web app! If you find a bug or have suggestions for new features, please open an issue or submit a pull request.

## Contact

For any inquiries or support, please contact our team at [contact@merkli-velasco-rentals.com](mailto:contact@merkli-velasco-rentals.com).

---

Thank you for choosing Merkli Velasco Rentals LLC. We hope our web app helps you find the perfect commercial space for your business needs!
