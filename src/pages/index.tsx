import { Auth, useAuth } from "@arcana/auth-react";

const onLogin = () => {
  // Route to authenticated page
  alert("Logged in successfully");
};

export default function Home() {
  const auth = useAuth();

  const func = async () => {
    const info = await auth.user?.email;
    console.log(info);
  };

  func();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <div>
        {auth.loading ? (
          "Loading"
        ) : auth.isLoggedIn ? (
          <p>Logged In</p>
        ) : (
          <div>
            <Auth externalWallet={true} theme={"light"} onLogin={onLogin} />
          </div>
        )}
      </div>
    </main>
  );
}
