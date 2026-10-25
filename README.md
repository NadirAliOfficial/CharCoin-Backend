# 🪙 CharCoin Backend

This is the official backend for the **CharCoin Ecosystem**, powering staking, DAO governance, charity voting, and token management on Solana.

### 🔧 Stack
- Solana (Anchor + Rust)
- Node.js (Express.js)
- MySQL (Database)
- Squads Multisig Integration
- REST APIs for Admin & PWA

All smart contract interactions and fund allocations are securely handled through this backend.

For full details, visit: [charcoin.org](https://charcoin.org)
<!-- updated: 2025-11-19-r01 -->

## Description
The CharCoin Backend provides RESTful APIs for managing users, campaigns, charities, staking, and lottery functionalities. It handles authentication via JWT, interacts with a MySQL database, and serves as the bridge between the front‑end PWA and Solana smart contracts.

## Features
- JWT based authentication for admin and user routes
- CRUD operations for admins, campaigns, categories, causes, news, and rewards
- Staking and top‑tier wallet management
- Charity lottery and reward distribution endpoints
- File upload handling for campaign assets
- Centralized error handling and logging

## Requirements
- Node.js (>= 14)
- MySQL server
- npm (comes with Node.js)

## Installation
```bash
# Clone the repository
git clone https://github.com/NadirAliOfficial/CharCoin-Backend.git
cd CharCoin-Backend

# Install dependencies
npm install
```

## Configuration
Create a `.env` file (or copy from `.env.example` if added) with the following variables:
```
JWT_SECRET=your_jwt_secret_here
# PROGRAM_ID is defined in config.js but not required as an env variable
```
The `config.js` file currently hard‑codes `JWT_SECRET`; you may replace it with `process.env.JWT_SECRET` for better security.

## Usage
Start the development server:
```bash
npm start
```
The server will listen on the port defined in `bin/www` (default 3000). API endpoints are prefixed with `/api` as defined in the route files.

## Project Structure
```
.
├── app.js                     # Express app setup
├── bin/www                    # Server entry point
├── config.js                  # Configuration constants
├── middlewares/
│   ├── auth.js                # JWT authentication middleware
│   └── upload.js              # Multer file upload middleware
├── models/
│   ├── admins.js
│   ├── campaigns.js
│   ├── categories.js
│   ├── causes.js
│   ├── charityLottery.js
│   ├── db.js
│   ├── news.js
│   ├── rewardCharityLottery.js
│   ├── rewardTopTier.js
│   ├── rewards-nft.js
│   ├── staking.js
│   ├── topTierWallet.js
│   └── user.js
├── routes/
│   ├── admins.js
│   ├── auth.js
│   ├── campaign.js
│   ├── category.js
│   ├── causes.js
│   ├── charity‑lottery‑winners.js
│   ├── dashboard.js
│   ├── index.js
│   ├── my‑impact.js
│   ├── news.js
│   ├── reward‑charity‑lottery.js
│   ├── reward‑top‑tier.js
│   ├── rewards‑nft.js
│   ├── staking.js
│   ├── top‑and‑winner.js
│   └── top‑wallets.js
├── uploads/.gitkeep           # Placeholder for uploaded files
├── package.json               # npm package definition
└── README.md                  # Project documentation
```

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
