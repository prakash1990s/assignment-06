"use client";

import React, { Suspense } from 'react';

const userPromise = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog'); 
    return await res.json();
};

const UserParent = () => {
    return (
        <div>
            <Suspense fallback={<p>Loading...</p>}>
                <Users userPromise={userPromise()} />
            </Suspense>
        </div>
    );
};

export default UserParent;