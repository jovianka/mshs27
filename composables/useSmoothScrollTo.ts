export function useSmoothScrollTo(elementId: string): void {
  const element: HTMLElement = document.getElementById(elementId)!
  element.scrollIntoView({behavior: "smooth"})
}