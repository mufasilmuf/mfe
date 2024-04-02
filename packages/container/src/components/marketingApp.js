import React, { useRef, useEffect } from "react";

import { mount as MarketingAppMount } from "marketing/MarketingApp";

const MarketingApp = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        MarketingAppMount(mountRef.current);
    });

    return <div ref={mountRef} />;
};

export default MarketingApp;
