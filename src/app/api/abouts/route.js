export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/daf64i8m3i6n/environments/master/entries?access_token=NtxgY1NwOp6myVe8XgpjYUJghvEipnTNBm8qGWnGWAM&content_type=about`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const about = await res.json();

  return Response.json({ about });
}