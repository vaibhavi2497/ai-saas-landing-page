export default function Navbar() {
    return `
    <nav class="navbar">

        <div class="logo">NovaAI</div>

        <button class="menu-toggle" id="menuToggle">
            ☰
        </button>

        <ul class="menu" id="menu">

            <li><a href="#hero">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>

        </ul>

        <button class="nav-btn">
            Get Started
        </button>

    </nav>
    `;
}