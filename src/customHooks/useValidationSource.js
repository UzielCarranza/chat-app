import {useState, useEffect} from 'react';

export const useDataSource = props => {
    const [resource, setResource] = useState(null);

    useEffect(() => {
        (async () => {
            const result = props
            setResource(result);
        })();
    }, [props]);

    return resource;
}