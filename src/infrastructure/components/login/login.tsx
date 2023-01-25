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
        <div className="d-flex justify-content-end py-2 px-2">
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
                        className="auth__button--logout"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </>
            )}
        </div>
    );
}
