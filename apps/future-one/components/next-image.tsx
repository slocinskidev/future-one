import Image, { ImageProps } from 'next/image';

type NextImageProps = {
  alt: string;
  imgClassName?: string;
} & ImageProps;

export const NextImage = ({
  src,
  width,
  height,
  alt,
  className,
  imgClassName,
  ...rest
}: NextImageProps) => {
  return (
    <figure {...{ className }}>
      <Image
        {...{ className: imgClassName, src, width, height, alt }}
        {...rest}
      />
    </figure>
  );
};
