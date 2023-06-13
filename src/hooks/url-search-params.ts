export function useSearchParams(): URLSearchParams | undefined {

  if (typeof window === "undefined") {
    return;
  }

  const currentSearchParams = new URLSearchParams(window.location.search);

  return currentSearchParams;
}