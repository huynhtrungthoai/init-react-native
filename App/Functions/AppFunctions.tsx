import {Platform, StatusBar} from 'react-native';
import {useEffect, useRef} from 'react';

export const isUrl = (string: String) => {
  const regex = /^((http|https|ftp):\/\/)/;
  return regex.test(string.toString());
};

export const usePrevious = (value: any) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
