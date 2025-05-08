import { GoogleOAuthProvider } from "@react-oauth/google";
import DestinationsPage from "./1stpage/destinations/page";
import Hero from "./1stpage/hero/page";
import Navbar from "./1stpage/Navbar";
import PopularDestinations from "./1stpage/popular/page";
import Footer from "./footer/page";
import TripPlanner from "./trip/page";

export default function Home() {
  const clientId = process.env.AUTH_CLIENT_ID;

  if (!clientId) {
    return (
      <div className="text-center p-4">
        <p className="text-red-500 font-bold">
          Error: Google OAuth Client ID is not configured.
        </p>
        <p>Please set the AUTH_CLIENT_ID environment variable.</p>
      </div>
    );
  }

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <>
        <Navbar />
        <Hero />
        <TripPlanner />
        <DestinationsPage />
        <PopularDestinations />
        <Footer />
      </>
    </GoogleOAuthProvider>
  );
}
