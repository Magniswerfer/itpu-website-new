/**
 * Fold-ud-menu på små skærme. Uden JavaScript er menuen altid synlig;
 * scriptet skjuler den og viser knappen, så den virker som progressiv forbedring.
 */
export function initMenu(): void {
  const header = document.querySelector<HTMLElement>('[data-site-header]');
  const toggle = header?.querySelector<HTMLButtonElement>('.site-nav__toggle');
  if (!header || !toggle) return;

  const setOpen = (open: boolean): void => {
    toggle.setAttribute('aria-expanded', String(open));
    header.setAttribute('data-menu', open ? 'open' : 'closed');
  };

  toggle.hidden = false;
  setOpen(false);

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && header.getAttribute('data-menu') === 'open') {
      setOpen(false);
      toggle.focus();
    }
  });
}
