/**
 * Sets object-position from natural dimensions so faces stay in frame without cropping.
 */
export function getHeroMobileFit(naturalWidth, naturalHeight) {
  if (!naturalWidth || !naturalHeight) {
    return { objectPosition: "center center" };
  }

  const ratio = naturalWidth / naturalHeight;

  if (ratio < 0.82) {
    return { objectPosition: "center top" };
  }
  if (ratio < 1.12) {
    return { objectPosition: "center center" };
  }
  return { objectPosition: "center center" };
}
