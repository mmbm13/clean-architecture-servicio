interface Image {
  _id: string,
  photo: string,
  __v: number
}

export default Image;

export type AddImageParams = Omit<Image, 'id' | '__v'>
