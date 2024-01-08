import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Data {
    message: string;
}

const MyComponent: React.FC = () => {
    const [data, setData] = useState<Data | null>(null);

    useEffect(() => {
        axios.get<Data>('/api/my-endpoint/')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            {data && <p>{data.message}</p>}
        </div>
    );
};

export default MyComponent;
