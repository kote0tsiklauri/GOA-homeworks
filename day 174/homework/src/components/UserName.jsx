import { useLocalStorage } from '../hooks/useLocalStorage';
import { useDebouncedQuery } from '../hooks/useDebouncedQuery';
export function UserName() {
    const [name, setName] = useLocalStorage('name', '');
    const [theme, setTheme] = useLocalStorage("theme", "light");
    const debouncedName = useDebouncedQuery(name, 500);

    if (theme === "light") {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
    } else {
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "#fff";
    }
    return (
        <div>
            <p>Hello {debouncedName}</p>

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />

            <p>Current Theme: {theme}</p>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                Toggle Theme
            </button>
        </div>
    );
}