import { PostCard } from '@/components/post-card';
import { Button } from '@/components/ui/button';
import { PenLine } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Welcome to DevBlog</h1>
          <p className="text-muted-foreground">Discover stories, thinking, and expertise from writers on any topic.</p>
        </div>
        <Link href="/create">
          <Button>
            <PenLine className="mr-2 h-4 w-4" />
            Write a Post
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PostCard
          title="Getting Started with Next.js 13"
          excerpt="Learn how to build modern web applications with Next.js 13 and its powerful features."
          author="John Doe"
          date="2024-03-20"
          image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
          slug="getting-started-nextjs-13"
        />
        <PostCard
          title="Understanding TypeScript Generics"
          excerpt="Deep dive into TypeScript generics and how they can make your code more reusable."
          author="Jane Smith"
          date="2024-03-19"
          image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
          slug="typescript-generics-explained"
        />
        <PostCard
          title="Modern CSS Techniques"
          excerpt="Explore modern CSS techniques and best practices for building beautiful websites."
          author="Mike Johnson"
          date="2024-03-18"
          image="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80"
          slug="modern-css-techniques"
        />
      </div>
    </div>
  );
}