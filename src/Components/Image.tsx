interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  w: number;
  h: number;
}

export default function Image({ src, alt, w, h, ...props }: ImageProps) {
  const width = Math.round(w / 4);
  const height = Math.round(h / 4);

  return (
    <img
      src={src}
      alt={alt}
      className={`w-${width} h-${height} cursor-pointer drop-shadow-sm transition-shadow hover:drop-shadow-xl`}
      {...props}
    ></img>
  );
}
