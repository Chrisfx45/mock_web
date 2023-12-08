export const dynamic = "force-dynamic"; // defaults to force-static
export const dynamicParams = true
export const revalidate = false
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'
export const maxDuration = 5

export async function GET() {
  const res = await fetch(`https://randomuser.me/api/`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const team = await res.json();


  return Response.json({ team });
}