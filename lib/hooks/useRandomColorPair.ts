import { useMemo } from 'react';
import { Tuple } from 'types';

export function useRandomColorPair(): Tuple<string> {
  const colors: Tuple<string>[] = [
    ['#F5E1FF', '#CAF0F8'],
    ['#EEEBFF', '#FFFAD4'],
    ['#FF6F59', '#43AA8B'],
    ['#F5FFC6', '#B4E1FF'],
    ['#CCFCCB', '#89AAE6'],
  ];

  const random = Math.round(Math.random() * (colors.length - 1));

  return useMemo(() => colors[random], []);
}
