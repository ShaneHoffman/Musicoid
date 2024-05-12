'use client';

import { useEffect } from 'react';

const BrowsePage = () => {
  const getCharts = async () => {
    const music = MusicKit.getInstance();
    const charts = await music.api.music(
      `/v1/catalog/{{storefrontId}}/charts`,
      { types: ['songs'] }
    );
    console.log(charts);
  };

  useEffect(() => {
    getCharts();
  }, []);

  return <p>Browse Page</p>;
};

export default BrowsePage;
