
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Base from "./Base";




export default function Home() {
    return <Base>
        <div className="text-center">
            <h1 >The Assignment of Ascend Capital, Jaipur </h1>
            <button >
                <Link className="nav-link" to="/signup">
                    Signup
                </Link>
            </button>
            <button >
                <Link className="nav-link" to="/signin">
                  Sign In
              </Link>
            </button>

        </div>

    </Base>;
}
