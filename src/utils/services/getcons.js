import { cache } from "react";

export const revalidate = 1;

export const getCont = cache(async (id) => {
  console.log(id);
  const item = await fetch(
    `https://cdn.contentful.com/spaces/daf64i8m3i6n/environments/master/entries/${id}?access_token=NtxgY1NwOp6myVe8XgpjYUJghvEipnTNBm8qGWnGWAM&content_type=productsServices`
  );
  
  return item.json();
});