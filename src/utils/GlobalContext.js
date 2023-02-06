import React, { createContext, useContext, useState, useEffect } from 'react';

function getWindow()
{
  const { height, width, fontScale, scale } =
    const { height: innerHeight, width : innerWidth, fontScale, scale } = window
    window === null ? { height: 0, width: 0, fontScale: 0, scale: 0 } : window;
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindow());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindow());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function GetDevice() {
  // CheatSheet
  // 1 DP =  1 / 160
  // Diagonal length (c=sqrt(sq(a)+sq(b)) => smartPhone: 5", Phablet: 5-7", Tablet: 7-11", desktop 11"+

  const window = useWindowDimensions();

  const { height, width, fontScale, scale } =
    window === null ? { height: 0, width: 0, fontScale: 0, scale: 0 } : window;

  const platform =
    window === null ? undefined : window.navigator.userAgentData.platform;

  const portrait = width > height ? false : true;
  const landscape = width > height ? true : false;

  const diagonalLengthInches = Math.sqrt(height * height + width * width) / 160;

  const deviceType = {
    isSmartPhone: diagonalLengthInches <= 5 ? true : false,
    isPhablet:
      diagonalLengthInches > 5 && diagonalLengthInches <= 7 ? true : false,
    isSmallPad:
      diagonalLengthInches > 7 && diagonalLengthInches <= 9 ? true : false,
    isLargePad:
      diagonalLengthInches > 9 && diagonalLengthInches <= 10 ? true : false,
    isSmallLaptop:
      diagonalLengthInches > 10 && diagonalLengthInches <= 12.5 ? true : false,
    isMediumLaptop:
      diagonalLengthInches > 12.5 && diagonalLengthInches <= 15.5
        ? true
        : false,
    isLargeLaptop:
      diagonalLengthInches > 15.5 && diagonalLengthInches <= 17.5
        ? true
        : false,
    isSmallMonitor:
      diagonalLengthInches > 17.5 && diagonalLengthInches <= 22 ? true : false,
    isMediumMonitor:
      diagonalLengthInches > 22 && diagonalLengthInches <= 26 ? true : false,
    isLargeMonitor:
      diagonalLengthInches > 26 && diagonalLengthInches <= 30 ? true : false,
    isSmallTV:
      diagonalLengthInches > 17.5 && diagonalLengthInches <= 42 ? true : false,
    isMediumTV:
      diagonalLengthInches > 42 && diagonalLengthInches <= 55 ? true : false,
    isLargeTV:
      diagonalLengthInches > 55 && diagonalLengthInches <= 65 ? true : false,
    isExtraLargeTV:
      diagonalLengthInches > 65 && diagonalLengthInches <= 75 ? true : false,
    isXXLTV: diagonalLengthInches > 75 ? true : false,
  };

  const adjustedScale = deviceType.isSmartPhone
    ? 1
    : deviceType.isPhablet
    ? 1 / 1.2
    : deviceType.isSmallPad
    ? 1 / 1.4
    : deviceType.isLargePad
    ? 1 / 1.6
    : deviceType.isSmallLaptop
    ? 1 / 1.8
    : deviceType.isMediumLaptop
    ? 1 / 2
    : deviceType.isLargeLaptop
    ? 1 / 2.2
    : deviceType.isSmallMonitor
    ? 1 / 2.4
    : deviceType.isMediumMonitor
    ? 1 / 2.6
    : deviceType.isLargeMonitor
    ? 1 / 2.8
    : deviceType.isSmallTV
    ? 1 / 3
    : deviceType.isMediumTV
    ? 1 / 3.2
    : deviceType.isLargeTV
    ? 1 / 3.4
    : deviceType.isExtraLargeTV
    ? 1 / 3.6
    : deviceType.isXXLTV
    ? 1 / 3.8
    : 1 / 1.5;

  return {
    platform,
    portrait,
    landscape,
    ...deviceInformation,
    diagonalLengthInches,
    deviceType,
    fontScale,
    scale,
    adjustedScale,
  };
}

const GlobalContext = createContext({ ...GetDevice(null) });

export const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={{ ...GetDevice() }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default function useGlobal() {
  const device = useContext(GlobalContext);
  return { device };
}
