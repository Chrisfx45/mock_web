export const dynamic = "force-dynamic"; // defaults to force-static
export const dynamicParams = true
export const revalidate = false
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'
export const maxDuration = 5
 
export default function MyComponent() {}

export async function GET() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const todos = await res.json();

  return Response.json({ todos });
}