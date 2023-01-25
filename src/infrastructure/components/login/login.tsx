import { useAuth0 } from "@auth0/auth0-react";

export function LoginButton() {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    const handleLogin = () => {
        loginWithRedirect();
    };

    const handleLogout = () => {
        logout();
    };

    return (
        <div>
            {!isAuthenticated && (
                <button
                    className="auth__button--logout btn btn-primary "
                    onClick={handleLogin}
                >
                    Login
                </button>
            )}
            {isAuthenticated && (
                <>
                    <div className="auth">
                        <p className="auth__usermail">{user?.email}</p>
                    </div>
                    <button
                        className="auth__button--logout text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2 py-1 px-2"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </>
            )}
        </div>
    );
}
