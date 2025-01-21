'use client';
import React, { useEffect } from 'react';

export default function DataBg(): React.JSX.Element {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-background]');

    elements.forEach((element) => {
      const backgroundUrl = element.getAttribute('data-background');
      if (backgroundUrl) {
        element.style.backgroundImage = `url(${backgroundUrl})`;
      }
    });
  }, []);

  return <></>;
}
