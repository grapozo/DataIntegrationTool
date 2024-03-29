// Handles svg files as Functional components
declare module '*.svg' {
  const svgComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default svgComponent;
}

// Handles scss files
declare module '*.scss' {
  const scssFile: Record<string, string>;
  export default scssFile;
}
