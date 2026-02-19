export function chatOnWhatsapp({ message }) {
    if (typeof window === "undefined") return;

    const encodedMessage = encodeURIComponent(message) ?? ''

    window.open(
        message ? `https://wa.me/330780742758?text=${encodedMessage}` : `https://wa.me/330780742758`,
        "_blank",
        "noopener,noreferrer"
    );
}

export function openLocation() {
    if (typeof window === "undefined") return;

    window.open(
        "https://maps.app.goo.gl/SZpMmRHdCERWfKPs6",
        "_blank",
        "noopener,noreferrer"
    );
}

export function openMail() {
    if (typeof window === "undefined") return;

    const subject = "Website Contact Form – Edusteps2Europe";
    const body =
        "Hello,\n\n";

    const mailto = `mailto:contact@edusteps2europe.com?subject=${encodeURIComponent(
        subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
}

