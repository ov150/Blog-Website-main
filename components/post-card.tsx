import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

interface PostCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  slug: string;
}

export function PostCard({ title, excerpt, author, date, image, slug }: PostCardProps) {
  return (
    <Link href={`/post/${slug}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <CardHeader className="p-0">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h2>
          <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between text-sm text-muted-foreground">
          <span>{author}</span>
          <time dateTime={date}>{format(new Date(date), 'MMM d, yyyy')}</time>
        </CardFooter>
      </Card>
    </Link>
  );
}