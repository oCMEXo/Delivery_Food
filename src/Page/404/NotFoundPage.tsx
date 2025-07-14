import './NotFoundPage.css'
import {useNavigate} from "react-router-dom";
import {FC} from "react";

interface PageProps {
    error?: Error & { status?: number } | null;
}

const NotFoundPage: FC<PageProps> = ({error}) => {
    const push = useNavigate()

    return (
        <main className="NotFoundPage-main">
            <div className="container">
                <div className="content-wrapper">
                    <div className="left-content">
                        <div className="error-number">
                            <span className="number">
                                {error?.status ??
                                    error?.message.match(/\d{3}/)?.[0] ?? "404"}
                            </span>
                        </div>
                        <h1 className="title">
                            {"Oops! This page is not on our "}
                            <span className="highlight">menu</span>
                        </h1>
                        <p className="description">
                            The page you're looking for seems to have been delivered to the wrong address. Don't worry,
                            our best
                            dishes are still available and ready to be delivered to your door.
                        </p>
                        <div className="actions">
                            <button className="btn btn-primary" onClick={() => push('/')}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     strokeWidth="2">
                                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                    <polyline points="9,22 9,12 15,12 15,22"/>
                                </svg>
                                Back to Home
                            </button>
                            <button className="btn btn-secondary" onClick={() => push('/menu')}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     strokeWidth="2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                    <line x1="16" y1="2" x2="16" y2="6"/>
                                    <line x1="8" y1="2" x2="8" y2="6"/>
                                    <line x1="3" y1="10" x2="21" y2="10"/>
                                </svg>
                                View Menu
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}


export default NotFoundPage;