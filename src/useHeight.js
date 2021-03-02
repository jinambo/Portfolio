import { useState, useEffect } from 'react';

const useHeight = () => {
    useEffect(() => {
        // Count and set components' height
        if (window.innerWidth > 660) {
            const pageContent = document.querySelector('.component-page');
            const pageHeight = document.querySelector('.span-col-2').offsetHeight;
            const headPageHeight = document.querySelector('.component-header').offsetHeight;
        
            pageContent.style.height = (pageHeight - headPageHeight - 50) + 'px';
        } else {
            // Phone navigation margin
            setTimeout(() => {
              const navHeight = document.querySelector('.profile').offsetHeight;
              const content = document.querySelector('.span-col-2');
        
              content.style.marginTop = navHeight + 65 + 'px';
            }, 50);
          }
    }, []);
}

export default useHeight;