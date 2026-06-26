import { useState } from "react";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function ValidarUser() {
        fetch("http://localhost:5186/login/user/finduser", {
            method: "POST",
            headers: { "herader-type": "application/json" },
            body: JSON.stringify({ Email: username, PasswordHash: password })

        })
            .then((res) => res.text())
            .then((data) => {

                console.log(data)
            })
    }

    return (
        <>
        <h2>sss</h2>
            <form>
                <div>
                    <input
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    type="button"
                    onClick={ValidarUser}
                >
                    Login
                </button>
            </form>
        </>
    );
}

export default LoginPage;