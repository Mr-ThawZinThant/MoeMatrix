import ProfileComponent from "../../src/components/UI/profile.tsx";

const header = () => { 
    return (
        ProfileComponent()
    );
};

const main = () => {
    return (
        <h1>This is main</h1>
    );
};

const footer = () => {
    return (
        <h1>This is footer</h1>
    );
};

export default function Home() {
    return (
        <div>
            <header>
                {header()}
            </header>
            <main>
                {main()}
            </main>
            <footer>
                {footer()}
            </footer>
        </div>
    );
};