interface ImageServiceInt {
  crear(photo: string): Promise<string | null>;
  eliminar(id: string): Promise<string | null>;
}

export default ImageServiceInt;
