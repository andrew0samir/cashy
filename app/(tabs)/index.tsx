import "@/global.css";
import { Link } from "expo-router";
import { SafeAreaViewBase, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaViewBase className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        href="/onboarding"
        className="mt-4 p-4 rounded text-white bg-primary"
      >
        Get Started
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 p-4 rounded text-white bg-primary"
      >
        Go to sign in
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 p-4 rounded text-white bg-primary"
      >
        Go to sign up
      </Link>
      <Link
        href={{ pathname: "/subscriptions/[id]", params: { id: "spotify" } }}
        className="mt-4 p-4 rounded text-white bg-primary"
      >
        Spotify Subscription
      </Link>
      <Link
        href={{ pathname: "/subscriptions/[id]", params: { id: "claude" } }}
        className="mt-4 p-4 rounded text-white bg-primary"
      >
        Claude Subscription
      </Link>
    </SafeAreaViewBase>
  );
}
