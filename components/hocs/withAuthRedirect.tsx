import { NextPage } from "next";
import { useRouter } from "next/router";
import useUserData from "../../hooks/useUserData";

function DefaultLoadingFallback() {
  return <p>Loading...</p>;
}

/**
 * Support client-side conditional redirecting based on the user's
 * authenticated state.
 *
 * @param WrappedComponent The component that this functionality
 * will be added to.
 * @param LoadingComponent The component that will be rendered while
 * the auth state is loading.
 * @param expectedAuth Whether the user should be authenticated for
 * the component to be rendered.
 * @param location The location to redirect to.
 */
export default function withAuthRedirect<CP = {}, IP = CP>({
  WrappedComponent,
  LoadingComponent = DefaultLoadingFallback,
  expectedAuth,
  location
}: {
  WrappedComponent: NextPage<CP, IP>;
  LoadingComponent?: NextPage;
  expectedAuth: boolean;
  location: string;
}) {
  const WithAuthRedirectWrapper: NextPage<CP, IP> = (props) => {
    const router = useRouter();
    const { loading, user, username } = useUserData();

    let isAuthenticated = user !== undefined && user !== null;
    if (user && !username) {
      isAuthenticated = false;
    }
    console.log(`isAuthenticated: ${isAuthenticated}`);

    if (loading) {
      return <LoadingComponent />;
    }
    if (typeof window !== "undefined" && expectedAuth !== isAuthenticated) {
      router.push(location);
      return <></>;
    }
    return <WrappedComponent {...props} />;
  };
  return WithAuthRedirectWrapper;
}
