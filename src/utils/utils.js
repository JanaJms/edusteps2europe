export function chatOnWhatsapp() {
    if (typeof window === "undefined") return;

    window.open(
        "https://wa.me/330780752758",
        "_blank",
        "noopener,noreferrer"
    );
}
