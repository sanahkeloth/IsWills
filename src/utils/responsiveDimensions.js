import useGlobal from './GlobalContext';

/* Aspect Ratio : Height/Width
if height is set? aspectRatio of width = width/height
if width is set? aspectRatio of height = height/width
*/

// function adjustPixelSize(size) {
//   const newSize =
//     // Platform.OS === 'ios'
//     //   ? Math.round(PixelRatio.roundToNearestPixel(size)):
//   Math.round(PixelRatio.roundToNearestPixel(size) - 2);
//   return newSize <= 0 ? 0 : newSize;
// }

function InitialiseDeviceData(containerHeight, containerWidth) {
  const { device } = useGlobal();
  const scale = device.adjustedScale;

  const currentContainerHeight =
    containerHeight === 0
      ? device.height
      : (containerHeight * device.height) / 100;
  const currentContainerWidth =
    containerWidth === 0 ? device.width : (containerWidth * device.width) / 100;

  return { device, scale, currentContainerHeight, currentContainerWidth };
}

export function responsiveRatio(
  portrait,
  landscape,
  containerHeight,
  containerWidth,
  heightToWidthRatio = 0
) {
  const ratio =
    !!portrait && heightToWidthRatio > 0
      ? heightToWidthRatio
      : !!landscape && heightToWidthRatio > 0
      ? 1 / heightToWidthRatio
      : portrait
      ? containerHeight / containerWidth
      : containerWidth / containerHeight;

  return ratio;
}

export function responsiveDimensions(
  heightToWidthRatio = 0,
  maxHeightLandscape,
  maxWidthPortrait,
  containerHeight = 0,
  containerWidth = 0
) {
  const { device, scale, currentContainerHeight, currentContainerWidth } =
    InitialiseDeviceData(containerHeight, containerWidth);

  const ratio = responsiveRatio(
    device.portrait,
    device.landscape,
    maxHeightLandscape,
    maxWidthPortrait,
    heightToWidthRatio
  );

  const adjustedContainerHeight = currentContainerHeight * scale * 0.01;
  const adjustedMaxHeightLandscape =
    maxHeightLandscape * adjustedContainerHeight;
  const adjustedContainerWidth = currentContainerWidth * scale * 0.01;
  const adjustedMaxWidthPortrait = maxWidthPortrait * adjustedContainerWidth;

  const itemHeight = device.portrait
    ? adjustedMaxWidthPortrait * ratio
    : adjustedMaxHeightLandscape;
  const itemWidth = device.portrait
    ? adjustedMaxWidthPortrait
    : adjustedMaxHeightLandscape * ratio;

  const height =
    device.portrait && itemHeight > adjustedMaxHeightLandscape
      ? adjustedMaxHeightLandscape
      : device.landscape && itemHeight > adjustedMaxWidthPortrait / ratio
      ? adjustedMaxWidthPortrait / ratio
      : itemHeight;

  const width =
    device.portrait && itemWidth > adjustedMaxHeightLandscape / ratio
      ? adjustedMaxHeightLandscape / ratio
      : device.landscape && itemWidth > adjustedMaxWidthPortrait
      ? adjustedMaxWidthPortrait
      : itemWidth;

  const responsiveHeight = adjustPixelSize(height);
  const responsiveWidth = adjustPixelSize(width);
  return { responsiveHeight, responsiveWidth };
}

export function responsiveFont(size, containerHeight = 0, containerWidth = 0) {
  const { device, scale, currentContainerHeight, currentContainerWidth } =
    InitialiseDeviceData(containerHeight, containerWidth);

  const adjustedSize = device.portrait
    ? size * currentContainerWidth * scale * 0.01
    : size * currentContainerHeight * scale * 0.01;

  const responsiveFontSize = adjustPixelSize(adjustedSize);
  return responsiveFontSize;
}

export function responsiveSize(
  size,
  height = false,
  width = false,
  maxSize = 0,
  containerHeight = 0,
  containerWidth = 0
) {
  const { device, scale, currentContainerHeight, currentContainerWidth } =
    InitialiseDeviceData(containerHeight, containerWidth);

  const ratio = responsiveRatio(
    device.portrait,
    device.landscape,
    currentContainerHeight,
    currentContainerWidth,
    0
  );

  const adjustedSize =
    device.portrait && !height && !width
      ? size * currentContainerWidth * scale * 0.01
      : device.landscape && !height && !width
      ? size * currentContainerHeight * scale * 0.01
      : !!height && !width
      ? size * currentContainerHeight * scale * 0.01
      : !height && !!width
      ? size * currentContainerWidth * scale * 0.01
      : Math.sqrt(
          size *
            size *
            currentContainerWidth *
            currentContainerHeight *
            scale *
            0.01
        ) * 0.01;

  const newSize =
    // (device.portrait && !height && !width) && (adjustedSize > (size * currentContainerWidth * (1 / ratio) * scale * 0.01)) ?
    //     (size * currentContainerWidth * (1 / ratio) * scale * 0.01) :
    //     (device.landscape && !height && !width) && (adjustedSize > (size * currentContainerHeight * (1 / ratio) * scale * 0.01)) ?
    //         (size * currentContainerHeight * scale * 0.01) :
    //         !!height && !width && device.portrait && (adjustedSize > (size * currentContainerWidth * (1 / ratio) * scale * 0.01)) ?
    //             (size * currentContainerWidth * scale * 0.01) :
    //             !height && !!width && device.landscape && (adjustedSize > (size * currentContainerHeight * (1 / ratio) * scale * 0.01)) ?
    maxSize > 0 && adjustedSize > maxSize ? maxSize : adjustedSize;

  const responsiveSize = adjustPixelSize(newSize);

  return responsiveSize;
}

// adjustedSize > Math.sqrt(size * size * currentContainerWidth * currentContainerHeight * scale * 0.01 * ratio) ?
//     Math.sqrt(size * size * currentContainerWidth * currentContainerHeight * scale * 0.01 * ratio) :

export function videoDimensions(
  movie = true,
  maxHeightLandscape,
  maxWidthPortrait,
  containerWidth = 0,
  containerHeight = 0,
  heightToWidthRatio = 0
) {
  const { device, currentContainerHeight, currentContainerWidth } =
    InitialiseDeviceData(containerHeight, containerWidth);

  const ratio =
    heightToWidthRatio !== 0
      ? heightToWidthRatio
      : device.portrait
      ? 9 / 16
      : currentContainerHeight / currentContainerWidth;

  const width = movie
    ? currentContainerHeight / ratio
    : device.portrait
    ? currentContainerWidth * maxWidthPortrait * 0.01
    : (currentContainerHeight * maxHeightLandscape * 0.01) / ratio;

  const height = movie
    ? currentContainerHeight
    : device.portrait
    ? currentContainerWidth * maxWidthPortrait * 0.01 * ratio
    : currentContainerHeight * maxHeightLandscape * 0.01;

  const videoWidth =
    device.landscape && width > currentContainerWidth
      ? currentContainerWidth
      : device.portrait && height > currentContainerHeight
      ? currentContainerHeight / ratio
      : width;
  const videoHeight =
    device.landscape && width > currentContainerWidth
      ? currentContainerWidth * ratio
      : device.portrait && height > currentContainerHeight
      ? currentContainerHeight
      : height;

  return { videoWidth, videoHeight };
}
