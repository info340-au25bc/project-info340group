export default function Header() {
    return (
        <header>
            <div className="header-container">
                <div className="logo">
                    <h1>ThriveTogether</h1>
                </div>
                <div className="search-container">
                    <span className="search-icon">🔍</span>
                    <input type="text" class="search-bar" placeholder="Search Bar"/>
                </div>
            </div>
        </header>
    );
}