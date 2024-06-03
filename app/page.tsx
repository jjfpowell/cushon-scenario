import { BlogPreview } from '@/types/BlogPreview';
import Timeline from './components/ProgressBars/Timeline';

async function getAvailableFunds() {
  const res = await fetch('http://localhost:3000/api/blog-previews', {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const content: BlogPreview[] = await getAvailableFunds();
  return (
    <div className="flex justify-center py-10">
      <Timeline blogPosts={content} />
    </div>
  );
}
