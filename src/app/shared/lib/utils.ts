import classNames from 'classnames';

type ClassNames = Parameters<typeof classNames>;

export const cn = (...inputs: ClassNames) => {
  return classNames(...inputs);
};

