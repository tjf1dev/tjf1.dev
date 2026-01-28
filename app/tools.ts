export function extractUrl(src: string) {
    const i = src.lastIndexOf('https/')
    if (i === -1) {
        throw new Error("cant extract url")
    }
    return src.slice(i).replace("https/", "https://")
}
export function getTime() {
    const now = new Date();

    const localDate = new Intl.DateTimeFormat(undefined, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(now);

    const polandDate = new Intl.DateTimeFormat(undefined, {
        timeZone: "Europe/Warsaw",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(now);

    const time = new Intl.DateTimeFormat(undefined, {
        timeZone: "Europe/Warsaw",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    }).format(now);

    if (localDate !== polandDate) {
        const date = new Intl.DateTimeFormat(undefined, {
            timeZone: "Europe/Warsaw",
            dateStyle: "medium",
        }).format(now);

        return `${date}, ${time}`;
    }

    return time;
}