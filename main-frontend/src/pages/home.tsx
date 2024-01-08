import MyComponent from "../components/test/backendApicalltest";

const header = () => { 
    return (
        <h1>This is header   <MyComponent /> </h1>
      
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