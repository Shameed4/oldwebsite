export default function Header({title}) {
    return (<header>
        <h1>
            {title || "Hello"}
        </h1>
    </header>);
}