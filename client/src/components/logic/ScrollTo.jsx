import React, {useRef} from 'react';

const ScrollTo = (reference) => {
    const executeScroll = () => reference.current.scrollIntoView()
    // run this function from an event handler or an effect to execute scroll

    return (
        <>
            <div ref={reference}>Element to scroll to</div>
            <button onClick={executeScroll}> Click to scroll </button>
        </>
    )
};

export default ScrollTo;