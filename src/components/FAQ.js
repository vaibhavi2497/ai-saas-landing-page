export default function FAQ() {
    return `
    <section id="faq" class="faq">

        <h2>Frequently Asked Questions</h2>

        <p class="faq-subtitle">
            Everything you need to know about NovaAI.
        </p>

        <div class="faq-container">

            <div class="faq-item">
                <button class="faq-question">
                    What is NovaAI?
                    <span>+</span>
                </button>

                <div class="faq-answer">
                    <p>
                        NovaAI is an AI-powered platform that helps developers
                        build modern web applications faster.
                    </p>
                </div>
            </div>

            <div class="faq-item">
                <button class="faq-question">
                    Is there a free trial?
                    <span>+</span>
                </button>

                <div class="faq-answer">
                    <p>
                        Yes! You can start with a 14-day free trial without
                        entering your credit card details.
                    </p>
                </div>
            </div>

            <div class="faq-item">
                <button class="faq-question">
                    Can I cancel anytime?
                    <span>+</span>
                </button>

                <div class="faq-answer">
                    <p>
                        Absolutely. You can upgrade, downgrade,
                        or cancel your subscription at any time.
                    </p>
                </div>
            </div>

            <div class="faq-item">
                <button class="faq-question">
                    Is my data secure?
                    <span>+</span>
                </button>

                <div class="faq-answer">
                    <p>
                        Yes. We use enterprise-grade encryption and secure cloud
                        infrastructure to keep your data safe.
                    </p>
                </div>
            </div>

        </div>

    </section>
    `;
}