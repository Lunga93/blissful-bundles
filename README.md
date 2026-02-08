# Blissful Bundles

Gift Website that is a gateway from ads to WhatsApp. Used to let people know about the existence of the company and attract new buyers.

## Getting Started

### 1. Firebase Setup

#### A. Create Project
1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new project named `blissful-bundles`.
3. Disable Google Analytics (optional).

#### B. Add Web App
1. Click the web icon `</>`.
2. Register app as `Blissful Bundles Web`.
3. Copy the `firebaseConfig` object values.

#### C. Create .env File
Create a file named `.env` in the project root and add your keys:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

#### D. Enable Firestore
1. Go to **Firestore Database** in the left menu.
2. Click **Create Database**.
3. Start in **Test Mode** (or Production Mode and update rules later).
4. Create a collection named `prices`.
5. Add documents with IDs matching the product slugs:
   - Document ID: `eternal-roses` -> Field: `price` (number): `340`
   - Document ID: `the-classic-trio` -> Field: `price` (number): `700`
   - Document ID: `the-sweet-pairing` -> Field: `price` (number): `0` (or leave empty if custom)

#### E. Enable Storage
1. Go to **Storage** in the left menu.
2. Click **Get Started**.
3. Start in **Test Mode**.
4. Create a folder named `products`.
5. Upload your images and rename them to match the slugs:
   - `eternal-roses.jpg`
   - `sweet-pairing.jpg`
   - `classic-trio.jpg`

### 2. Running the App

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Assets
- Replace `src/assets/waving-girl.json` with your actual Lottie JSON file.
