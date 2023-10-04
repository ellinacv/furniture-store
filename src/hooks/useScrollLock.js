import { useCallback, useRef } from 'react';

const safeDocument = typeof document !== 'undefined' ? document : {};
const html = safeDocument.documentElement;
const { body } = safeDocument;

export const useScrollLock = () => {
  const isScrollLocked = useRef();

  const lockScroll = useCallback(() => {
    if (!body || !body.style || isScrollLocked.current) return;

    const scrollBarWidth = window.innerWidth - html.clientWidth;
    const bodyPaddingRight =
      parseInt(
        window.getComputedStyle(body).getPropertyValue('padding-right'),
      ) || 0;

    html.style.position = 'relative';
    html.style.overflow = 'hidden';
    body.style.position = 'relative';
    body.style.overflow = 'hidden';
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;

    isScrollLocked.current = true;
  }, []);

  const unlockScroll = useCallback(() => {
    if (!body || !body.style || !isScrollLocked.current) return;

    html.style.position = '';
    html.style.overflow = '';
    body.style.position = '';
    body.style.overflow = '';
    body.style.paddingRight = '';

    isScrollLocked.current = false;
  }, []);

  return [lockScroll, unlockScroll];
};
