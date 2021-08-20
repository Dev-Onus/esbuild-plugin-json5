// .json5 declarations
declare module "*.json5" {
  const content: {
    [key: string]: any;
  };
  export default content;
}
