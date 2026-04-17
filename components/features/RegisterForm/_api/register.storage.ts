const REGISTER_STORAGE_KEY = "register";

type RegisterStorageData = {
    name: string;
    date: string;
};

function createUpdatedAtLabel(date: Date) {
    return (
        "последние изменения " +
        date.toLocaleDateString("ru-RU", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        }) +
        " в " +
        date.toLocaleTimeString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit",
        })
    );
}

export function saveRegisterMeta(name: string) {
    if (typeof window === "undefined") return;

    const now = new Date();

    const payload: RegisterStorageData = {
        name,
        date: createUpdatedAtLabel(now),
    };

    localStorage.setItem(REGISTER_STORAGE_KEY, JSON.stringify(payload));
}

export function getRegisterMeta(): RegisterStorageData | null {
    if (typeof window === "undefined") return null;

    const raw = localStorage.getItem(REGISTER_STORAGE_KEY);
    if (!raw) return null;

    try {
        return JSON.parse(raw) as RegisterStorageData;
    } catch {
        return null;
    }
}
