import { memo, useCallback } from 'react';

const MainComponent = () => {
    const makeLog = useCallback(
        () => console.log('hi from MainComponent'),
        []
    );

    return (
        <>
            <ChildComponent makeLog={makeLog} />
        </>
    );
};

// memoized component
const ChildComponent = memo(({ makeLog }) => (
    <button onClick={makeLog}>say Hi from ChildComponent</button>
));
